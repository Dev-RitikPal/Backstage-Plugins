import React from 'react';
import { Typography, Grid } from '@material-ui/core';
import { useEntity } from '@backstage/plugin-catalog-react';
import {
  ARCHITECTURE_WEB_URL_ANNOTATION,
  ARCHITECTURE_IMAGE_URL_ANNOTATION,
} from '../../../constants/annotationArchitecture';
export const ArchitectureDiagram = () => {
  const { entity } = useEntity();
  const imageUrl =
    entity.metadata.annotations?.[ARCHITECTURE_IMAGE_URL_ANNOTATION];
  const webUrl = entity.metadata.annotations?.[ARCHITECTURE_WEB_URL_ANNOTATION];
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
      <a target={'_blank'} href={webUrl ? webUrl : ''}>
        <img
          alt={
            'The Architecture Diagram is unavailable, you may try and connect to the VPN ,image maybe located inside the VirtuaL network'
          }
          src={imageUrl}
          style={{ width: '100%' }}
        />
      </a>
    </Grid>
  );
};
