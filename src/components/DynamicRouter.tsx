import { useParams, Navigate } from 'react-router-dom';
import { getLocation, getMainLocation } from '@/data/locations';
import { getService } from '@/data/services';
import LocationPage from '@/pages/LocationPage';
import ServiceLocationPage from '@/pages/ServiceLocationPage';

export default function DynamicRouter() {
  const params = useParams();
  const path = params['*'] || params.path;

  if (!path) return <Navigate to="/404" replace />;

  // 1. Check if this is a pure location slug (e.g., "electrician-monroe-wa", "electrition-monroe-wa", or "monroe-wa")
  const location = getLocation(path);
  if (location) {
    // If the path was "monroe-wa" or "electrition-monroe-wa", redirect to canonical "/electrician-monroe-wa"
    if (path !== location.slug) {
      return <Navigate to={`/${location.slug}`} replace />;
    }
    return <LocationPage location={location} />;
  }

  // 2. Check if this is a pure service slug (e.g., "electrical-repair" without location) -> redirect to main location
  const pureService = getService(path);
  if (pureService) {
    const mainLoc = getMainLocation();
    return <Navigate to={`/${pureService.slug}-${mainLoc.citySlug}`} replace />;
  }

  // 3. Try to match {serviceSlug}-{locationSlug}
  // Supports /electrical-repair-monroe-wa or /electrical-repair-electrician-monroe-wa
  const serviceLocMatch =
    path.match(/^(.+)-(?:electrician|electrition)-([a-z-]+-wa)$/) ||
    path.match(/^(.+)-([a-z-]+-wa)$/);

  if (serviceLocMatch) {
    const serviceSlug = serviceLocMatch[1];
    const locationPart = serviceLocMatch[2];

    const service = getService(serviceSlug);
    const loc = getLocation(locationPart);

    if (service && loc) {
      const canonicalServiceLocPath = `${service.slug}-${loc.citySlug}`;
      if (path !== canonicalServiceLocPath) {
        return <Navigate to={`/${canonicalServiceLocPath}`} replace />;
      }
      return <ServiceLocationPage service={service} location={loc} />;
    }
  }

  return <Navigate to="/404" replace />;
}
