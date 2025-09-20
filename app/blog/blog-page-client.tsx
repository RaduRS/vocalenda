"use client";

import { useState } from "react";
import Link from "next/link";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { BlogPostContent } from "@/lib/content-loader";

interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  publishDate: string;
  readTime: string;
  category: string;
  featured?: boolean;
}

interface BlogPageClientProps {
  blogPosts: BlogPostContent[];
  categories: string[];
}

export function BlogPageClient({ blogPosts: rawBlogPosts, categories: rawCategories }: BlogPageClientProps) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  
  // Transform content loader format to our BlogPost interface
  const blogPosts: BlogPost[] = rawBlogPosts.map(post => ({
    slug: post.metadata.slug,
    title: post.metadata.title,
    excerpt: post.metadata.excerpt,
    publishDate: post.metadata.publishedAt,
    readTime: `${post.metadata.readTime} min read`,
    category: post.metadata.category || "General",
    featured: post.metadata.featured || false,
  }));

  // Get categories and add "All" option
  const categories = ["All", ...rawCategories];
  
  const featuredPosts = blogPosts.filter(post => post.featured);
  const filteredPosts = selectedCategory === "All" 
    ? blogPosts 
    : blogPosts.filter(post => post.category === selectedCategory);

  return (
    <div className="min-h-screen bg-white">
      {/* Top spacing to account for fixed navbar */}
      <div className="pt-20">
        {/* Hero Section */}
        <section className="py-16 sm:py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-slate-900 tracking-tight">
                AI Receptionist <span className="text-blue-600">Expert Guides</span>
              </h1>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto mb-8 leading-relaxed">
                Learn everything about AI receptionists, 24/7 call answering services, and voice appointment scheduling. 
                Expert insights to help you automate and grow your business.
              </p>
            </div>
          </div>
        </section>

        {/* Featured Posts */}
        <section className="pb-16">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold mb-12 text-slate-900 tracking-tight">Featured Articles</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              {featuredPosts.map((post) => (
                <article key={post.slug} className="bg-white rounded-xl border border-slate-200 overflow-hidden hover:shadow-lg transition-all duration-300 hover:border-slate-300">
                  <div className="p-6">
                    <div className="flex items-center gap-4 mb-4">
                      <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium max-w-[150px] truncate">
                        {post.category.length > 15 ? `${post.category.substring(0, 15)}...` : post.category}
                      </span>
                      <div className="flex items-center text-slate-500 text-sm">
                        <Clock className="w-4 h-4 mr-1" />
                        {post.readTime}
                      </div>
                    </div>
                    <h3 className="text-xl font-bold mb-3 text-slate-900 line-clamp-2 leading-tight">
                      {post.title}
                    </h3>
                    <p className="text-slate-600 mb-6 line-clamp-3 leading-relaxed">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center text-slate-500 text-sm">
                        <Calendar className="w-4 h-4 mr-1" />
                        {new Date(post.publishDate).toLocaleDateString('en-GB', { 
                          day: 'numeric', 
                          month: 'long', 
                          year: 'numeric' 
                        })}
                      </div>
                      <Link href={`/blog/${post.slug}`}>
                        <Button variant="ghost" size="sm" className="text-blue-600 hover:text-blue-700 hover:bg-blue-50">
                          Read More <ArrowRight className="w-4 h-4 ml-1" />
                        </Button>
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* All Posts */}
        <section className="pb-16">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold mb-12 text-slate-900 tracking-tight">All Articles</h2>
            
            {/* Category Filter */}
            <div className="flex flex-wrap gap-3 mb-12">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedCategory(category)}
                  className={`rounded-full transition-all duration-200 ${
                    selectedCategory === category
                      ? "bg-blue-600 text-white hover:bg-blue-700"
                      : "border-slate-300 text-slate-600 hover:bg-slate-50 hover:border-slate-400"
                  }`}
                >
                  {category.length > 20 ? `${category.substring(0, 20)}...` : category}
                </Button>
              ))}
            </div>

            {/* Posts Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post) => (
                <article key={post.slug} className="bg-white rounded-xl border border-slate-200 overflow-hidden hover:shadow-lg transition-all duration-300 hover:border-slate-300">
                  <div className="p-6">
                    <div className="flex items-center gap-4 mb-4">
                      <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium max-w-[150px] truncate">
                        {post.category.length > 15 ? `${post.category.substring(0, 15)}...` : post.category}
                      </span>
                      <div className="flex items-center text-slate-500 text-sm">
                        <Clock className="w-4 h-4 mr-1" />
                        {post.readTime}
                      </div>
                    </div>
                    <h3 className="text-xl font-bold mb-3 text-slate-900 line-clamp-2 leading-tight">
                      {post.title}
                    </h3>
                    <p className="text-slate-600 mb-6 line-clamp-3 leading-relaxed">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center text-slate-500 text-sm">
                        <Calendar className="w-4 h-4 mr-1" />
                        {new Date(post.publishDate).toLocaleDateString('en-GB', { 
                          day: 'numeric', 
                          month: 'long', 
                          year: 'numeric' 
                        })}
                      </div>
                      <Link href={`/blog/${post.slug}`}>
                        <Button variant="ghost" size="sm" className="text-blue-600 hover:text-blue-700 hover:bg-blue-50">
                          Read More <ArrowRight className="w-4 h-4 ml-1" />
                        </Button>
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-slate-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl font-bold text-slate-900 mb-6 tracking-tight">
              Ready to Transform Your Business Communication?
            </h2>
            <p className="text-xl text-slate-600 mb-10 max-w-2xl mx-auto leading-relaxed">
              Join thousands of businesses using Vocalenda to streamline their operations and boost productivity.
            </p>
            <Link href="/sign-up">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg font-medium">
                Sign Up
              </Button>
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}