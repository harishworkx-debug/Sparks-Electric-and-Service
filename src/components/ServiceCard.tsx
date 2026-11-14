import { useNavigate } from 'react-router-dom';
import { Phone, ArrowRight } from 'lucide-react';
import * as Icons from 'lucide-react';
import { PHONE_LINK } from '@/data/services';
import type { ServiceData } from '@/data/services';

interface ServiceCardProps {
  service: ServiceData;
  locationSlug?: string;
}

export default function ServiceCard({ service, locationSlug = 'duvall-wa' }: ServiceCardProps) {
  const navigate = useNavigate();
  const IconComponent = (Icons as unknown as Record<string, React.ComponentType<{ className?: string }>>)[service.icon] || Icons.Zap;
  const cleanLocSlug = locationSlug.replace(/^(?:electrician|electrition)-/, '');
  const linkPath = `/${service.slug}-${cleanLocSlug}`;

  return (
    <div
      role="link"
      tabIndex={0}
      onClick={() => navigate(linkPath)}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          navigate(linkPath);
        }
      }}
      className="group flex cursor-pointer flex-col overflow-hidden rounded-xl bg-white shadow-md transition-all hover:shadow-xl hover:-translate-y-1"
    >
      <div className="block overflow-hidden">
        <img
          src={service.image}
          alt={service.imageAlt}
          loading="lazy"
          className="h-48 w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <div className="flex flex-1 flex-col p-5">
        <div className="mb-3 flex items-center gap-2">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-electric-50 text-electric-500 transition-colors group-hover:bg-electric-500 group-hover:text-white">
            <IconComponent className="h-5 w-5" />
          </div>
          <h3 className="font-display text-lg font-bold text-navy-500">{service.name}</h3>
        </div>
        <p className="mb-4 text-sm text-navy-300 leading-relaxed flex-1">{service.description}</p>
        <div className="flex flex-col gap-2 sm:flex-row sm:items-center">
          <span className="inline-flex items-center gap-1 text-sm font-semibold text-electric-500 group-hover:text-electric-600 transition-colors">
            View {service.shortName}
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </span>
          <a
            href={PHONE_LINK}
            onClick={(e) => e.stopPropagation()}
            className="inline-flex items-center gap-1.5 rounded-lg bg-warmyellow-400 px-3 py-2 text-sm font-bold text-navy-500 hover:bg-warmyellow-300 transition-colors sm:ml-auto"
          >
            <Phone className="h-4 w-4" />
            Call Now
          </a>
        </div>
      </div>
    </div>
  );
}
