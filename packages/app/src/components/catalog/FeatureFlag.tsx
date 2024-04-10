import React from 'react';
import { isFeatureAvailable } from '../../hooks/featureCheck/isFeatureAvailable';
interface Props {
  children?: JSX.Element;
  config: string;
}
const Feature = (props: Props) => {
  const { children, config } = props;
  const available = isFeatureAvailable(config);
  if (available) {
    return <>{children}</>;
  }
  return <></>;
};

export const FeatureFlag = Feature;
