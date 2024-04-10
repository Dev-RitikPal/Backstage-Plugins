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

// import React, { PropsWithChildren, useEffect, useState } from 'react';
import React, { PropsWithChildren, useEffect, useState } from 'react';

import { SidebarSearch } from '@backstage/plugin-search';
import { Settings as SidebarSettings } from '@backstage/plugin-user-settings';
import { makeStyles } from '@material-ui/core';
import LibraryAdd from '@material-ui/icons/Bookmark';
import ExitToApp from '@material-ui/icons/ExitToApp';
import HomeIcon from '@material-ui/icons/Home';
// import { NavLink } from 'react-router-dom';
import { MyGroupsSidebarItem } from '@backstage/plugin-org';
import DesktopMac from '@material-ui/icons/DesktopMac';
import GroupIcon from '@material-ui/icons/People';
import PlaylistPlayIcon from '@material-ui/icons/PlaylistPlay';
import LiveHelpIcon from '@material-ui/icons/LiveHelp';
import AddCircleRoundedIcon from '@material-ui/icons/AddCircleRounded';
import CategoryIcon from '@material-ui/icons/Category';
import ExploreRoundedIcon from '@material-ui/icons/ExploreRounded';
import ListIcon from '@material-ui/icons/List';
import PublishIcon from '@material-ui/icons/Publish';
import SchoolIcon from '@material-ui/icons/School';

import {
  Link, Sidebar,
  sidebarConfig,
  SidebarDivider,
  SidebarItem,
  SidebarPage,
  SidebarSpace, useSidebarOpenState
} from '@backstage/core-components';
import { identityApiRef, useApi } from '@backstage/core-plugin-api';
import { BackstageTheme } from '@backstage/theme';
import Typography from '@material-ui/core/Typography';
import { AccountBox, Deck, FileCopyOutlined } from '@material-ui/icons';
import classnames from 'classnames';
import { Helmet } from 'react-helmet';
import { GithubApiRef } from '../../customApis/api';
import getUserDetails from '../../hooks/getUserDetails';
import longLogoIcon from './images/LogoFull.png';
import shortLogoIcon from './images/LogoIcon.png';

const useStyles = makeStyles<BackstageTheme>(
  theme => {
    const { drawerWidthClosed, drawerWidthOpen } = sidebarConfig;
    return {
      root: {
        color: theme.palette.navigation.color,
        display: 'flex',
        flexFlow: 'row nowrap',
        alignItems: 'center',
        height: 18,
        cursor: 'pointer',
        justifyContent: 'center',
      },
      closed: {
        width: drawerWidthClosed,
        justifyContent: 'center',
      },
      open: {
        [theme.breakpoints.up('sm')]: {
          width: drawerWidthOpen,
        },
      },
    };
  },
  { name: 'BackstageSidebarItem' },
);

import { GLOSSARY } from '../../constants/featureFlags';
import { ReleaseData } from '../../customApis/api/ProviderInterface';
import { isFeatureAvailable } from '../../hooks/featureCheck/isFeatureAvailable';

const useSidebarLogoStyles = makeStyles({
  root: {
    width: sidebarConfig.drawerWidthClosed,
    height: 3 * sidebarConfig.logoHeight,
    display: 'flex',
    flexFlow: 'row nowrap',
    alignItems: 'center',
    marginBottom: -14,
  },
  link: {
    width: sidebarConfig.drawerWidthClosed,
    marginLeft: 20,
  },
});

const SidebarLogo = () => {
  const classes = useSidebarLogoStyles();
  const { isOpen } = useSidebarOpenState();

  return (
    <div className={classes.root}>
      <Link to="/" underline="none" className={classes.link} aria-label="Home">
        {/* {isOpen ? <LogoFull /> : <LogoIcon />} */}
        {isOpen ? (
          <img src={longLogoIcon} height="50px" width="190px" alt="" />
        ) : (
          <img src={shortLogoIcon} height="28px" width="37px" alt="" />
        )}
      </Link>
    </div>
  );
};

const VersionOpenContent = ({ text }: any) => {
  const classes = useStyles();
  return (
    <>
      {text && (
        <Typography variant="subtitle2" className={classes.root}>
          {text}
        </Typography>
      )}
    </>
  );
};

const VersionComponent = () => {
  const [releaseData, setReleaseData] = useState<ReleaseData | null>(null);
  const classes = useStyles();
  const { isOpen } = useSidebarOpenState();
  const providerApi = useApi(GithubApiRef);
  const componentClasses = classnames(
    classes.root,
    isOpen ? classes.open : classes.closed,
  );
  const fetchReleases = async () => {
    const releaseData: any = await providerApi.getLatestProjectRelease();

    if(releaseData) {
      setReleaseData(releaseData)
    } else setReleaseData(null);

  };

  useEffect(() => {
    fetchReleases();
  }, []);
  return (
    <>
      <a
        className={componentClasses}
        href={`${releaseData?.html_url || ""}`}
        target="_blank"
      >
        <VersionOpenContent text={releaseData?.name || 'v1.0.0'} />
      </a>
    </>
  );
};

export const Root = ({ children }: PropsWithChildren<{}>) => {
  const identityApi = useApi(identityApiRef);
  const { profile } = getUserDetails();
  return (
    <>
      <Helmet>
        <script type="text/javascript" src="/nr-browser.js" />
      </Helmet>
      <SidebarPage>
        <Sidebar>
          <SidebarLogo />
          <SidebarSearch />
          <SidebarDivider />
          {/* Global nav, not org-specific */}
          <SidebarItem icon={HomeIcon} to="home" text="Home" />
          <SidebarItem icon={ListIcon} to="catalog" text="Catalog" />
          <SidebarItem
            icon={CategoryIcon}
            to="api-docs"
            text="API Docs"
          />
          <SidebarItem icon={SchoolIcon} to="docs" text="Documentation" />
          <SidebarItem
            icon={ExploreRoundedIcon}
            to="explore"
            text="Explore"
          />
          <SidebarItem
            icon={DesktopMac}
            to="tech-radar"
            text="Radar"
          />
          <SidebarItem
            icon={PublishIcon}
            to="catalog-import"
            text="Register"
          />
          <SidebarItem icon={AddCircleRoundedIcon} to="create" text="Create" />
          <SidebarItem icon={Deck} to="uptl" text="UPTL" />
          <SidebarItem icon={PlaylistPlayIcon} to="playlist" text="Playlists" />

          {isFeatureAvailable(GLOSSARY) && (
            <SidebarItem icon={LibraryAdd} to="glossary" text="Glossary" />
          )}
          <SidebarItem
            icon={FileCopyOutlined}
            to="yaml-helper"
            text="YAML Format"
          />
          <SidebarItem icon={LiveHelpIcon} to="qeta" text="Q&A" />

          <SidebarSpace />
          <SidebarDivider />
          <SidebarItem
            style={{ textTransform: 'capitalize' }}
            icon={AccountBox}
            to={`catalog/default/user/${profile?.email
              ?.split('@')[0]
              .toLowerCase()}`}
            text={profile?.email}
          />
           <MyGroupsSidebarItem
            singularTitle="My Squad"
            pluralTitle="My Squads"
            icon={GroupIcon}
          />
          <SidebarItem
            onClick={() => identityApi.signOut()}
            icon={ExitToApp}
            to="#"
            text="Sign Out"
          />
          <SidebarSettings />
          <VersionComponent />
        </Sidebar>
        {children}
      </SidebarPage>
    </>
  );
};
