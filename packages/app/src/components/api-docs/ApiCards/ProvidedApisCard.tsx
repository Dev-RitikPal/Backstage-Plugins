/*
 * Copyright 2020 The Backstage Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { ApiEntity, RELATION_PROVIDES_API } from '@backstage/catalog-model';
import {
  CodeSnippet,
  InfoCard,
  InfoCardVariants,
  Link,
  Progress,
  WarningPanel,
} from '@backstage/core-components';
import {
  // EntityTable,
  useEntity,
  useRelatedEntities,
} from '@backstage/plugin-catalog-react';
import { Grid, Typography } from '@material-ui/core';
import React from 'react';
import { EntityTable } from './../../EntityTable';
import { apiEntityColumns } from './presets';

type Props = {
  variant?: Extract<InfoCardVariants, 'gridItem'>;
};

export const ProvidedApisCard = ({ variant = 'gridItem' }: Props) => {
  const { entity } = useEntity();
  const { entities, loading, error } = useRelatedEntities(entity, {
    type: RELATION_PROVIDES_API,
  });

  if (loading) {
    return (
      <Grid item md={6}>
        <InfoCard variant={variant} title="Provided APIs">
          <Progress />
        </InfoCard>
      </Grid>
    );
  }

  if (entities?.length === 0) {
    return <></>;
  }

  if (error || !entities) {
    return (
      <Grid item md={6}>
        <InfoCard variant={variant} title="Provided APIs">
          <WarningPanel
            severity="error"
            title="Could not load APIs"
            message={<CodeSnippet text={`${error}`} language="text" />}
          />
        </InfoCard>
      </Grid>
    );
  }
  return (
    <Grid item md={6}>
      <EntityTable
        title="Provided APIs"
        variant={variant}
        emptyContent={
          <div style={{ textAlign: 'center' }}>
            <Typography variant="body1">
              This {entity.kind.toLocaleLowerCase('en-US')} does not provide any
              APIs.
            </Typography>
            <Typography variant="body2">
              <Link to="https://backstage.io/docs/features/software-catalog/descriptor-format#specprovidesapis-optional">
                Learn how to change this.
              </Link>
            </Typography>
          </div>
        }
        columns={apiEntityColumns}
        entities={entities as ApiEntity[]}
      />
    </Grid>
  );
};
