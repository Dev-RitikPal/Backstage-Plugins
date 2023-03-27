import { Entity } from '@backstage/catalog-model';
import { ARCHITECTURE_IMAGE_URL_ANNOTATION } from '../constants/annotationArchitecture';

export const isArchitectureDiagramAvailable = (entity: Entity) => {
  return Boolean(
    entity.metadata.annotations?.[ARCHITECTURE_IMAGE_URL_ANNOTATION],
  );
};
