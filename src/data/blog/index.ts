// Blog Post Interface
export interface BlogPost {
  id: number;
  title: string;
  date: string;
  category: string;
  image: string;
  overlayText?: string;
}

// Extended Blog Post Interface for Featured Blogs
export interface FeaturedBlogPost {
  id: number;
  title: string;
  author: string;
  date: string;
  image: string;
}

// Featured Post Data
export const featuredPost: BlogPost = {
  id: 1,
  title: "Are Blogs Still Relevant In The Age Of Artificial Intelligence?",
  date: "Jan 10, 2026",
  category: "Artificial Intelligence",
  image: "/assets/images/blogs/blogimg1.png",
  overlayText: "THE AI IMPACT",
};

// Sidebar Posts Data
export const sidebarPosts: BlogPost[] = [
  {
    id: 2,
    title: "Are Blogs Still Relevant In The Age Of Artificial Intelligence?",
    date: "Jan 10, 2026",
    category: "Artificial Intelligence",
    image: "/assets/images/blogs/blogimg1.png",
  },
  {
    id: 3,
    title: "Are Blogs Still Relevant In The Age Of Artificial Intelligence?",
    date: "Jan 10, 2026",
    category: "Artificial Intelligence",
    image: "/assets/images/blogs/blogimg1.png",
  },
  {
    id: 4,
    title: "Are Blogs Still Relevant In The Age Of Artificial Intelligence?",
    date: "Jan 10, 2026",
    category: "Artificial Intelligence",
    image: "/assets/images/blogs/blogimg1.png",
  },
];

// Featured Blogs Data
export const featuredBlogs: FeaturedBlogPost[] = [
  {
    id: 1,
    title: "AI Adoption in 2025: A Practical Framework for Enterprise-Scale Impact",
    author: "Alex Kinberty",
    date: "21 Aug, 2025",
    image: "/assets/images/blogs/bimg2.png",
  },
  {
    id: 2,
    title: "AI Adoption in 2025: A Practical Framework for Enterprise-Scale Impact",
    author: "Alex Kinberty",
    date: "21 Aug, 2025",
    image: "/assets/images/blogs/bimg3.png",
  },
  {
    id: 3,
    title: "AI Adoption in 2025: A Practical Framework for Enterprise-Scale Impact",
    author: "Alex Kinberty",
    date: "21 Aug, 2025",
    image: "/assets/images/blogs/bimg4.png",
  },
  {
    id: 4,
    title: "AI Adoption in 2025: A Practical Framework for Enterprise-Scale Impact",
    author: "Alex Kinberty",
    date: "21 Aug, 2025",
    image: "/assets/images/blogs/bimg2.png",
  },
  {
    id: 5,
    title: "AI Adoption in 2025: A Practical Framework for Enterprise-Scale Impact",
    author: "Alex Kinberty",
    date: "21 Aug, 2025",
    image: "/assets/images/blogs/bimg3.png",
  },
  {
    id: 6,
    title: "AI Adoption in 2025: A Practical Framework for Enterprise-Scale Impact",
    author: "Alex Kinberty",
    date: "21 Aug, 2025",
    image: "/assets/images/blogs/bimg4.png",
  },
];
