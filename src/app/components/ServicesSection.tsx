const ServicesSection = () => {
  const services = [
    {
      icon: (
        <svg
          className="h-8 w-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
          />
        </svg>
      ),
      title: "Web Development",
      description:
        "Custom web applications built with modern technologies for optimal performance and user experience.",
      features: [
        "React & Next.js",
        "Mobile Responsive",
        "SEO Optimized",
        "Fast Loading",
      ],
    },
    {
      icon: (
        <svg
          className="h-8 w-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
          />
        </svg>
      ),
      title: "Mobile Solutions",
      description:
        "Native and cross-platform mobile applications that deliver seamless user experiences across all devices.",
      features: [
        "iOS & Android",
        "React Native",
        "Native Performance",
        "App Store Ready",
      ],
    },
    {
      icon: (
        <svg
          className="h-8 w-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
          />
        </svg>
      ),
      title: "Data Analytics",
      description:
        "Transform your data into actionable insights with advanced analytics and business intelligence solutions.",
      features: [
        "Real-time Analytics",
        "Custom Dashboards",
        "Data Visualization",
        "Predictive Insights",
      ],
    },
  ];

  return (
    <section
      className="py-16 sm:py-20 lg:py-24 bg-white"
      aria-labelledby="services-heading"
    >
      <div className="mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-8 xl:px-12">
        <div className="text-center space-y-4 sm:space-y-6 mb-12 sm:mb-16 lg:mb-20">
          <h2
            id="services-heading"
            className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl"
          >
            Our <span className="text-blue-600">Services</span>
          </h2>
          <p className="text-lg text-gray-600 sm:text-xl lg:text-2xl max-w-3xl mx-auto">
            We provide comprehensive digital solutions tailored to meet your
            unique business needs and drive sustainable growth.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 lg:gap-12">
          {services.map((service, index) => (
            <article
              key={index}
              className="group relative rounded-2xl bg-gradient-to-br from-white to-gray-50 p-6 sm:p-8 shadow-lg transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 border border-gray-100"
            >
              <div className="flex items-center space-x-4 mb-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-100 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300 sm:h-14 sm:w-14">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl group-hover:text-blue-600 transition-colors duration-300">
                  {service.title}
                </h3>
              </div>

              <p className="text-gray-600 mb-6 leading-relaxed sm:text-lg">
                {service.description}
              </p>

              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li
                    key={featureIndex}
                    className="flex items-center text-sm text-gray-500 sm:text-base"
                  >
                    <svg
                      className="h-4 w-4 text-green-500 mr-2"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export { ServicesSection };
