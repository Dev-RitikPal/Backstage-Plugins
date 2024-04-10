import { Entity } from '@backstage/catalog-model';
import { isFeatureAvailable } from './isFeatureAvailable';
import { NEW_RELIC_DASHBOARDS } from '../../constants/featureFlags';
const NEWRELIC_GUID = 'newrelic.com/dashboard-guid';
export const isNewRelicFeatureAvailable = (entity: Entity) => {
  const available = isFeatureAvailable(NEW_RELIC_DASHBOARDS);
  if (available) {
    return Boolean(entity.metadata.annotations?.[NEWRELIC_GUID]);
  } else {
    return false;
  }
};
