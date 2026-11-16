import { Link } from 'react-router-dom';
import { ArrowRight, Calendar, Clock, BookOpen, ShieldCheck } from 'lucide-react';
import SEO from '@/components/SEO';
import Breadcrumbs from '@/components/Breadcrumbs';
import CallButton from '@/components/CallButton';
import { PHONE_DISPLAY } from '@/data/services';
import { blogPosts } from '@/data/blogPosts';
import { breadcrumbSchema, websiteSchema } from '@/data/structuredData';

export default function BlogIndexPage() {
  const breadcrumbItems = [
    { label: 'Home', path: '/' },
    { label: 'Blog & Electrical Guides', path: '/blog' },
  ];

  return (
    <>
      <SEO
        title="Electrical Guides & Homeowner Safety Tips | Sparks Electric & Service"
        description="Helpful guides, safety checklists, and troubleshooting tips from a licensed Washington electrical contractor. Learn about panel upgrades, EV chargers, generators, and wiring."
        canonicalPath="/blog"
        structuredData={[
          websiteSchema(),
          breadcrumbSchema(breadcrumbItems),
        ]}
      />

      <div className="bg-lightgray border-b border-gray-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-3">
          <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Blog & Electrical Guides' }]} />
        </div>
      </div>

      {/* Hero */}
      <section className="bg-navy-500 py-16 lg:py-20 text-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-electric-500/20 px-3.5 py-1 text-xs font-semibold text-warmyellow-400">
            <BookOpen className="h-4 w-4" />
            Educational Guides & Practical Advice
          </div>
          <h1 className="font-display text-4xl font-bold sm:text-5xl">
            Electrical Guides & Safety Tips
          </h1>
          <p className="mt-4 text-lg text-navy-100 max-w-2xl mx-auto leading-relaxed">
            Expert insights, practical troubleshooting steps, and code compliance information from a licensed Washington electrical contractor serving Duvall and the Snoqualmie Valley.
          </p>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="bg-lightgray py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <article
                key={post.slug}
                className="flex flex-col overflow-hidden rounded-xl bg-white shadow-sm border border-gray-100 transition-all hover:shadow-md"
              >
                <Link to={`/blog/${post.slug}`} className="block h-52 overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.imageAlt}
                    className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                </Link>
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="mb-3 flex items-center justify-between text-xs text-navy-300">
                      <span className="font-semibold text-electric-600 bg-electric-50 px-2.5 py-0.5 rounded-full">
                        {post.category}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="h-3.5 w-3.5" />
                        {post.readTime}
                      </span>
                    </div>

                    <h2 className="font-display text-xl font-bold text-navy-500 mb-3 hover:text-electric-500 transition-colors">
                      <Link to={`/blog/${post.slug}`}>
                        {post.title}
                      </Link>
                    </h2>
                    <p className="text-sm text-navy-300 leading-relaxed mb-4">
                      {post.excerpt}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-gray-100 flex items-center justify-between">
                    <span className="text-xs text-navy-300 flex items-center gap-1.5">
                      <Calendar className="h-3.5 w-3.5" />
                      {post.datePublished}
                    </span>
                    <Link
                      to={`/blog/${post.slug}`}
                      className="inline-flex items-center gap-1 text-sm font-semibold text-electric-500 hover:text-electric-600 transition-colors"
                    >
                      Read Guide <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-electric-500 py-16 text-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-3xl font-bold sm:text-4xl">
            Have a Specific Electrical Question?
          </h2>
          <p className="mt-4 text-base text-electric-100 max-w-2xl mx-auto">
            Speak directly with a licensed Washington electrician. Call Sparks Electric & Service to discuss your project or diagnose an issue.
          </p>
          <div className="mt-8">
            <CallButton
              size="lg"
              label={`Call ${PHONE_DISPLAY}`}
              className="!bg-warmyellow-400 !text-navy-500 hover:!bg-warmyellow-300"
            />
          </div>
        </div>
      </section>
    </>
  );
}
