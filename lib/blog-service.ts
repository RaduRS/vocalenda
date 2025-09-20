import { createClient } from '@supabase/supabase-js';

// Create a generic supabase client for blog operations
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;
const supabase = createClient(supabaseUrl, supabaseAnonKey);

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  meta_description?: string;
  keywords: string[];
  featured_image_url?: string;
  read_time_minutes: number;
  view_count: number;
  published_at: string;
  is_published: boolean;
  is_featured: boolean;
  created_at: string;
  updated_at: string;
  category: BlogCategory;
  author: BlogAuthor;
  tags: BlogTag[];
}

export interface BlogCategory {
  id: string;
  name: string;
  slug: string;
  description?: string;
  color: string;
}

export interface BlogAuthor {
  id: string;
  name: string;
  email?: string;
  bio?: string;
  avatar_url?: string;
  social_links: Record<string, string>;
}

export interface BlogTag {
  id: string;
  name: string;
  slug: string;
}

export interface BlogPostSummary {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  featured_image_url?: string;
  read_time_minutes: number;
  view_count: number;
  published_at: string;
  is_featured: boolean;
  category: BlogCategory;
  author: Pick<BlogAuthor, 'id' | 'name'>;
}

class BlogService {
  /**
   * Get all published blog posts with pagination
   */
  async getPosts(options: {
    page?: number;
    limit?: number;
    category?: string;
    featured?: boolean;
  } = {}): Promise<{ posts: BlogPostSummary[]; total: number; hasMore: boolean }> {
    const { page = 1, limit = 10, category, featured } = options;
    const offset = (page - 1) * limit;

    let query = supabase
      .from('blog_posts')
      .select(`
        id,
        title,
        slug,
        excerpt,
        featured_image_url,
        read_time_minutes,
        view_count,
        published_at,
        is_featured,
        category:blog_categories(id, name, slug, color),
        author:blog_authors(id, name)
      `, { count: 'exact' })
      .eq('is_published', true)
      .order('published_at', { ascending: false })
      .range(offset, offset + limit - 1);

    if (category) {
      query = query.eq('blog_categories.slug', category);
    }

    if (featured !== undefined) {
      query = query.eq('is_featured', featured);
    }

    const { data: posts, error, count } = await query;

    if (error) {
      console.error('Error fetching blog posts:', error);
      throw new Error('Failed to fetch blog posts');
    }

    const total = count || 0;
    const hasMore = offset + limit < total;

    return {
      posts: (posts as unknown as BlogPostSummary[]) || [],
      total,
      hasMore,
    };
  }

  /**
   * Get a single blog post by slug
   */
  async getPostBySlug(slug: string): Promise<BlogPost | null> {
    const { data: post, error } = await supabase
      .from('blog_posts')
      .select(`
        *,
        category:blog_categories(*),
        author:blog_authors(*),
        tags:blog_post_tags(tag:blog_tags(*))
      `)
      .eq('slug', slug)
      .eq('is_published', true)
      .single();

    if (error) {
      if (error.code === 'PGRST116') {
        return null; // Post not found
      }
      console.error('Error fetching blog post:', error);
      throw new Error('Failed to fetch blog post');
    }

    // Transform the tags structure
    const transformedPost: BlogPost = {
      ...post,
      tags: post.tags?.map((tagRelation: { tag: BlogTag }) => tagRelation.tag) || [],
    };

    return transformedPost;
  }

  /**
   * Get featured blog posts
   */
  async getFeaturedPosts(limit: number = 3): Promise<BlogPostSummary[]> {
    const { posts } = await this.getPosts({ featured: true, limit });
    return posts;
  }

  /**
   * Get related posts based on category and tags
   */
  async getRelatedPosts(postId: string, limit: number = 3): Promise<BlogPostSummary[]> {
    // First get the current post's category and tags
    const { data: currentPost } = await supabase
      .from('blog_posts')
      .select('category_id, blog_post_tags(tag_id)')
      .eq('id', postId)
      .single();

    if (!currentPost) return [];

    // Find related posts by category or shared tags
    let query = supabase
      .from('blog_posts')
      .select(`
        id,
        title,
        slug,
        excerpt,
        featured_image_url,
        read_time_minutes,
        view_count,
        published_at,
        is_featured,
        category:blog_categories(id, name, slug, color),
        author:blog_authors(id, name)
      `)
      .eq('is_published', true)
      .neq('id', postId)
      .order('published_at', { ascending: false })
      .limit(limit);

    // Prefer posts from the same category
    if (currentPost.category_id) {
      query = query.eq('category_id', currentPost.category_id);
    }

    const { data: posts } = await query;
    return (posts as unknown as BlogPostSummary[]) || [];
  }

  /**
   * Get all blog categories
   */
  async getCategories(): Promise<BlogCategory[]> {
    const { data: categories, error } = await supabase
      .from('blog_categories')
      .select('*')
      .order('name');

    if (error) {
      console.error('Error fetching blog categories:', error);
      throw new Error('Failed to fetch blog categories');
    }

    return (categories as BlogCategory[]) || [];
  }

  /**
   * Increment view count for a blog post
   */
  async incrementViewCount(postId: string): Promise<void> {
    const { error } = await supabase.rpc('increment_blog_post_views', {
      post_id: postId,
    });

    if (error) {
      console.error('Error incrementing view count:', error);
      // Don't throw error for view count increment failures
    }
  }

  /**
   * Search blog posts
   */
  async searchPosts(query: string, limit: number = 10): Promise<BlogPostSummary[]> {
    const { data: posts, error } = await supabase
      .from('blog_posts')
      .select(`
        id,
        title,
        slug,
        excerpt,
        featured_image_url,
        read_time_minutes,
        view_count,
        published_at,
        is_featured,
        category:blog_categories(id, name, slug, color),
        author:blog_authors(id, name)
      `)
      .eq('is_published', true)
      .or(`title.ilike.%${query}%,excerpt.ilike.%${query}%,content.ilike.%${query}%`)
      .order('published_at', { ascending: false })
      .limit(limit);

    if (error) {
      console.error('Error searching blog posts:', error);
      throw new Error('Failed to search blog posts');
    }

    return (posts as unknown as BlogPostSummary[]) || [];
  }
}

export const blogService = new BlogService();