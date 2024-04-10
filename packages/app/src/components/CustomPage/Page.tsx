import React, { useContext } from 'react';
import { BackstageTheme } from '@backstage/theme';
import { makeStyles, ThemeProvider } from '@material-ui/core/styles';
import { SidebarPinStateContext } from '@backstage/core-components';
import SignInBackgroud from './../../assets/rp-signin-page.png'



export type PageClassKey = 'root';

const useStyles = makeStyles<BackstageTheme, { isMobile?: boolean }>(
  (theme) => {
    return ({
    root: ({ isMobile }) => ({
      display: 'grid',
      gridTemplateAreas:
        "'pageHeader pageHeader pageHeader' 'pageSubheader pageSubheader pageSubheader' 'pageNav pageContent pageSidebar'",
      gridTemplateRows: 'max-content auto 1fr',
      gridTemplateColumns: 'auto 1fr auto',
      height: isMobile ? '100%' : '100vh',
      overflowY: 'auto',
      // @ts-ignore
      backgroundImage: theme.overrides?.CustomValues?.SignInPageBackground || `url(${SignInBackgroud})`,
      backgroundPosition: "center",
      backgroundSize: 'cover'
    })
  })
},
  { name: 'BackstagePage' },
);

type Props = {
  themeId: string;
  children?: React.ReactNode;
};

export function Page(props: Props) {
  const { themeId, children } = props;
  const { isMobile } = useContext(SidebarPinStateContext);
  const classes = useStyles({ isMobile });
  return (
    <ThemeProvider
      theme={(baseTheme: BackstageTheme) => ({
        ...baseTheme,
        page: baseTheme.getPageTheme({ themeId }),
      })}
    >
      <main className={classes.root}>{children}</main>
    </ThemeProvider>
  );
}
