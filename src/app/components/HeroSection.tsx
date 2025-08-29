import Link from "next/link";

const HeroSection = () => {
  return (
    <section
      className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-purple-50 pt-16 sm:pt-20 lg:pt-24"
      aria-labelledby="hero-heading"
    >
      <div className="mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-8 xl:px-12">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16 items-center min-h-[80vh] sm:min-h-[85vh] lg:min-h-[90vh]">
          {/* Content Column */}
          <div className="flex flex-col justify-center space-y-6 sm:space-y-8 lg:space-y-10">
            <div className="space-y-4 sm:space-y-6">
              <h1
                id="hero-heading"
                className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl xl:text-7xl"
              >
                Transform Your
                <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Digital Future
                </span>
              </h1>

              <p className="text-lg text-gray-600 sm:text-xl lg:text-2xl max-w-2xl leading-relaxed">
                Empower your business with cutting-edge solutions that drive
                growth, enhance efficiency, and deliver exceptional results in
                today&apos;s digital landscape.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-lg bg-blue-600 px-6 py-3 text-base font-semibold text-white shadow-lg transition-all duration-200 hover:bg-blue-700 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 sm:px-8 sm:py-4 sm:text-lg"
                aria-label="Start your project with us"
              >
                Get Started Today
                <svg
                  className="ml-2 h-5 w-5 sm:h-6 sm:w-6"
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

              <Link
                href="/services"
                className="inline-flex items-center justify-center rounded-lg border-2 border-gray-300 bg-white px-6 py-3 text-base font-semibold text-gray-700 transition-all duration-200 hover:border-gray-400 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 sm:px-8 sm:py-4 sm:text-lg"
                aria-label="Learn more about our services"
              >
                Learn More
                <svg
                  className="ml-2 h-5 w-5 sm:h-6 sm:w-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 pt-8 sm:gap-6 lg:gap-8">
              {[
                { number: "500+", label: "Projects Completed" },
                { number: "98%", label: "Client Satisfaction" },
                { number: "24/7", label: "Support Available" },
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-2xl font-bold text-blue-600 sm:text-3xl lg:text-4xl">
                    {stat.number}
                  </div>
                  <div className="text-sm text-gray-600 sm:text-base">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Visual Column */}
          <div className="relative flex items-center justify-center lg:justify-end">
            <div className="relative h-64 w-64 sm:h-80 sm:w-80 lg:h-96 lg:w-96 xl:h-[28rem] xl:w-[28rem]">
              {/* Animated Background Elements */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-400/20 to-purple-400/20 animate-pulse"></div>
              <div className="absolute inset-4 rounded-full bg-gradient-to-r from-blue-500/30 to-purple-500/30 animate-ping animation-delay-1000"></div>

              {/* Main Visual Element */}
              <div className="relative flex h-full w-full items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-purple-600 shadow-2xl">
                <svg
                  className="h-32 w-32 text-white sm:h-40 sm:w-40 lg:h-48 lg:w-48"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                  />
                </svg>
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-4 -left-4 h-8 w-8 rounded-full bg-yellow-400 animate-bounce sm:h-12 sm:w-12"></div>
              <div className="absolute -bottom-4 -right-4 h-6 w-6 rounded-full bg-green-400 animate-bounce animation-delay-500 sm:h-10 sm:w-10"></div>
              <div className="absolute top-8 -right-8 h-4 w-4 rounded-full bg-red-400 animate-bounce animation-delay-1000 sm:h-8 sm:w-8"></div>
            </div>
          </div>
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

export { HeroSection };
