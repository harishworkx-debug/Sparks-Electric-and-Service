import SEO from '@/components/SEO';
import Breadcrumbs from '@/components/Breadcrumbs';
import { BUSINESS_NAME, PHONE_DISPLAY } from '@/data/services';

export default function TermsAndConditionsPage() {
  return (
    <>
      <SEO
        title="Terms and Conditions | Sparks Electric and Service"
        description={`Terms and Conditions for ${BUSINESS_NAME}. Read the terms governing use of our website.`}
        canonicalPath="/terms-and-conditions"
      />

      <div className="bg-lightgray border-b border-gray-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-3">
          <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Terms and Conditions' }]} />
        </div>
      </div>

      <section className="bg-white py-16 lg:py-24">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h1 className="font-display text-4xl font-bold text-navy-500 mb-8">Terms and Conditions</h1>

          <div className="space-y-6 text-navy-400 leading-relaxed">
            <p className="text-sm text-navy-200">Last updated: November 2026</p>

            <div>
              <h2 className="font-display text-xl font-bold text-navy-500 mb-3">Acceptance of Terms</h2>
              <p>
                By accessing and using the website of {BUSINESS_NAME} at www.sparkselectricandservice.com, you agree to these Terms and Conditions. If you do not agree with any part of these terms, please do not use our website.
              </p>
            </div>

            <div>
              <h2 className="font-display text-xl font-bold text-navy-500 mb-3">Use of Our Website</h2>
              <p>
                Our website provides information about our electrical services and service areas. The website is intended to provide details regarding our services and contact us by phone. You agree to use the website for lawful purposes only and not to misuse, disrupt, or attempt to gain unauthorized access to any part of the website.
              </p>
            </div>

            <div>
              <h2 className="font-display text-xl font-bold text-navy-500 mb-3">No Online Services</h2>
              <p>
                Our website does not offer online booking, estimate requests, or any form-based services. All service inquiries, scheduling, and business transactions are conducted by phone at {PHONE_DISPLAY}. Information on this website is provided for general informational purposes and does not constitute a quote, estimate, or offer of service.
              </p>
            </div>

            <div>
              <h2 className="font-display text-xl font-bold text-navy-500 mb-3">Service Availability</h2>
              <p>
                The service areas listed on our website represent the communities we aim to serve. Actual service availability may vary based on scheduling, workload, and other factors. Please call us to confirm whether we can serve your location and to discuss your specific electrical needs.
              </p>
            </div>

            <div>
              <h2 className="font-display text-xl font-bold text-navy-500 mb-3">Intellectual Property</h2>
              <p>
                All content on this website, including text, graphics, logos, and images, is the property of {BUSINESS_NAME} or its content providers and is protected by applicable copyright and trademark laws. You may not reproduce, distribute, or use any content from this website without prior written permission.
              </p>
            </div>

            <div>
              <h2 className="font-display text-xl font-bold text-navy-500 mb-3">Disclaimer</h2>
              <p>
                The information on this website is provided "as is" without warranties of any kind. {BUSINESS_NAME} makes no representations or warranties regarding the accuracy, completeness, or reliability of any information on the website. Electrical work should always be performed by a qualified, licensed electrician. Any reliance you place on information on this website is at your own risk.
              </p>
            </div>

            <div>
              <h2 className="font-display text-xl font-bold text-navy-500 mb-3">Limitation of Liability</h2>
              <p>
                {BUSINESS_NAME} shall not be liable for any direct, indirect, incidental, consequential, or other damages arising from your use of or inability to use this website or any information contained on it.
              </p>
            </div>

            <div>
              <h2 className="font-display text-xl font-bold text-navy-500 mb-3">External Links</h2>
              <p>
                Our website may contain links to third-party websites, including Google Maps. We are not responsible for the content, privacy practices, or terms of any third-party website.
              </p>
            </div>

            <div>
              <h2 className="font-display text-xl font-bold text-navy-500 mb-3">Changes to These Terms</h2>
              <p>
                We may update these Terms and Conditions from time to time. Any changes will be posted on this page with an updated date. Your continued use of the website after changes are posted constitutes acceptance of the revised terms.
              </p>
            </div>

            <div>
              <h2 className="font-display text-xl font-bold text-navy-500 mb-3">Contact</h2>
              <p>
                If you have questions about these Terms and Conditions, call us at {PHONE_DISPLAY}.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
