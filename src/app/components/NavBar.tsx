import Link from "next/link";

const NavBar = () => {
  // Navigation items configuration
  const navigationItems = [
    {
      name: "Services",
      href: "/services",
      ariaLabel: "View our services",
    },
    {
      name: "Solutions",
      href: "/solutions",
      ariaLabel: "Explore our solutions",
    },
    {
      name: "Contact Us",
      href: "/contact-us",
      ariaLabel: "Contact us for more information",
    },
  ];

  return (
    <header
      className="sticky top-0 z-50 w-full border-b border-gray-200/20 bg-white/80 backdrop-blur-xl supports-[backdrop-filter]:bg-white/60"
      role="banner"
    >
      <nav
        className="mx-auto flex h-14 w-full max-w-screen-2xl items-center justify-between px-4 sm:h-16 sm:px-6 lg:h-18 lg:px-8 xl:px-12"
        role="navigation"
        aria-label="Main navigation"
      >
        {/* Logo Section - Sol tarafa yaslı */}
        <div className="flex flex-shrink-0 items-center">
          <Link
            href="/"
            className="group flex items-center space-x-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded-lg p-1"
            aria-label="Go to homepage"
          >
            {/* SVG Logo Template */}
            <div className="relative flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 shadow-sm transition-all duration-200 group-hover:shadow-md group-hover:scale-105 sm:h-10 sm:w-10">
              <svg
                className="h-5 w-5 text-white sm:h-6 sm:w-6"
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

            {/* Brand Name */}
            <div className="flex flex-col">
              <span className="text-base font-bold leading-tight text-gray-900 transition-colors duration-200 group-hover:text-blue-600 sm:text-lg lg:text-xl">
                YourBrand
              </span>
              <span className="hidden text-xs font-medium text-gray-500 sm:block lg:text-sm">
                Solutions
              </span>
            </div>
          </Link>
        </div>

        {/* Desktop Navigation - Sağ tarafa yaslı */}
        <div className="hidden items-center space-x-1 md:flex lg:space-x-2">
          {navigationItems.map((item, index) => (
            <Link
              key={item.name}
              href={item.href}
              className={`
                relative px-3 py-2 text-sm font-medium transition-all duration-200 
                rounded-lg hover:bg-gray-50 focus:outline-none focus:ring-2 
                focus:ring-blue-500 focus:ring-offset-2
                lg:px-4 lg:text-base
                ${
                  index === navigationItems.length - 1
                    ? "bg-blue-600 text-white hover:bg-blue-700 hover:text-white shadow-sm"
                    : "text-gray-700 hover:text-gray-900"
                }
              `}
              aria-label={item.ariaLabel}
            >
              {item.name}
              {index === navigationItems.length - 1 && (
                <span className="absolute -top-1 -right-1 flex h-3 w-3 lg:h-4 lg:w-4">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 lg:h-4 lg:w-4 bg-blue-500"></span>
                </span>
              )}
            </Link>
          ))}
        </div>

        {/* Mobile Menu */}
        <div className="flex md:hidden">
          <details className="group relative">
            <summary className="flex cursor-pointer items-center justify-center rounded-lg p-2 text-gray-700 transition-all duration-200 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 list-none">
              <span className="sr-only">Open main menu</span>
              <svg
                // className="h-6 w-6 transition-transform duration-200 group-open:rotate-90"
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </summary>

            {/* Mobile Dropdown Menu */}
            <div className="absolute right-0 top-full mt-2 w-48 origin-top-right rounded-lg bg-white py-2 shadow-xl ring-1 ring-black ring-opacity-5 focus:outline-none sm:w-56">
              {navigationItems.map((item, index) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`
                    block px-4 py-3 text-sm font-medium transition-all duration-200
                    hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-inset
                    ${
                      index === navigationItems.length - 1
                        ? "text-blue-600 bg-blue-50 hover:bg-blue-100"
                        : "text-gray-700 hover:text-gray-900"
                    }
                  `}
                  aria-label={item.ariaLabel}
                >
                  <div className="flex items-center justify-between">
                    {item.name}
                    {index === navigationItems.length - 1 && (
                      <svg
                        className="h-4 w-4 text-blue-500"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                          clipRule="evenodd"
                        />
                      </svg>
                    )}
                  </div>
                </Link>
              ))}
            </div>
          </details>
        </div>
      </nav>
    </header>
  );
};

export { NavBar };
