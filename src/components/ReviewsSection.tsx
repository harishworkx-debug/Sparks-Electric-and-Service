import { Star, ExternalLink, CheckCircle } from 'lucide-react';
import { reviews, GOOGLE_RATING, TOTAL_REVIEWS } from '@/data/reviews';
import { MAPS_LINK } from '@/data/services';

interface ReviewsSectionProps {
  title?: string;
  subtitle?: string;
  bgClass?: string;
}

export default function ReviewsSection({
  title = 'Real Google Reviews',
  subtitle = 'See what our customers have to say about our electrical services.',
  bgClass = 'bg-white',
}: ReviewsSectionProps) {
  return (
    <section className={`${bgClass} py-16 lg:py-24 border-t border-gray-100`}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-12 text-center">
          <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-warmyellow-400/20 px-4 py-1 text-sm font-bold text-navy-500">
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-warmyellow-500 text-warmyellow-500" />
              ))}
            </div>
            <span>{GOOGLE_RATING}.0 on Google Reviews</span>
          </div>

          <h2 className="font-display text-3xl font-bold text-navy-500 sm:text-4xl">{title}</h2>
          <p className="mt-4 text-lg text-navy-300 max-w-2xl mx-auto">{subtitle}</p>

          <div className="mt-4 flex flex-wrap items-center justify-center gap-4 text-sm text-navy-300">
            <span className="font-bold text-navy-500">{GOOGLE_RATING}.0 / 5.0 Rating</span>
            <span>•</span>
            <span>{TOTAL_REVIEWS} Verified Customer Reviews</span>
            <span>•</span>
            <a
              href={MAPS_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 font-semibold text-electric-500 hover:text-electric-600 transition-colors"
            >
              View on Google Maps
              <ExternalLink className="h-3.5 w-3.5" />
            </a>
          </div>
        </div>

        {/* Reviews Cards Grid */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {reviews.map((rev) => (
            <div
              key={rev.id}
              className="flex flex-col rounded-2xl bg-lightgray p-6 sm:p-8 transition-all hover:shadow-lg border border-gray-100 hover:border-electric-100"
            >
              {/* Header: User Avatar & Name */}
              <div className="flex items-center gap-3 mb-4">
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-electric-500 text-white font-bold text-base shadow-sm">
                  {rev.initials}
                </div>
                <div>
                  <div className="flex items-center gap-1.5">
                    <h3 className="font-display text-base font-bold text-navy-500 leading-tight">
                      {rev.author}
                    </h3>
                    <span title="Verified Customer">
                      <CheckCircle className="h-4 w-4 text-electric-500" />
                    </span>
                  </div>
                  {rev.badge && <p className="text-xs text-navy-200 mt-0.5">{rev.badge}</p>}
                </div>
              </div>

              {/* Stars & Date */}
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-1">
                  {[...Array(rev.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-warmyellow-400 text-warmyellow-400" />
                  ))}
                </div>
                <span className="text-xs text-navy-200">{rev.date}</span>
              </div>

              {/* Review Content */}
              <p className="text-sm text-navy-400 leading-relaxed flex-1 italic mb-4">
                &ldquo;{rev.content}&rdquo;
              </p>

              {/* Tags */}
              {rev.servicesMentioned && rev.servicesMentioned.length > 0 && (
                <div className="mt-auto pt-3 border-t border-gray-200 flex flex-wrap gap-1.5">
                  {rev.servicesMentioned.map((tag) => (
                    <span
                      key={tag}
                      className="inline-block rounded-md bg-white px-2 py-0.5 text-xs font-medium text-navy-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Bottom CTA to Google Maps */}
        <div className="mt-12 text-center">
          <a
            href={MAPS_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg bg-navy-500 px-6 py-3 text-sm font-bold text-white transition-all hover:bg-navy-600 hover:shadow-md"
          >
            <span>Read All Reviews on Google</span>
            <ExternalLink className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
