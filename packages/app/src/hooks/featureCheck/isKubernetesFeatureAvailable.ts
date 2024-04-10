import { Entity } from '@backstage/catalog-model';
import { isFeatureAvailable } from './isFeatureAvailable';
import { KUBERNETES } from '../../constants/featureFlags';
const KUBERNETES_ANNOTATION = 'backstage.io/kubernetes-id';
const KUBERNETES_LABEL_SELECTOR_QUERY_ANNOTATION =
  'backstage.io/kubernetes-label-selector';

export const isKubernetesFeatureAvailable = (entity: Entity) => {
  const available = isFeatureAvailable(KUBERNETES);
  if (available) {
    return (
      Boolean(entity.metadata.annotations?.[KUBERNETES_ANNOTATION]) ||
      Boolean(
        entity.metadata.annotations?.[
          KUBERNETES_LABEL_SELECTOR_QUERY_ANNOTATION
        ],
      )
    );
  } else {
    return false;
  }
};
