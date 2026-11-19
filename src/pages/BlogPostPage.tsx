import { useParams, Link } from 'react-router-dom';
import {
  ArrowRight,
  Calendar,
  Clock,
  User,
  AlertTriangle,
  Info,
  CheckCircle2,
  ShieldCheck,
  Phone,
  BookOpen,
} from 'lucide-react';
import SEO from '@/components/SEO';
import Breadcrumbs from '@/components/Breadcrumbs';
import CallButton from '@/components/CallButton';
import NotFoundPage from '@/pages/NotFoundPage';
import { PHONE_DISPLAY, WA_LICENSE_INFO } from '@/data/services';
import { getBlogPost, blogPosts, BlogPost } from '@/data/blogPosts';
import { blogPostingSchema, breadcrumbSchema } from '@/data/structuredData';

export default function BlogPostPage() {
  const { slug } = useParams<{ slug: string }>();
  const post = slug ? getBlogPost(slug) : undefined;

  if (!post) {
    return <NotFoundPage />;
  }

  const canonicalPath = `/blog/${post.slug}`;
  const breadcrumbItems = [
    { label: 'Home', path: '/' },
    { label: 'Blog', path: '/blog' },
    { label: post.title, path: canonicalPath },
  ];

  const relatedArticles = post.relatedBlogSlugs
    .map((s) => getBlogPost(s))
    .filter((p): p is BlogPost => p !== undefined);

  return (
    <>
      <SEO
        title={post.metaTitle}
        description={post.metaDescription}
        canonicalPath={canonicalPath}
        ogImage={post.image}
        structuredData={[
          blogPostingSchema({ ...post, description: post.metaDescription }),
          breadcrumbSchema(breadcrumbItems),
        ]}
      />

      <div className="bg-lightgray border-b border-gray-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-3">
          <Breadcrumbs
            items={[
              { label: 'Home', href: '/' },
              { label: 'Blog', href: '/blog' },
              { label: post.title },
            ]}
          />
        </div>
      </div>

      <article className="bg-white py-12 lg:py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="mb-8">
            <div className="flex flex-wrap items-center gap-3 text-xs text-navy-300 mb-4">
              <span className="font-semibold text-electric-600 bg-electric-50 px-3 py-1 rounded-full">
                {post.category}
              </span>
              <span className="flex items-center gap-1">
                <Calendar className="h-3.5 w-3.5" />
                {post.datePublished}
              </span>
              <span className="flex items-center gap-1">
                <Clock className="h-3.5 w-3.5" />
                {post.readTime}
              </span>
              <span className="flex items-center gap-1">
                <User className="h-3.5 w-3.5" />
                {post.author}
              </span>
            </div>

            <h1 className="font-display text-3xl font-bold text-navy-500 sm:text-4xl lg:text-5xl leading-tight">
              {post.title}
            </h1>
            <p className="mt-4 text-lg text-navy-300 leading-relaxed">
              {post.excerpt}
            </p>
          </div>

          {/* Featured Image */}
          <div className="mb-12 overflow-hidden rounded-2xl shadow-lg">
            <img
              src={post.image}
              alt={post.imageAlt}
              className="w-full h-[380px] sm:h-[460px] object-cover"
            />
          </div>

          {/* Body Content */}
          <div className="prose prose-lg max-w-none text-navy-400 space-y-10">
            {post.content.map((section, idx) => (
              <section key={idx} className="space-y-4">
                <h2 className="font-display text-2xl font-bold text-navy-500">
                  {section.sectionTitle}
                </h2>
                {section.paragraphs.map((p, pIdx) => (
                  <p key={pIdx} className="leading-relaxed text-navy-300 text-base sm:text-lg">
                    {p}
                  </p>
                ))}

                {section.list && (
                  <ul className="space-y-2 pl-4 list-disc text-sm sm:text-base text-navy-400">
                    {section.list.map((item, lIdx) => (
                      <li key={lIdx} className="leading-relaxed">{item}</li>
                    ))}
                  </ul>
                )}

                {section.callout && (
                  <div
                    className={`my-6 rounded-xl p-5 border ${
                      section.callout.type === 'warning'
                        ? 'bg-amber-50/80 border-amber-200 text-amber-950'
                        : section.callout.type === 'info'
                        ? 'bg-blue-50/80 border-blue-200 text-blue-950'
                        : 'bg-emerald-50/80 border-emerald-200 text-emerald-950'
                    }`}
                  >
                    <div className="flex items-center gap-2 font-display font-bold text-sm mb-1">
                      {section.callout.type === 'warning' && (
                        <AlertTriangle className="h-4 w-4 text-amber-600" />
                      )}
                      {section.callout.type === 'info' && (
                        <Info className="h-4 w-4 text-blue-600" />
                      )}
                      {section.callout.type === 'tip' && (
                        <CheckCircle2 className="h-4 w-4 text-emerald-600" />
                      )}
                      <span>{section.callout.title}</span>
                    </div>
                    <p className="text-xs sm:text-sm leading-relaxed">
                      {section.callout.text}
                    </p>
                  </div>
                )}
              </section>
            ))}
          </div>

          {/* Contextual Service Links Box (Requirement from Audit) */}
          <div className="my-12 rounded-xl bg-lightgray p-6 sm:p-8 border border-gray-200">
            <h3 className="font-display text-lg font-bold text-navy-500 mb-2">
              Related Electrical Services in Duvall & Snoqualmie Valley
            </h3>
            <p className="text-xs sm:text-sm text-navy-300 mb-4">
              Need assistance with this issue in your home? Sparks Electric & Service provides licensed diagnostics, installations, and repairs:
            </p>
            <div className="flex flex-wrap gap-2.5">
              {post.relatedServiceLinks.map((link, lIdx) => (
                <Link
                  key={lIdx}
                  to={link.url}
                  className="inline-flex items-center gap-1.5 rounded-lg bg-white px-4 py-2 text-xs sm:text-sm font-semibold text-electric-600 border border-gray-200 hover:border-electric-400 hover:text-electric-700 transition-colors shadow-sm"
                >
                  <span>{link.label}</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              ))}
            </div>
          </div>

          {/* Author Box */}
          <div className="my-8 rounded-xl bg-white p-6 border border-gray-200 flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-electric-500 text-white font-bold flex-shrink-0">
              JS
            </div>
            <div>
              <p className="font-display font-bold text-navy-500">{post.author}</p>
              <p className="text-xs text-emerald-700 font-medium">{WA_LICENSE_INFO}</p>
              <p className="text-xs text-navy-300 mt-1">
                Serving Duvall, Carnation, Monroe, Snoqualmie, and King & Snohomish counties with code-compliant electrical craftsmanship.
              </p>
            </div>
          </div>

          {/* Call CTA Box */}
          <div className="my-10 rounded-2xl bg-navy-500 p-8 text-white text-center sm:text-left sm:flex sm:items-center sm:justify-between gap-6">
            <div>
              <h3 className="font-display text-xl font-bold mb-2">
                Experiencing an Electrical Issue?
              </h3>
              <p className="text-xs sm:text-sm text-navy-100 max-w-md">
                Speak directly with an electrician to discuss your symptoms and arrange a safe, code-compliant assessment.
              </p>
            </div>
            <div className="mt-6 sm:mt-0 flex-shrink-0">
              <CallButton
                label={`Call ${PHONE_DISPLAY}`}
                className="!bg-warmyellow-400 !text-navy-500 hover:!bg-warmyellow-300"
              />
            </div>
          </div>

          {/* Related Articles */}
          {relatedArticles.length > 0 && (
            <div className="mt-16 pt-10 border-t border-gray-200">
              <h3 className="font-display text-2xl font-bold text-navy-500 mb-6">
                Related Electrical Guides
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {relatedArticles.map((rel) => (
                  <Link
                    key={rel.slug}
                    to={`/blog/${rel.slug}`}
                    className="group block rounded-xl bg-lightgray p-5 border border-gray-100 transition-all hover:border-electric-200 hover:shadow-sm"
                  >
                    <span className="text-[11px] font-semibold text-electric-600 block mb-1">
                      {rel.category}
                    </span>
                    <h4 className="font-display text-sm font-bold text-navy-500 group-hover:text-electric-500 transition-colors line-clamp-2 mb-2">
                      {rel.title}
                    </h4>
                    <span className="inline-flex items-center gap-1 text-xs font-semibold text-electric-500 group-hover:text-electric-600">
                      Read Guide &rarr;
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </article>
    </>
  );
}
