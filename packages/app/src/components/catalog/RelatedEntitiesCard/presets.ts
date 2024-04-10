import {
  ComponentEntity,
  Entity,
  ResourceEntity,
  SystemEntity,
} from '@backstage/catalog-model';
import { EntityTable } from '@backstage/plugin-catalog-react';
import { TableColumn } from '@backstage/core-components';

export const componentEntityColumns: TableColumn<ComponentEntity>[] = [
  EntityTable.columns.createEntityRefColumn({ defaultKind: 'component' }),
  EntityTable.columns.createOwnerColumn(),
  EntityTable.columns.createSpecTypeColumn(),
  EntityTable.columns.createSpecLifecycleColumn(),
  EntityTable.columns.createMetadataDescriptionColumn(),
];
export const componentEntityHelpLink: string =
  'https://backstage.io/docs/features/software-catalog/descriptor-format#kind-component';
export const asComponentEntities = (entities: Entity[]): ComponentEntity[] =>
  entities as ComponentEntity[];

export const resourceEntityColumns: TableColumn<ResourceEntity>[] = [
  EntityTable.columns.createEntityRefColumn({ defaultKind: 'resource' }),
  EntityTable.columns.createOwnerColumn(),
  EntityTable.columns.createSpecTypeColumn(),
  EntityTable.columns.createSpecLifecycleColumn(),
  EntityTable.columns.createMetadataDescriptionColumn(),
];
export const resourceEntityHelpLink: string =
  'https://backstage.io/docs/features/software-catalog/descriptor-format#kind-resource';
export const asResourceEntities = (entities: Entity[]): ResourceEntity[] =>
  entities as ResourceEntity[];

export const systemEntityColumns: TableColumn<SystemEntity>[] = [
  EntityTable.columns.createEntityRefColumn({ defaultKind: 'system' }),
  EntityTable.columns.createOwnerColumn(),
  EntityTable.columns.createMetadataDescriptionColumn(),
];
export const systemEntityHelpLink: string =
  'https://backstage.io/docs/features/software-catalog/descriptor-format#kind-system';
export const asSystemEntities = (entities: Entity[]): SystemEntity[] =>
  entities as SystemEntity[];
