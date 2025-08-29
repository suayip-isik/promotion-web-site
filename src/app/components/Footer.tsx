import Link from "next/link";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerSections = [
    {
      title: "Services",
      links: [
        { name: "Web Development", href: "/services/web-development" },
        { name: "Mobile Apps", href: "/services/mobile-apps" },
        { name: "Data Analytics", href: "/services/data-analytics" },
        { name: "Cloud Solutions", href: "/services/cloud-solutions" },
      ],
    },
    {
      title: "Solutions",
      links: [
        { name: "Enterprise", href: "/solutions/enterprise" },
        { name: "Startups", href: "/solutions/startups" },
        { name: "E-commerce", href: "/solutions/e-commerce" },
        { name: "Healthcare", href: "/solutions/healthcare" },
      ],
    },
    {
      title: "Company",
      links: [
        { name: "About Us", href: "/about" },
        { name: "Careers", href: "/careers" },
        { name: "Blog", href: "/blog" },
        { name: "Contact", href: "/contact" },
      ],
    },
  ];

  return (
    <footer
      className="bg-gray-900 text-white"
      role="contentinfo"
      aria-label="Site footer"
    >
      <div className="mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-8 xl:px-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 gap-8 py-12 sm:py-16 md:grid-cols-2 lg:grid-cols-4 lg:gap-12">
          {/* Brand Section */}
          <div className="space-y-6">
            <Link
              href="/"
              className="group flex items-center space-x-2"
              aria-label="Go to homepage"
            >
              <div className="relative flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 shadow-sm transition-all duration-200 group-hover:shadow-md group-hover:scale-105">
                <svg
                  className="h-6 w-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
              <div className="flex flex-col">
                <span className="text-lg font-bold leading-tight text-white transition-colors duration-200 group-hover:text-blue-400">
                  YourBrand
                </span>
                <span className="text-sm font-medium text-gray-400">
                  Solutions
                </span>
              </div>
            </Link>

            <p className="text-gray-400 leading-relaxed">
              Empowering businesses with innovative digital solutions that drive
              growth and success in the modern world.
            </p>

            {/* Social Media */}
            <div className="flex space-x-4">
              {[
                {
                  name: "Twitter",
                  icon: "M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z",
                },
                {
                  name: "LinkedIn",
                  icon: "M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z",
                },
                {
                  name: "GitHub",
                  icon: "M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 00-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0020 4.77 5.07 5.07 0 0019.91 1S18.73.65 16 2.48a13.38 13.38 0 00-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 005 4.77a5.44 5.44 0 00-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 009 18.13V22",
                },
              ].map((social) => (
                <a
                  key={social.name}
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors duration-200"
                  aria-label={`Follow us on ${social.name}`}
                >
                  <svg
                    className="h-6 w-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d={social.icon}
                    />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {/* Footer Links */}
          {footerSections.map((section) => (
            <div key={section.title} className="space-y-4">
              <h3 className="text-lg font-semibold text-white">
                {section.title}
              </h3>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-gray-400 hover:text-white transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-900 rounded"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-800 py-6 sm:py-8">
          <div className="flex flex-col items-center justify-between space-y-4 sm:flex-row sm:space-y-0">
            <p className="text-center text-sm text-gray-400 sm:text-left">
              © {currentYear} YourBrand Solutions. All rights reserved.
            </p>

            <div className="flex flex-wrap items-center space-x-4 text-sm text-gray-400">
              <Link
                href="/privacy"
                className="hover:text-white transition-colors duration-200"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="hover:text-white transition-colors duration-200"
              >
                Terms of Service
              </Link>
              <Link
                href="/cookies"
                className="hover:text-white transition-colors duration-200"
              >
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export { Footer };
