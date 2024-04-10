import { Entity } from '@backstage/catalog-model';
import { isFeatureAvailable } from './isFeatureAvailable';
import { KAFKA } from '../../constants/featureFlags';
const KAFKA_CONSUMER_GROUP_ANNOTATION = 'kafka.apache.org/consumer-groups';

export const isKafkaFeatureAvailable = (entity: Entity) => {
  const available = isFeatureAvailable(KAFKA);
  if (available) {
    return Boolean(
      entity.metadata.annotations?.[KAFKA_CONSUMER_GROUP_ANNOTATION],
    );
  } else {
    return false;
  }
};
