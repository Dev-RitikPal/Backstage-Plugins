import React from 'react';
import { RootState } from '../../redux';

import { Grid, Button } from '@material-ui/core';
import {
  Header,
  Page,
  Content,
  ContentHeader,
  SupportButton,
} from '@backstage/core-components';
import { ServiceRequestFetch } from '../ServiceRequestFetch';
import { ServiceRequestCreate } from '../ServiceRequestCreate';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { toggleModal } from '../../redux/slices/serviceRequest.slice';
export const ServiceRequest = () => {
  const dispatch = useAppDispatch()
  const {showModal}=useAppSelector((state:RootState)=>state.SR)

  const onClick = () => {
    dispatch(toggleModal(!showModal))
  };
  return (
      <Page themeId="tool">
        <Header title="Welcome to service-request!"></Header>
        <Content>
          <ContentHeader title="Service Request">
            <Button onClick={onClick} color="primary" variant="contained">
              Create
            </Button>
            <SupportButton>
              A description of your plugin goes here.
            </SupportButton>
          </ContentHeader>
          <ServiceRequestCreate show={showModal} onClose={onClick} />
          <Grid container spacing={3} direction="column">
            <Grid item>
              <ServiceRequestFetch />
            </Grid>
          </Grid>
        </Content>
      </Page>
  );
};
