import SEO from '@/components/SEO';
import Breadcrumbs from '@/components/Breadcrumbs';
import { BUSINESS_NAME, PHONE_DISPLAY } from '@/data/services';

export default function PrivacyPolicyPage() {
  return (
    <>
      <SEO
        title="Privacy Policy | Sparks Electric and Service"
        description={`Privacy Policy for ${BUSINESS_NAME}. Understand how we handle information on our website.`}
        canonicalPath="/privacy-policy"
      />

      <div className="bg-lightgray border-b border-gray-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-3">
          <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Privacy Policy' }]} />
        </div>
      </div>

      <section className="bg-white py-16 lg:py-24">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h1 className="font-display text-4xl font-bold text-navy-500 mb-8">Privacy Policy</h1>

          <div className="prose prose-navy max-w-none space-y-6 text-navy-400 leading-relaxed">
            <p className="text-sm text-navy-200">Last updated: November 2026</p>

            <div>
              <h2 className="font-display text-xl font-bold text-navy-500 mb-3">Introduction</h2>
              <p>
                {BUSINESS_NAME} respects your privacy. This Privacy Policy explains how we handle information when you visit our website at www.sparkselectricandservice.com.
              </p>
            </div>

            <div>
              <h2 className="font-display text-xl font-bold text-navy-500 mb-3">Information We Do Not Collect</h2>
              <p>
                Our website does not use contact forms, quote forms, booking forms, or any other lead-capture tools. We do not ask you to submit personal information through our website. The primary way we interact with customers is by phone at {PHONE_DISPLAY}.
              </p>
            </div>

            <div>
              <h2 className="font-display text-xl font-bold text-navy-500 mb-3">Cookies and Analytics</h2>
              <p>
                We may use standard analytics tools to understand how visitors find and use our website. These tools may collect anonymous data such as approximate geographic location, pages visited, and device type. This information is used to improve our website content and does not identify you personally.
              </p>
            </div>

            <div>
              <h2 className="font-display text-xl font-bold text-navy-500 mb-3">Third-Party Services</h2>
              <p>
                Our website displays a Google Maps embed showing our business location. Google may collect information about your interaction with the map in accordance with Google's own privacy policy. We do not control how Google handles that information.
              </p>
            </div>

            <div>
              <h2 className="font-display text-xl font-bold text-navy-500 mb-3">Phone Communications</h2>
              <p>
                When you call us, we may note information relevant to your electrical service needs, such as your address and the nature of the work. This information is used solely to provide you with electrical services and is not shared with third parties for marketing purposes.
              </p>
            </div>

            <div>
              <h2 className="font-display text-xl font-bold text-navy-500 mb-3">Children's Privacy</h2>
              <p>
                Our website is not directed toward children, and we do not knowingly collect information from children.
              </p>
            </div>

            <div>
              <h2 className="font-display text-xl font-bold text-navy-500 mb-3">Changes to This Policy</h2>
              <p>
                We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated date.
              </p>
            </div>

            <div>
              <h2 className="font-display text-xl font-bold text-navy-500 mb-3">Contact</h2>
              <p>
                If you have questions about this Privacy Policy, call us at {PHONE_DISPLAY}.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
