import { Entity } from '@backstage/catalog-model';
import {
  InfoCard,
  Link,
  Progress,
  ResponseErrorPanel,
  TableColumn,
} from '@backstage/core-components';
import { useEntity, useRelatedEntities } from '@backstage/plugin-catalog-react';
import { Typography } from '@material-ui/core';
import React from 'react';
import { EntityTable } from '../../EntityTable';

/** @public */
export type RelatedEntitiesCardProps<T extends Entity> = {
  variant?: 'gridItem';
  title: string;
  columns: TableColumn<T>[];
  entityKind?: string;
  relationType: string;
  emptyMessage: string;
  emptyHelpLink: string;
  asRenderableEntities: (entities: Entity[]) => T[];
};

/**
 * A low level card component that can be used as a building block for more
 * specific cards.
 *
 * @remarks
 *
 * You probably want to make a dedicated component for your needs, which renders
 * this card as its implementation with some of the props set to the appropriate
 * values.
 *
 * @public
 */

function evalPageSize<T>(data: T[]) {
  if (Array.isArray(data)) {
    if (data.length <= 5) {
      return 5;
    } else if (data.length <= 10) {
      return 10;
    }
    return 20;
  }

  return 5;
}

export function RelatedEntitiesCard<T extends Entity>(
  props: RelatedEntitiesCardProps<T>,
) {
  const {
    variant = 'gridItem',
    title,
    columns,
    entityKind,
    relationType,
    emptyMessage,
    emptyHelpLink,
    asRenderableEntities,
  } = props;

  const { entity } = useEntity();
  const { entities, loading, error } = useRelatedEntities(entity, {
    type: relationType,
    kind: entityKind,
  });

  if (loading) {
    return (
      <InfoCard variant={variant} title={title}>
        <Progress />
      </InfoCard>
    );
  }

  if (error) {
    return (
      <InfoCard variant={variant} title={title}>
        <ResponseErrorPanel error={error} />
      </InfoCard>
    );
  }

  if (entities?.length === 0) {
    return <></>;
  }

  if (entityKind === 'System') {
    const pageSize = evalPageSize(entities || []);
    return (
      <EntityTable
        title={title}
        variant={variant}
        emptyContent={
          <div style={{ textAlign: 'center' }}>
            <Typography variant="body1">{emptyMessage}</Typography>
            <Typography variant="body2">
              <Link to={emptyHelpLink}>Learn how to change this.</Link>
            </Typography>
          </div>
        }
        columns={columns}
        entities={asRenderableEntities(entities || [])}
        pageSize={pageSize}
      />
    );
  }

  return (
    <EntityTable
      title={title}
      variant={variant}
      emptyContent={
        <div style={{ textAlign: 'center' }}>
          <Typography variant="body1">{emptyMessage}</Typography>
          <Typography variant="body2">
            <Link to={emptyHelpLink}>Learn how to change this.</Link>
          </Typography>
        </div>
      }
      columns={columns}
      entities={asRenderableEntities(entities || [])}
    />
  );
}
