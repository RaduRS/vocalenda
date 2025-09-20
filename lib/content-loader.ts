import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

export interface BlogPostMetadata {
  title: string;
  slug: string;
  excerpt: string;
  publishedAt: string;
  readTime: number;
  featured?: boolean;
  category?: string;
  tags?: string[];
  author?: string;
  metaDescription?: string;
  keywords?: string[];
  featuredImage?: string;
}

export interface BlogPostContent {
  metadata: BlogPostMetadata;
  content: string;
}

const CONTENT_DIR = path.join(process.cwd(), 'content', 'blog');

/**
 * Get all blog post files from the content directory
 */
function getBlogPostFiles(): string[] {
  if (!fs.existsSync(CONTENT_DIR)) {
    return [];
  }
  
  return fs.readdirSync(CONTENT_DIR)
    .filter(file => file.endsWith('.md'))
    .map(file => path.join(CONTENT_DIR, file));
}

/**
 * Read and parse a single blog post file
 */
function readBlogPost(filePath: string): BlogPostContent | null {
  try {
    const fileContent = fs.readFileSync(filePath, 'utf8');
    const { data, content } = matter(fileContent);
    
    // Extract slug from filename
    const filename = path.basename(filePath, '.md');
    
    // Calculate read time (rough estimate: 200 words per minute)
    const wordCount = content.split(/\s+/).length;
    const readTime = Math.ceil(wordCount / 200);
    
    // Create metadata with defaults
    const metadata: BlogPostMetadata = {
      title: data.title || 'Untitled',
      slug: data.slug || filename,
      excerpt: data.excerpt || content.substring(0, 160) + '...',
      publishedAt: data.publishedAt || data.date || new Date().toISOString(),
      readTime: data.readTime || readTime,
      featured: data.featured || false,
      category: data.category,
      tags: data.tags || [],
      author: data.author,
      metaDescription: data.metaDescription || data.description,
      keywords: data.keywords || [],
      featuredImage: data.featuredImage || data.image,
    };
    
    return {
      metadata,
      content,
    };
  } catch (error) {
    console.error(`Error reading blog post ${filePath}:`, error);
    return null;
  }
}

/**
 * Get all blog posts with metadata
 */
export function getAllBlogPosts(): BlogPostContent[] {
  const files = getBlogPostFiles();
  
  return files
    .map(readBlogPost)
    .filter((post): post is BlogPostContent => post !== null)
    .sort((a, b) => {
      // Sort by published date, newest first
      return new Date(b.metadata.publishedAt).getTime() - new Date(a.metadata.publishedAt).getTime();
    });
}

/**
 * Get a single blog post by slug
 */
export function getBlogPostBySlug(slug: string): BlogPostContent | null {
  const files = getBlogPostFiles();
  
  for (const file of files) {
    const post = readBlogPost(file);
    if (post && post.metadata.slug === slug) {
      return post;
    }
  }
  
  return null;
}

/**
 * Get featured blog posts
 */
export function getFeaturedBlogPosts(limit: number = 3): BlogPostContent[] {
  return getAllBlogPosts()
    .filter(post => post.metadata.featured)
    .slice(0, limit);
}

/**
 * Get blog posts by category
 */
export function getBlogPostsByCategory(category: string): BlogPostContent[] {
  return getAllBlogPosts()
    .filter(post => post.metadata.category === category);
}

/**
 * Get blog posts by tag
 */
export function getBlogPostsByTag(tag: string): BlogPostContent[] {
  return getAllBlogPosts()
    .filter(post => post.metadata.tags?.includes(tag));
}

/**
 * Search blog posts by title and content
 */
export function searchBlogPosts(query: string): BlogPostContent[] {
  const searchTerm = query.toLowerCase();
  
  return getAllBlogPosts()
    .filter(post => {
      const titleMatch = post.metadata.title.toLowerCase().includes(searchTerm);
      const excerptMatch = post.metadata.excerpt.toLowerCase().includes(searchTerm);
      const contentMatch = post.content.toLowerCase().includes(searchTerm);
      const tagMatch = post.metadata.tags?.some(tag => 
        tag.toLowerCase().includes(searchTerm)
      );
      
      return titleMatch || excerptMatch || contentMatch || tagMatch;
    });
}

/**
 * Get all unique categories
 */
export function getAllCategories(): string[] {
  const categories = getAllBlogPosts()
    .map(post => post.metadata.category)
    .filter((category): category is string => Boolean(category));
    
  return [...new Set(categories)].sort();
}

/**
 * Get all unique tags
 */
export function getAllTags(): string[] {
  const tags = getAllBlogPosts()
    .flatMap(post => post.metadata.tags || []);
    
  return [...new Set(tags)].sort();
}