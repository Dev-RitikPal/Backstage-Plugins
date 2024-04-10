import * as React from 'react';
import { ServiceRequest } from './ServiceRequest';
import { store } from '../../redux';
import { Provider } from 'react-redux';

const ServiceRequestMain: React.FC = () => {
  return (
    <Provider store={store}>
      <ServiceRequest />
    </Provider>
  );
};
export default ServiceRequestMain;
