import React, { PropsWithChildren, ComponentProps } from 'react';
import { Header } from '@backstage/core-components';
import { Page } from './Page';

type PageWithHeaderProps = ComponentProps<typeof Header> & {
  themeId: string;
};

export function PageWithHeader(props: PropsWithChildren<PageWithHeaderProps>) {
  const { themeId, children, ...restProps } = props;
  return (
    <Page themeId={themeId}>
      <Header {...restProps} />
      {children}
    </Page>
  );
}
