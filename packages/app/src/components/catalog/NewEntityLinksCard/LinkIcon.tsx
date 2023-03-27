import React from 'react';
import { makeStyles } from '@material-ui/core';
import jira from '../NewEntityLinksCard/Logos/jira.png';
import archimate from '../NewEntityLinksCard/Logos/archimate.png';
import okta from '../NewEntityLinksCard/Logos/okta.png';
import confluence from '../NewEntityLinksCard/Logos/confluence.png';
import gitlab from '../NewEntityLinksCard/Logos/gitlab.png';
import mural from '../NewEntityLinksCard/Logos/mural.png';
import newRelic from '../NewEntityLinksCard/Logos/new-relic.png';
import slack from '../NewEntityLinksCard/Logos/slack.png';
import nexus from '../NewEntityLinksCard/Logos/nexus.png';
import splunk from '../NewEntityLinksCard/Logos/splunk.png';

// Default Icons
import MuiApartmentIcon from '@material-ui/icons/Apartment';
// import MuiBrokenImageIcon from '@material-ui/icons/BrokenImage';
import MuiCategoryIcon from '@material-ui/icons/Category';
import MuiCreateNewFolderIcon from '@material-ui/icons/CreateNewFolder';
import MuiSubjectIcon from '@material-ui/icons/Subject';
import MuiSearchIcon from '@material-ui/icons/Search';
import MuiChatIcon from '@material-ui/icons/Chat';
import MuiDashboardIcon from '@material-ui/icons/Dashboard';
// import MuiDocsIcon from '@material-ui/icons/Description';
import MuiEmailIcon from '@material-ui/icons/Email';
import MuiExtensionIcon from '@material-ui/icons/Extension';
import MuiGitHubIcon from '@material-ui/icons/GitHub';
import MuiHelpIcon from '@material-ui/icons/Help';
import MuiLocationOnIcon from '@material-ui/icons/LocationOn';
import MuiMemoryIcon from '@material-ui/icons/Memory';
import MuiMenuBookIcon from '@material-ui/icons/MenuBook';
import MuiPeopleIcon from '@material-ui/icons/People';
import MuiPersonIcon from '@material-ui/icons/Person';
import MuiWarningIcon from '@material-ui/icons/Warning';
import LanguageIcon from '@material-ui/icons/Language';

const useStyles = makeStyles(() => ({
  icon: {
    width: '40px',
    height: '40px',
  },
}));

interface IconProps {
  icon: string;
}

export function LinkIcon({ icon }: IconProps) {
  const classes = useStyles();

  switch (icon.trim().toLowerCase()) {
    case 'jira':
      return <img src={jira} alt={icon} className={classes.icon} />;
    case 'slack':
      return <img src={slack} alt={icon} className={classes.icon} />;
    case 'gitlab':
      return <img src={gitlab} alt={icon} className={classes.icon} />;
    case 'okta':
      return <img src={okta} alt={icon} className={classes.icon} />;
    case 'confluence':
      return <img src={confluence} alt={icon} className={classes.icon} />;
    case 'splunk':
      return <img src={splunk} alt={icon} className={classes.icon} />;
    case 'archimate':
      return <img src={archimate} alt={icon} className={classes.icon} />;
    case 'mural':
      return <img src={mural} alt={icon} className={classes.icon} />;
    case 'new-relic':
      return <img src={newRelic} alt={icon} className={classes.icon} />;
    case 'nexus':
      return <img src={nexus} alt={icon} className={classes.icon} />;
    case 'search':
      return <MuiSearchIcon fontSize="large" />;
    case 'chat':
      return <MuiChatIcon fontSize="large" />;
    case 'dashboard':
      return <MuiDashboardIcon fontSize="large" />;
    case 'email':
      return <MuiEmailIcon fontSize="large" />;
    case 'catalog':
      return <MuiMenuBookIcon fontSize="large" />;
    case 'docs' || 'techdocs':
      return <MuiSubjectIcon fontSize="large" />;
    case 'template' || 'scaffolder':
      return <MuiCreateNewFolderIcon fontSize="large" />;
    case 'github':
      return <MuiGitHubIcon fontSize="large" />;
    case 'group':
      return <MuiPeopleIcon fontSize="large" />;
    case 'help':
      return <MuiHelpIcon fontSize="large" />;
    case 'kind:api':
      return <MuiExtensionIcon fontSize="large" />;
    case 'kind:component':
      return <MuiMemoryIcon fontSize="large" />;
    case 'kind:domain':
      return <MuiApartmentIcon fontSize="large" />;
    case 'kind:group':
      return <MuiPeopleIcon fontSize="large" />;
    case 'kind:location':
      return <MuiLocationOnIcon fontSize="large" />;
    case 'kind:system':
      return <MuiCategoryIcon fontSize="large" />;
    case 'kind:user' || 'user':
      return <MuiPersonIcon fontSize="large" />;
    case 'warning':
      return <MuiWarningIcon fontSize="large" />;
    case 'backstage':
      return (
        <img
          src="https://backstage.io/logo_assets/svg/Icon_Gradient.svg"
          alt={icon}
          className={classes.icon}
        />
      );

    default:
      return <LanguageIcon fontSize="large" />;
  }
}
