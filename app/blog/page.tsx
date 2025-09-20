import { Footer } from "@/components/ui/footer";
import { getAllBlogPosts, getAllCategories } from "@/lib/content-loader";
import { BlogPageClient } from "./blog-page-client";

export default function BlogPage() {
  const blogPosts = getAllBlogPosts();
  const categories = getAllCategories();

  return (
    <>
      <BlogPageClient blogPosts={blogPosts} categories={categories} />
      <Footer />
    </>
  );
}