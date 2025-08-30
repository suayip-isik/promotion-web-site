import Link from "next/link";

type ImageType =
  | "react-nextjs"
  | "mobile-design"
  | "data-analytics"
  | "api-security"
  | "ai-development"
  | "performance";

type ICategoryType =
  | "Web Development"
  | "Mobile Apps"
  | "Data Analytics"
  | "Tech Trends"
  | "Best Practices";

type IBlogGridType = {
  title: string;
  excerpt: string;
  author: {
    name: string;
    avatar: string;
  };
  publishDate: string;
  readTime: string;
  category: ICategoryType;
  slug: string;
  image: ImageType;
};

// Blog Hero Section
const BlogHero = () => {
  return (
    <section
      className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-purple-50 pt-16 sm:pt-20 lg:pt-24 pb-8 sm:pb-12 lg:pb-16"
      aria-labelledby="blog-hero-heading"
    >
      <div className="mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-8 xl:px-12">
        <div className="text-center space-y-4 sm:space-y-6">
          <h1
            id="blog-hero-heading"
            className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl"
          >
            Our
            <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Latest Insights
            </span>
          </h1>

          <p className="text-lg text-gray-600 sm:text-xl lg:text-2xl max-w-3xl mx-auto leading-relaxed">
            Stay updated with the latest trends in technology, development
            practices, and digital transformation strategies from our expert
            team.
          </p>
        </div>

        {/* Blog Categories */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mt-8 sm:mt-12">
          {[
            { name: "All Posts", href: "/blog", active: true },
            { name: "Web Development", href: "/blog/web-development" },
            { name: "Mobile Apps", href: "/blog/mobile-apps" },
            { name: "Data Analytics", href: "/blog/data-analytics" },
            { name: "Tech Trends", href: "/blog/tech-trends" },
            { name: "Best Practices", href: "/blog/best-practices" },
          ].map((category) => (
            <Link
              key={category.name}
              href={category.href}
              className={`
                px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 
                focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2
                sm:px-6 sm:py-3 sm:text-base
                ${
                  category.active
                    ? "bg-blue-600 text-white shadow-lg hover:bg-blue-700"
                    : "bg-white text-gray-700 border border-gray-200 hover:bg-gray-50 hover:border-gray-300"
                }
              `}
              aria-label={`View ${category.name.toLowerCase()}`}
            >
              {category.name}
            </Link>
          ))}
        </div>
      </div>

      {/* Background Decorations */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-40 -right-32 h-80 w-80 rounded-full bg-purple-300/20 blur-3xl"></div>
        <div className="absolute -bottom-40 -left-32 h-80 w-80 rounded-full bg-blue-300/20 blur-3xl"></div>
      </div>
    </section>
  );
};

// Featured Blog Post Component
const FeaturedPost = () => {
  const featuredPost = {
    title: "The Future of Web Development: Trends to Watch in 2025",
    excerpt:
      "Discover the cutting-edge technologies and methodologies that will shape web development in 2025. From AI-powered development tools to advanced performance optimization techniques.",
    author: {
      name: "Sarah Johnson",
      role: "Lead Developer",
      avatar: "SJ",
    },
    publishDate: "2025-01-15",
    readTime: "8 min read",
    category: "Tech Trends",
    slug: "future-of-web-development-2025",
    tags: ["React", "Next.js", "AI", "Performance"],
  };

  return (
    <section
      className="py-12 sm:py-16 lg:py-20 bg-white"
      aria-labelledby="featured-post-heading"
    >
      <div className="mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-8 xl:px-12">
        <div className="text-center mb-8 sm:mb-12">
          <h2
            id="featured-post-heading"
            className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl lg:text-4xl"
          >
            Featured <span className="text-blue-600">Article</span>
          </h2>
        </div>

        <article className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-white to-gray-50 shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-300">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
            {/* Content Side */}
            <div className="p-6 sm:p-8 lg:p-12 flex flex-col justify-center space-y-6">
              <div className="space-y-4">
                <div className="flex items-center space-x-2">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                    {featuredPost.category}
                  </span>
                  <span className="text-sm text-gray-500">Featured</span>
                </div>

                <h3 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl lg:text-4xl group-hover:text-blue-600 transition-colors duration-300">
                  <Link
                    href={`/blog/${featuredPost.slug}`}
                    className="focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded"
                  >
                    {featuredPost.title}
                  </Link>
                </h3>

                <p className="text-lg text-gray-600 leading-relaxed">
                  {featuredPost.excerpt}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {featuredPost.tags.map((tag) => (
                    <span
                      key={tag}
                      className="inline-flex items-center px-2 py-1 rounded text-xs font-medium bg-gray-100 text-gray-700"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Author and Meta */}
              <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                <div className="flex items-center space-x-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-purple-600 text-white font-semibold">
                    {featuredPost.author.avatar}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-gray-900">
                      {featuredPost.author.name}
                    </p>
                    <p className="text-xs text-gray-500">
                      {featuredPost.author.role}
                    </p>
                  </div>
                </div>

                <div className="text-right">
                  <time
                    dateTime={featuredPost.publishDate}
                    className="text-sm text-gray-500 block"
                  >
                    Jan 15, 2025
                  </time>
                  <span className="text-xs text-gray-400">
                    {featuredPost.readTime}
                  </span>
                </div>
              </div>

              {/* CTA */}
              <Link
                href={`/blog/${featuredPost.slug}`}
                className="inline-flex items-center justify-center rounded-lg bg-blue-600 px-6 py-3 text-base font-semibold text-white shadow-lg transition-all duration-200 hover:bg-blue-700 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 group w-full sm:w-auto"
                aria-label="Read the full featured article"
              >
                Read Full Article
                <svg
                  className="ml-2 h-5 w-5 transition-transform duration-200 group-hover:translate-x-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                  />
                </svg>
              </Link>
            </div>

            {/* Visual Side */}
            <div className="relative bg-gradient-to-br from-blue-500 to-purple-600 p-6 sm:p-8 lg:p-12 flex items-center justify-center min-h-64 lg:min-h-full">
              <div className="relative">
                {/* Code Blocks Visual */}
                <div className="space-y-4 transform rotate-3 group-hover:rotate-6 transition-transform duration-300">
                  <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4 space-y-2">
                    <div className="h-2 bg-white/40 rounded w-3/4"></div>
                    <div className="h-2 bg-white/30 rounded w-1/2"></div>
                    <div className="h-2 bg-white/40 rounded w-2/3"></div>
                  </div>
                  <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4 space-y-2 ml-4">
                    <div className="h-2 bg-white/40 rounded w-full"></div>
                    <div className="h-2 bg-white/30 rounded w-3/4"></div>
                  </div>
                </div>

                {/* Floating Elements */}
                <div className="absolute -top-4 -right-4 h-8 w-8 bg-yellow-400 rounded-full animate-bounce opacity-80"></div>
                <div className="absolute -bottom-4 -left-4 h-6 w-6 bg-green-400 rounded-full animate-bounce animation-delay-500 opacity-80"></div>
                <div className="absolute top-8 -left-8 h-4 w-4 bg-red-400 rounded-full animate-bounce animation-delay-1000 opacity-80"></div>
              </div>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
};

// Blog Posts Grid
const BlogGrid = () => {
  const blogPosts: IBlogGridType[] = [
    {
      title: "Building Scalable React Applications with Next.js 15",
      excerpt:
        "Learn the best practices for creating maintainable and performant React applications using the latest Next.js features.",
      author: { name: "Michael Chen", avatar: "MC" },
      publishDate: "2025-01-12",
      readTime: "6 min read",
      category: "Web Development",
      slug: "scalable-react-nextjs-15",
      image: "react-nextjs",
    },
    {
      title: "Mobile-First Design: Creating Responsive User Experiences",
      excerpt:
        "Discover how mobile-first design principles can improve user engagement and conversion rates across all devices.",
      author: { name: "Emma Wilson", avatar: "EW" },
      publishDate: "2025-01-10",
      readTime: "5 min read",
      category: "Mobile Apps",
      slug: "mobile-first-design-ux",
      image: "mobile-design",
    },
    {
      title: "Data Analytics in 2025: Tools and Techniques",
      excerpt:
        "Explore the latest data analytics tools and methodologies that are transforming business intelligence.",
      author: { name: "David Rodriguez", avatar: "DR" },
      publishDate: "2025-01-08",
      readTime: "7 min read",
      category: "Data Analytics",
      slug: "data-analytics-2025-tools",
      image: "data-analytics",
    },
    {
      title: "API Security Best Practices for Modern Applications",
      excerpt:
        "Essential security measures every developer should implement when building and consuming APIs.",
      author: { name: "Lisa Thompson", avatar: "LT" },
      publishDate: "2025-01-05",
      readTime: "8 min read",
      category: "Best Practices",
      slug: "api-security-best-practices",
      image: "api-security",
    },
    {
      title: "The Rise of AI in Software Development",
      excerpt:
        "How artificial intelligence is revolutionizing the way we write, test, and deploy software applications.",
      author: { name: "James Park", avatar: "JP" },
      publishDate: "2025-01-03",
      readTime: "9 min read",
      category: "Tech Trends",
      slug: "ai-in-software-development",
      image: "ai-development",
    },
    {
      title: "Performance Optimization Techniques for Web Applications",
      excerpt:
        "Advanced techniques to improve loading times, user experience, and search engine rankings.",
      author: { name: "Rachel Green", avatar: "RG" },
      publishDate: "2025-01-01",
      readTime: "6 min read",
      category: "Web Development",
      slug: "web-performance-optimization",
      image: "performance",
    },
  ];

  const categoryColors = {
    "Web Development": "bg-blue-100 text-blue-800",
    "Mobile Apps": "bg-green-100 text-green-800",
    "Data Analytics": "bg-purple-100 text-purple-800",
    "Tech Trends": "bg-orange-100 text-orange-800",
    "Best Practices": "bg-gray-100 text-gray-800",
  };

  // Visual patterns for different post types
  const getVisualPattern = (imageType: ImageType) => {
    const patterns = {
      "react-nextjs": (
        <div className="space-y-3">
          <div className="flex space-x-2">
            <div className="h-8 w-8 bg-blue-400/30 rounded"></div>
            <div className="h-8 w-8 bg-cyan-400/30 rounded"></div>
          </div>
          <div className="space-y-2">
            <div className="h-2 bg-white/40 rounded w-3/4"></div>
            <div className="h-2 bg-white/30 rounded w-1/2"></div>
          </div>
        </div>
      ),
      "mobile-design": (
        <div className="space-y-2">
          <div className="h-16 w-10 bg-white/30 rounded-lg mx-auto"></div>
          <div className="flex justify-center space-x-1">
            <div className="h-2 w-2 bg-white/40 rounded-full"></div>
            <div className="h-2 w-2 bg-white/40 rounded-full"></div>
            <div className="h-2 w-2 bg-white/40 rounded-full"></div>
          </div>
        </div>
      ),
      "data-analytics": (
        <div className="space-y-2">
          <div className="flex items-end space-x-1 justify-center">
            <div className="h-4 w-2 bg-white/40 rounded"></div>
            <div className="h-6 w-2 bg-white/50 rounded"></div>
            <div className="h-8 w-2 bg-white/40 rounded"></div>
            <div className="h-5 w-2 bg-white/30 rounded"></div>
          </div>
        </div>
      ),
      "api-security": (
        <div className="space-y-3">
          <div className="h-6 w-6 border-2 border-white/40 rounded-full mx-auto"></div>
          <div className="space-y-1">
            <div className="h-1 bg-white/40 rounded w-full"></div>
            <div className="h-1 bg-white/30 rounded w-2/3"></div>
            <div className="h-1 bg-white/40 rounded w-3/4"></div>
          </div>
        </div>
      ),
      "ai-development": (
        <div className="space-y-2">
          <div className="h-8 w-8 bg-white/30 rounded-full mx-auto flex items-center justify-center">
            <div className="h-4 w-4 bg-white/50 rounded-full"></div>
          </div>
          <div className="space-y-1">
            <div className="h-1 bg-white/40 rounded w-full"></div>
            <div className="h-1 bg-white/30 rounded w-1/2"></div>
          </div>
        </div>
      ),
      performance: (
        <div className="space-y-2">
          <div className="flex justify-center">
            <svg
              className="h-8 w-8 text-white/40"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        </div>
      ),
    };
    return patterns[imageType] || patterns["react-nextjs"];
  };

  return (
    <section
      className="py-12 sm:py-16 lg:py-20 bg-gray-50"
      aria-labelledby="blog-grid-heading"
    >
      <div className="mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-8 xl:px-12">
        <div className="text-center mb-8 sm:mb-12">
          <h2
            id="blog-grid-heading"
            className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl lg:text-4xl"
          >
            Latest <span className="text-blue-600">Articles</span>
          </h2>
          <p className="text-lg text-gray-600 mt-4 max-w-2xl mx-auto">
            Explore our comprehensive collection of tutorials, insights, and
            best practices.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post) => (
            <article
              key={post.slug}
              className="group relative overflow-hidden rounded-2xl bg-white shadow-lg border border-gray-100 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
            >
              {/* Visual Header */}
              <div className="relative h-48 bg-gradient-to-br from-blue-500 via-purple-500 to-blue-600 p-6 flex items-center justify-center">
                {getVisualPattern(post.image)}

                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <span
                    className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${
                      categoryColors[post.category] ||
                      categoryColors["Web Development"]
                    }`}
                  >
                    {post.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 space-y-4">
                <h3 className="text-xl font-bold tracking-tight text-gray-900 group-hover:text-blue-600 transition-colors duration-300 leading-tight">
                  <Link
                    href={`/blog/${post.slug}`}
                    className="focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded"
                  >
                    {post.title}
                  </Link>
                </h3>

                <p className="text-gray-600 leading-relaxed line-clamp-3">
                  {post.excerpt}
                </p>

                {/* Author and Meta */}
                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                  <div className="flex items-center space-x-2">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-purple-600 text-white text-xs font-semibold">
                      {post.author.avatar}
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-900">
                        {post.author.name}
                      </p>
                    </div>
                  </div>

                  <div className="text-right">
                    <time
                      dateTime={post.publishDate}
                      className="text-xs text-gray-500 block"
                    >
                      {new Date(post.publishDate).toLocaleDateString("en-US", {
                        month: "short",
                        day: "numeric",
                      })}
                    </time>
                    <span className="text-xs text-gray-400">
                      {post.readTime}
                    </span>
                  </div>
                </div>

                {/* Read More Link */}
                <Link
                  href={`/blog/${post.slug}`}
                  className="inline-flex items-center text-sm font-semibold text-blue-600 hover:text-blue-700 group/link focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded"
                  aria-label={`Read more about ${post.title}`}
                >
                  Read More
                  <svg
                    className="ml-1 h-4 w-4 transition-transform duration-200 group-hover/link:translate-x-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 7l5 5m0 0l-5 5m5-5H6"
                    />
                  </svg>
                </Link>
              </div>
            </article>
          ))}
        </div>

        {/* Load More Button */}
        <div className="text-center mt-12 sm:mt-16">
          <button
            type="button"
            className="inline-flex items-center rounded-lg border-2 border-gray-300 bg-white px-6 py-3 text-base font-semibold text-gray-700 shadow-sm transition-all duration-200 hover:border-gray-400 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 sm:px-8 sm:py-4 sm:text-lg"
            aria-label="Load more blog posts"
          >
            Load More Articles
            <svg
              className="ml-2 h-5 w-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

// Newsletter Subscription Section
const NewsletterSection = () => {
  return (
    <section
      className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-blue-600 to-purple-700"
      aria-labelledby="newsletter-heading"
    >
      <div className="mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-8 xl:px-12">
        <div className="text-center space-y-6 sm:space-y-8">
          <div className="space-y-4">
            <h2
              id="newsletter-heading"
              className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl"
            >
              Stay Updated
            </h2>
            <p className="text-lg text-blue-100 sm:text-xl lg:text-2xl max-w-3xl mx-auto leading-relaxed">
              Subscribe to our newsletter and get the latest insights,
              tutorials, and industry trends delivered straight to your inbox.
            </p>
          </div>

          <form
            className="mx-auto max-w-md space-y-4 sm:max-w-lg sm:space-y-0 sm:flex sm:space-x-4"
            action="/api/newsletter"
            method="POST"
            noValidate
          >
            <div className="flex-1">
              <label htmlFor="newsletter-email" className="sr-only">
                Email address
              </label>
              <input
                type="email"
                id="newsletter-email"
                name="email"
                required
                aria-required="true"
                className="block w-full rounded-lg border-0 bg-white/20 backdrop-blur-sm px-4 py-3 text-white placeholder:text-blue-200 focus:bg-white/30 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-blue-600 sm:text-base"
                placeholder="Enter your email address"
              />
            </div>
            <button
              type="submit"
              className="w-full inline-flex items-center justify-center rounded-lg bg-white px-6 py-3 text-base font-semibold text-blue-600 shadow-lg transition-all duration-200 hover:bg-blue-50 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-blue-600 sm:w-auto sm:px-8"
              aria-label="Subscribe to newsletter"
            >
              Subscribe
              <svg
                className="ml-2 h-5 w-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
            </button>
          </form>

          <p className="text-sm text-blue-200">
            No spam, unsubscribe at any time. We respect your privacy.
          </p>
        </div>
      </div>
    </section>
  );
};

// Main Blog Page Component
const BlogPage = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* NavBar will be imported and used here */}
      <main role="main">
        <BlogHero />
        <FeaturedPost />
        <BlogGrid />
        <NewsletterSection />
      </main>
      {/* Footer will be imported and used here */}
    </div>
  );
};

export default BlogPage;
