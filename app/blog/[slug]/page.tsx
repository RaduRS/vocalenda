import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, Clock, Calendar, User, Tag } from 'lucide-react';
import { getBlogPostBySlug, getAllBlogPosts } from '@/lib/content-loader';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { Footer } from '@/components/ui/footer';

interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

// Generate static params for all blog posts
export async function generateStaticParams() {
  const posts = getAllBlogPosts();
  return posts.map((post) => ({
    slug: post.metadata.slug,
  }));
}

// Generate metadata for SEO
export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    return {
      title: 'Post Not Found',
    };
  }

  const { metadata } = post;

  return {
    title: metadata.title,
    description: metadata.metaDescription || metadata.excerpt,
    keywords: metadata.keywords?.join(', '),
    openGraph: {
      title: metadata.title,
      description: metadata.metaDescription || metadata.excerpt,
      type: 'article',
      publishedTime: metadata.publishedAt,
      authors: metadata.author ? [metadata.author] : undefined,
      tags: metadata.tags,
      images: metadata.featuredImage ? [metadata.featuredImage] : undefined,
    },
    twitter: {
      card: 'summary_large_image',
      title: metadata.title,
      description: metadata.metaDescription || metadata.excerpt,
      images: metadata.featuredImage ? [metadata.featuredImage] : undefined,
    },
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const { metadata, content } = post;

  return (
    <div className="min-h-screen bg-white">
      {/* Top spacing to account for fixed navbar */}
      <div className="pt-20">
        {/* Back Navigation */}
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-slate-500 hover:text-slate-700 transition-colors text-sm font-medium"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Blog
          </Link>
        </div>

        {/* Article Header */}
        <header className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pb-8">
          {/* Category Badge */}
          {metadata.category && (
            <div className="mb-6">
              <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-emerald-100 text-emerald-800">
                {metadata.category}
              </span>
            </div>
          )}

          {/* Title */}
          <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-6 leading-tight tracking-tight">
            {metadata.title}
          </h1>

          {/* Excerpt */}
          {metadata.excerpt && (
            <p className="text-xl text-slate-600 mb-8 leading-relaxed">
              {metadata.excerpt}
            </p>
          )}

          {/* Meta Information */}
          <div className="flex flex-wrap items-center gap-6 text-slate-500 text-sm">
            {metadata.author && (
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                  <User className="w-4 h-4 text-white" />
                </div>
                <span className="font-medium">{metadata.author}</span>
              </div>
            )}
            
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              <span>
                {new Date(metadata.publishedAt).toLocaleDateString('en-GB', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })}
              </span>
            </div>

            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              <span>{metadata.readTime} min read</span>
            </div>
          </div>
        </header>

        {/* Featured Image */}
        {metadata.featuredImage && (
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
            <div className="aspect-video bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
              <div className="text-white text-center">
                <h2 className="text-2xl font-bold mb-2">Featured Image</h2>
                <p className="text-blue-100">Image would be displayed here</p>
              </div>
            </div>
          </div>
        )}

        {/* Article Content */}
        <div className="bg-gradient-to-b from-gray-50 to-white py-12">
          <article className="max-w-3xl mx-auto px-6 sm:px-8 lg:px-12 bg-white rounded-2xl shadow-sm border border-gray-100 py-12">
          <div className="prose prose-xl max-w-none font-sans
                           prose-headings:text-slate-900 prose-headings:font-bold prose-headings:tracking-tight prose-headings:leading-tight
                          prose-h1:text-4xl prose-h1:font-bold prose-h1:text-gray-900 prose-h1:mb-8 prose-h1:leading-[1.2] prose-h1:tracking-tight
                           prose-h2:text-3xl prose-h2:mb-8 prose-h2:mt-20 prose-h2:leading-[1.2] prose-h2:border-l-4 prose-h2:border-blue-500 prose-h2:pl-6 prose-h2:tracking-tight
                           prose-h3:text-2xl prose-h3:mb-6 prose-h3:mt-14 prose-h3:leading-[1.3] prose-h3:text-slate-800 prose-h3:tracking-normal
                           prose-p:text-slate-700 prose-p:leading-[1.7] prose-p:mb-6 prose-p:text-lg prose-p:max-w-none prose-p:tracking-normal
                          prose-strong:text-slate-900 prose-strong:font-semibold prose-strong:tracking-normal
                          prose-em:text-slate-700 prose-em:not-italic prose-em:font-medium prose-em:tracking-normal
                         prose-a:text-blue-600 prose-a:no-underline hover:prose-a:underline prose-a:font-medium prose-a:transition-all prose-a:duration-200
                         prose-code:bg-slate-100 prose-code:text-slate-800 prose-code:px-2 prose-code:py-1 prose-code:rounded prose-code:text-sm prose-code:font-mono
                         prose-pre:bg-slate-900 prose-pre:text-slate-100 prose-pre:rounded-lg prose-pre:p-6 prose-pre:shadow-lg
                         prose-blockquote:border-l-4 prose-blockquote:border-blue-500 prose-blockquote:pl-8 prose-blockquote:py-4 prose-blockquote:bg-blue-50 prose-blockquote:rounded-r-lg prose-blockquote:not-italic prose-blockquote:text-slate-700 prose-blockquote:shadow-sm
                         prose-ul:mb-8 prose-ol:mb-8 prose-ul:space-y-2 prose-ol:space-y-2
                         prose-li:leading-[1.7] prose-li:text-lg prose-li:text-slate-700 prose-li:mb-2 prose-li:tracking-normal
                         prose-img:rounded-lg prose-img:shadow-lg prose-img:my-8 prose-img:transition-transform prose-img:duration-300 hover:prose-img:scale-105"
               style={{
                 '--table-border': '1px solid #e2e8f0',
                 '--table-bg': 'white',
                 '--th-bg': '#f8fafc',
                 '--cell-padding': '16px 20px'
               } as React.CSSProperties}>
            <style dangerouslySetInnerHTML={{
              __html: `
                .prose table {
                  border-collapse: collapse !important;
                  border: var(--table-border) !important;
                  width: 100% !important;
                  margin: 2.5rem 0 !important;
                  background-color: var(--table-bg) !important;
                  border-radius: 8px !important;
                  overflow: hidden !important;
                  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1) !important;
                }
                .prose th {
                  border: var(--table-border) !important;
                  background-color: var(--th-bg) !important;
                  padding: var(--cell-padding) !important;
                  text-align: left !important;
                  font-weight: 600 !important;
                  color: #1e293b !important;
                  font-size: 1rem !important;
                  letter-spacing: 0.025em !important;
                }
                .prose td {
                  border: var(--table-border) !important;
                  padding: var(--cell-padding) !important;
                  color: #475569 !important;
                  font-size: 1rem !important;
                  line-height: 1.6 !important;
                }
                .prose tbody tr:hover {
                  background-color: #f8fafc !important;
                }
              `
            }} />
            <ReactMarkdown remarkPlugins={[remarkGfm]}>
              {content}
            </ReactMarkdown>
          </div>

          {/* Tags */}
          {metadata.tags && metadata.tags.length > 0 && (
            <div className="mt-12 pt-8 border-t border-slate-200">
              <div className="flex items-center gap-2 mb-4">
                <Tag className="w-4 h-4 text-slate-500" />
                <span className="text-sm font-medium text-slate-500">Tags</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {metadata.tags.map((tag) => (
                  <span
                    key={tag}
                    className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-slate-100 text-slate-700 hover:bg-slate-200 transition-colors"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          )}
        </article>
        </div>

        {/* Call to Action */}
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 mb-12">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-center text-white">
            <h2 className="text-2xl font-bold mb-4">
              Ready to Transform Your Business Communication?
            </h2>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
               Join thousands of businesses already using Vocalenda&apos;s AI receptionist to improve customer service and reduce costs.
             </p>
            <Link
              href="/sign-up"
              className="inline-flex items-center px-6 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-blue-50 transition-colors"
            >
              Sign Up
            </Link>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
}