import { RELATION_HAS_PART } from '@backstage/catalog-model';
import React from 'react';
import {
  asSystemEntities,
  RelatedEntitiesCard,
  systemEntityColumns,
  systemEntityHelpLink,
} from '../RelatedEntitiesCard';

/** @public */
export interface HasSystemsCardProps {
  variant?: 'gridItem';
}

export function HasSystemsCard(props: HasSystemsCardProps) {
  const { variant = 'gridItem' } = props;
  return (
    <RelatedEntitiesCard
      variant={variant}
      title="Has systems"
      entityKind="System"
      relationType={RELATION_HAS_PART}
      columns={systemEntityColumns}
      asRenderableEntities={asSystemEntities}
      emptyMessage="No system is part of this domain"
      emptyHelpLink={systemEntityHelpLink}
    />
  );
}
