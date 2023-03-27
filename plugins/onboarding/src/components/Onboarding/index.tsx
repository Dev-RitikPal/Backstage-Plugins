import React from 'react';
import { Provider } from 'react-redux';

import { store } from '../../redux';
import { Checklist } from './Checklist';
import { OnboardingModal } from './OnboardingModal';

const Onboarding: React.FC = () => {
  return (
    <Provider store={store}>
      <OnboardingModal>
        <Checklist />
      </OnboardingModal>
    </Provider>
  );
};
export default Onboarding;
