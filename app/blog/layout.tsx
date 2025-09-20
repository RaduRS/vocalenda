import { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI Receptionist Blog - Expert Guides & Tips | Vocalenda",
  description: "Expert guides on AI receptionists, 24/7 call answering services, and voice appointment scheduling. Learn how to automate your business communications effectively.",
  keywords: "AI receptionist blog, virtual receptionist guides, call answering service tips, voice appointment scheduling, business automation",
  openGraph: {
    title: "AI Receptionist Blog - Expert Guides & Tips | Vocalenda",
    description: "Expert guides on AI receptionists, 24/7 call answering services, and voice appointment scheduling. Learn how to automate your business communications effectively.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Receptionist Blog - Expert Guides & Tips | Vocalenda",
    description: "Expert guides on AI receptionists, 24/7 call answering services, and voice appointment scheduling. Learn how to automate your business communications effectively.",
  },
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}