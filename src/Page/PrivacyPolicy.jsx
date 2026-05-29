import React from "react";

function PrivacyPolicy() {
  return (
    <div className="h-full w-full p-0.5 pb-0 bg-white">
      <div className="flex text-[#e7e3e3] flex-col items-center justify-center h-full w-full rounded-t-2xl bg-[#111111]">
        <div className="py-25 md:py-50 flex flex-col items-center justify-center">
          <h1 className="text-white font-antonSC uppercase text-[40px] md:text-[64px] xl:text-[120px]">
            privacy policy
          </h1>
          <span className="text-white font-clashMeduim font-semibold tracking-wider text-[16px] md:text-[18px]">
            Last updated: May 28, 2026
          </span>
        </div>
        <div className="pb-50 font-clashMeduim font-semibold leading-none tracking-wider h-fit w-2/3 flex flex-col gap-8">
          <p className="text-[16px] md:text-[18px] leading-none">
            At <span className="font-clashSemi">Stratone Portfolio</span>, we
            value your privacy and are committed to protecting your personal
            information. This Privacy Policy explains how we collect, use, and
            safeguard your data when you browse our website or interact with our
            work.
          </p>

          {/* 1 */}
          <div className="flex flex-col gap-3">
            <h2 className="font-antonSC text-white text-xl md:text-2xl uppercase tracking-wide">
              1. Information We Collect
            </h2>
            <p className="text-[16px] md:text-[18px]">
              We may collect the following types of information:
            </p>
            <ul className="flex flex-col  list-disc list-inside text-[16px] md:text-[18px]">
              <li>
                <span className="font-antonSC text-white font-black">Personal Information</span> —
                such as your name, email address, or phone number, provided
                voluntarily through forms, inquiries, or newsletter
                subscriptions.
              </li>
              <li>
                <span className="font-antonSC text-white font-black">Project Details</span> — any
                information you share about your creative needs, collaboration
                requests, or portfolio-related inquiries.
              </li>
              <li>
                <span className="font-antonSC text-white font-black">Usage Data</span> — including
                IP address, browser type, pages visited, and time spent on the
                site (collected automatically via cookies or analytics tools).
              </li>
            </ul>
          </div>

          {/* 2 */}
          <div className="flex flex-col gap-3">
            <h2 className="font-antonSC text-xl text-white  md:text-2xl uppercase tracking-wide">
              2. How We Use Your Information
            </h2>
            <p className="text-[16px] md:text-[18px]">We use your data to:</p>
            <ul className="flex flex-col gap-px list-disc list-inside text-[16px] md:text-[18px]">
              <li>Respond to inquiries or project requests</li>
              <li>Showcase and improve our portfolio services</li>
              <li>Send updates, announcements, or offers</li>
              <li>Analyze site performance and visitor behavior</li>
              <li>Maintain legal compliance and prevent misuse</li>
            </ul>
          </div>

          {/* 3 */}
          <div className="flex flex-col gap-3">
            <h2 className="font-antonSC text-white text-xl md:text-2xl uppercase tracking-wide">
              3. Sharing Your Information
            </h2>
            <p className="text-[16px] md:text-[18px]">
              We do not sell or trade your personal information. We may share
              your data only with:
            </p>
            <ul className="flex flex-col gap-px list-disc list-inside text-[16px] md:text-[18px]">
              <li>
                <span className="font-antonSC">Trusted service providers</span> (e.g., hosting, analytics, email
                platforms) who help operate our site
              </li>
              <li><span className="font-antonSC">Authorities</span> if required by law or legal process</li>
            </ul>
            <p className="text-[16px] md:text-[18px]">
              All partners comply with applicable data protection laws.
            </p>
          </div>

          {/* 4 */}
          <div className="flex flex-col gap-3">
            <h2 className="font-antonSC text-white text-xl md:text-2xl uppercase tracking-wide">
              4. Cookies & Tracking
            </h2>
            <p className="text-[16px] md:text-[18px]">
              Our website uses cookies and similar technologies to improve user
              experience and gather visitor insights. You can manage or disable
              cookies in your browser settings.
            </p>
          </div>

          {/* 5 */}
          <div className="flex flex-col gap-3">
            <h2 className="font-antonSC text-white text-xl md:text-2xl uppercase tracking-wide">
              5. Data Security
            </h2>
            <p className="text-[16px] md:text-[18px]">
              We implement strong technical and organizational measures to
              protect your data from unauthorized access, alteration, or
              disclosure.
            </p>
          </div>

          {/* 6 */}
          <div className="flex flex-col gap-3">
            <h2 className="font-antonSC text-white text-xl md:text-2xl uppercase tracking-wide">
              6. Your Rights
            </h2>
            <p className="text-[16px] md:text-[18px] font-antonSC">You have the right to:</p>
            <ul className="flex flex-col gap-px list-disc list-inside text-[16px] md:text-[18px]">
              <li>Access or update your personal information</li>
              <li>Request deletion of your data</li>
              <li>Withdraw consent or unsubscribe from communications</li>
            </ul>
            <p className="text-[16px] md:text-[18px]">
              To exercise these rights, please contact us at{" "}
              <a
                href="mailto:StudioStratone@gmail.com"
                className="underline underline-offset-4"
              >
                StudioStratone@gmail.com
              </a>
            </p>
          </div>

          {/* 7 */}
          <div className="flex flex-col gap-3">
            <h2 className="font-antonSC text-white text-xl md:text-2xl uppercase tracking-wide">
              7. Third-Party Links
            </h2>
            <p className="text-[16px] md:text-[18px]">
              Our website may include links to external sites. We are not
              responsible for their content or privacy practices. Please review
              their policies before providing personal information.
            </p>
          </div>

          {/* 8 */}
          <div className="flex flex-col gap-3">
            <h2 className="font-antonSC text-white text-xl md:text-2xl uppercase tracking-wide">
              8. Updates to This Policy
            </h2>
            <p className="text-[16px] md:text-[18px]">
              We may update this Privacy Policy periodically. Any changes will
              be reflected on this page with the updated date. We encourage you
              to review it regularly.
            </p>
          </div>

          {/* 9 */}
          <div className="flex flex-col gap-3">
            <h2 className="font-antonSC text-white text-xl md:text-2xl uppercase tracking-wide">
              9. Contact Us
            </h2>
            <p className="text-[16px] md:text-[18px]">
              If you have any questions regarding this Privacy Policy, please{" "}
              <a href="/contact" className="underline underline-offset-4">
                reach out
              </a>
              .
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PrivacyPolicy;
