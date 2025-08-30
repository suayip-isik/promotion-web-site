import { Footer } from "@/app/components";
import Link from "next/link";

// NavBar Component (Aynı tasarım)

// Contact Hero Section
const ContactHero = () => {
  return (
    <section
      className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-purple-50 pt-16 sm:pt-20 lg:pt-24 pb-8 sm:pb-12 lg:pb-16"
      aria-labelledby="contact-hero-heading"
    >
      <div className="mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-8 xl:px-12">
        <div className="text-center space-y-4 sm:space-y-6">
          <h1
            id="contact-hero-heading"
            className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl"
          >
            Get In
            <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Touch With Us
            </span>
          </h1>

          <p className="text-lg text-gray-600 sm:text-xl lg:text-2xl max-w-3xl mx-auto leading-relaxed">
            Ready to transform your business with innovative digital solutions?
            We&apos;re here to help you achieve your goals and bring your vision
            to life.
          </p>
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

// Contact Form and Info Section
const ContactSection = () => {
  const contactInfo = [
    {
      icon: (
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
            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
          />
        </svg>
      ),
      title: "Our Address",
      content: (
        <div className="space-y-1">
          <p className="text-gray-600">YourBrand Solutions</p>
          <p className="text-gray-600">Atatürk Caddesi No: 123</p>
          <p className="text-gray-600">Nilüfer / Bursa</p>
          <p className="text-gray-600">16120 Türkiye</p>
        </div>
      ),
    },
    {
      icon: (
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
            d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
          />
        </svg>
      ),
      title: "Phone Number",
      content: (
        <div className="space-y-2">
          <a
            href="tel:+902241234567"
            className="block text-gray-600 hover:text-blue-600 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded"
          >
            +90 (224) 123 45 67
          </a>
          <a
            href="tel:+905551234567"
            className="block text-gray-600 hover:text-blue-600 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded"
          >
            +90 (555) 123 45 67
          </a>
          <p className="text-sm text-gray-500">Mon - Fri: 9:00 AM - 6:00 PM</p>
        </div>
      ),
    },
    {
      icon: (
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
            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
          />
        </svg>
      ),
      title: "Email Address",
      content: (
        <div className="space-y-2">
          <a
            href="mailto:info@yourbrand.com"
            className="block text-gray-600 hover:text-blue-600 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded"
          >
            info@yourbrand.com
          </a>
          <a
            href="mailto:support@yourbrand.com"
            className="block text-gray-600 hover:text-blue-600 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded"
          >
            support@yourbrand.com
          </a>
          <p className="text-sm text-gray-500">We respond within 24 hours</p>
        </div>
      ),
    },
  ];

  return (
    <section
      className="py-16 sm:py-20 lg:py-24 bg-white"
      aria-labelledby="contact-section-heading"
    >
      <div className="mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-8 xl:px-12">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16 xl:gap-20">
          {/* Contact Form */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h2
                id="contact-section-heading"
                className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl"
              >
                Send Us a <span className="text-blue-600">Message</span>
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Fill out the form below and we&apos;ll get back to you as soon
                as possible. We&apos;re excited to learn about your project!
              </p>
            </div>

            <form
              className="space-y-6"
              action="/api/contact"
              method="POST"
              noValidate
            >
              {/* Name Fields */}
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="firstName"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    First Name{" "}
                    <span className="text-red-500" aria-label="required">
                      *
                    </span>
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    required
                    aria-required="true"
                    className="block w-full rounded-lg border-gray-300 bg-white px-4 py-3 text-gray-900 shadow-sm transition-all duration-200 placeholder:text-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 sm:text-sm"
                    placeholder="John"
                  />
                </div>
                <div>
                  <label
                    htmlFor="lastName"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Last Name{" "}
                    <span className="text-red-500" aria-label="required">
                      *
                    </span>
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    required
                    aria-required="true"
                    className="block w-full rounded-lg border-gray-300 bg-white px-4 py-3 text-gray-900 shadow-sm transition-all duration-200 placeholder:text-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 sm:text-sm"
                    placeholder="Doe"
                  />
                </div>
              </div>

              {/* Email and Phone */}
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Email Address{" "}
                    <span className="text-red-500" aria-label="required">
                      *
                    </span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    aria-required="true"
                    aria-describedby="email-help"
                    className="block w-full rounded-lg border-gray-300 bg-white px-4 py-3 text-gray-900 shadow-sm transition-all duration-200 placeholder:text-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 sm:text-sm"
                    placeholder="john.doe@example.com"
                  />
                  <p id="email-help" className="mt-1 text-xs text-gray-500">
                    We&apos;ll use this to respond to your inquiry
                  </p>
                </div>
                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    className="block w-full rounded-lg border-gray-300 bg-white px-4 py-3 text-gray-900 shadow-sm transition-all duration-200 placeholder:text-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 sm:text-sm"
                    placeholder="+90 (555) 123 45 67"
                  />
                </div>
              </div>

              {/* Subject */}
              <div>
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Subject{" "}
                  <span className="text-red-500" aria-label="required">
                    *
                  </span>
                </label>
                <select
                  id="subject"
                  name="subject"
                  required
                  aria-required="true"
                  className="block w-full rounded-lg border-gray-300 bg-white px-4 py-3 text-gray-900 shadow-sm transition-all duration-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 sm:text-sm"
                >
                  <option value="">Select a topic</option>
                  <option value="web-development">Web Development</option>
                  <option value="mobile-solutions">Mobile Solutions</option>
                  <option value="data-analytics">Data Analytics</option>
                  <option value="consultation">General Consultation</option>
                  <option value="support">Technical Support</option>
                  <option value="other">Other</option>
                </select>
              </div>

              {/* Message */}
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Message{" "}
                  <span className="text-red-500" aria-label="required">
                    *
                  </span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  required
                  aria-required="true"
                  aria-describedby="message-help"
                  className="block w-full rounded-lg border-gray-300 bg-white px-4 py-3 text-gray-900 shadow-sm transition-all duration-200 placeholder:text-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 sm:text-sm resize-vertical"
                  placeholder="Tell us about your project, goals, and how we can help you..."
                />
                <p id="message-help" className="mt-1 text-xs text-gray-500">
                  Minimum 10 characters. Be specific about your needs.
                </p>
              </div>

              {/* Privacy Agreement */}
              <div className="flex items-start space-x-3">
                <input
                  type="checkbox"
                  id="privacy"
                  name="privacy"
                  required
                  aria-required="true"
                  aria-describedby="privacy-description"
                  className="mt-1 h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                />
                <label
                  htmlFor="privacy"
                  className="text-sm text-gray-600 leading-relaxed"
                  id="privacy-description"
                >
                  I agree to the processing of my personal data in accordance
                  with the{" "}
                  <Link
                    href="/privacy"
                    className="text-blue-600 hover:text-blue-700 underline focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded"
                  >
                    Privacy Policy
                  </Link>{" "}
                  and{" "}
                  <Link
                    href="/terms"
                    className="text-blue-600 hover:text-blue-700 underline focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded"
                  >
                    Terms of Service
                  </Link>
                  .{" "}
                  <span className="text-red-500" aria-label="required">
                    *
                  </span>
                </label>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full inline-flex items-center justify-center rounded-lg bg-blue-600 px-6 py-3 text-base font-semibold text-white shadow-lg transition-all duration-200 hover:bg-blue-700 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 sm:text-lg group"
                aria-describedby="submit-help"
              >
                Send Message
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
                    d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                  />
                </svg>
              </button>
              <p id="submit-help" className="text-xs text-gray-500 text-center">
                We typically respond within 24 hours during business days
              </p>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8 lg:pt-12">
            <div className="space-y-4">
              <h2 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
                Contact <span className="text-blue-600">Information</span>
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Reach out to us through any of these channels. We&apos;re always
                ready to help you with your digital transformation journey.
              </p>
            </div>

            <div className="space-y-8">
              {contactInfo.map((info, index) => (
                <div
                  key={index}
                  className="flex items-start space-x-4 p-6 rounded-xl bg-gradient-to-br from-gray-50 to-white border border-gray-100 shadow-sm hover:shadow-md transition-all duration-200"
                >
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-blue-100 text-blue-600">
                    {info.icon}
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-lg font-semibold text-gray-900">
                      {info.title}
                    </h3>
                    <div className="text-base">{info.content}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* Business Hours */}
            <div className="rounded-xl bg-gradient-to-br from-blue-50 to-purple-50 p-6 border border-blue-100">
              <div className="flex items-center space-x-3 mb-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-600 text-white">
                  <svg
                    className="h-5 w-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-900">
                  Business Hours
                </h3>
              </div>
              <div className="space-y-2 text-sm text-gray-600">
                <div className="flex justify-between">
                  <span>Monday - Friday:</span>
                  <span className="font-medium">9:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Saturday:</span>
                  <span className="font-medium">10:00 AM - 4:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Sunday:</span>
                  <span className="font-medium text-red-600">Closed</span>
                </div>
                <p className="text-xs text-gray-500 mt-3 pt-3 border-t border-gray-200">
                  * Emergency support available 24/7 for enterprise clients
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Footer Component (Aynı tasarım)
// const Footer = () => {
//   const currentYear = new Date().getFullYear();

//   const footerSections = [
//     {
//       title: "Services",
//       links: [
//         { name: "Web Development", href: "/services/web-development" },
//         { name: "Mobile Apps", href: "/services/mobile-apps" },
//         { name: "Data Analytics", href: "/services/data-analytics" },
//         { name: "Cloud Solutions", href: "/services/cloud-solutions" },
//       ],
//     },
//     {
//       title: "Solutions",
//       links: [
//         { name: "Enterprise", href: "/solutions/enterprise" },
//         { name: "Startups", href: "/solutions/startups" },
//         { name: "E-commerce", href: "/solutions/e-commerce" },
//         { name: "Healthcare", href: "/solutions/healthcare" },
//       ],
//     },
//     {
//       title: "Company",
//       links: [
//         { name: "About Us", href: "/about" },
//         { name: "Careers", href: "/careers" },
//         { name: "Blog", href: "/blog" },
//         { name: "Contact", href: "/contact" },
//       ],
//     },
//   ];

//   return (
//     <footer
//       className="bg-gray-900 text-white"
//       role="contentinfo"
//       aria-label="Site footer"
//     >
//       <div className="mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-8 xl:px-12">
//         <div className="grid grid-cols-1 gap-8 py-12 sm:py-16 md:grid-cols-2 lg:grid-cols-4 lg:gap-12">
//           <div className="space-y-6">
//             <Link
//               href="/"
//               className="group flex items-center space-x-2"
//               aria-label="Go to homepage"
//             >
//               <div className="relative flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 shadow-sm transition-all duration-200 group-hover:shadow-md group-hover:scale-105">
//                 <svg
//                   className="h-6 w-6 text-white"
//                   fill="none"
//                   stroke="currentColor"
//                   viewBox="0 0 24 24"
//                   aria-hidden="true"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth={2}
//                     d="M13 10V3L4 14h7v7l9-11h-7z"
//                   />
//                 </svg>
//               </div>
//               <div className="flex flex-col">
//                 <span className="text-lg font-bold leading-tight text-white transition-colors duration-200 group-hover:text-blue-400">
//                   YourBrand
//                 </span>
//                 <span className="text-sm font-medium text-gray-400">
//                   Solutions
//                 </span>
//               </div>
//             </Link>
//             <p className="text-sm text-gray-400 leading-relaxed">
//               Empowering your business with innovative digital solutions that
//               drive growth and efficiency.
//             </p>
//           </div>

//           {footerSections.map((section, index) => (
//             <div key={index} className="space-y-4">
//               <h3 className="text-sm font-semibold text-gray-300 tracking-wider uppercase">
//                 {section.title}
//               </h3>
//               <ul className="space-y-2">
//                 {section.links.map((link, linkIndex) => (
//                   <li key={linkIndex}>
//                     <Link
//                       href={link.href}
//                       className="text-gray-400 hover:text-white transition-colors duration-200 text-sm"
//                     >
//                       {link.name}
//                     </Link>
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           ))}
//         </div>

//         <div className="border-t border-gray-800 pt-8 pb-4 text-center text-sm text-gray-500">
//           &copy; {currentYear} YourBrand Solutions. All rights reserved.
//         </div>
//       </div>
//     </footer>
//   );
// };

const ContactUsPage = () => {
  return (
    <>
      <main>
        <ContactHero />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
};

export default ContactUsPage;
