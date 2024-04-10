import React from 'react';
import { Typography, Grid } from '@material-ui/core';
import { useEntity } from '@backstage/plugin-catalog-react';
import { stringifyEntityRef } from '@backstage/catalog-model';
import { GlossaryContent } from './GlossaryContent';
import { AddButton } from './AddGlossaryItem';

export const GlossaryComponent = () => {
  const { entity } = useEntity();
  const response = stringifyEntityRef(entity);
  console.log(response);
  return (
    <Grid
      md={8}
      container
      spacing={3}
      justifyContent={'center'}
      alignItems="center"
      style={{ margin: 'auto' }}
      direction="column"
    >
      <Grid justifyContent={'center'} alignItems="center" item>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            width: '100%',
            alignItems: 'center',
          }}
        >
          <Typography variant="h1">Glossary</Typography> <AddButton />
        </div>
        <GlossaryContent entityRef={response} />
      </Grid>
    </Grid>
  );
};
