import React from 'react';
import { Navigate, Route } from 'react-router';
import { apiDocsPlugin, ApiExplorerPage } from '@backstage/plugin-api-docs';
import {
  CatalogEntityPage,
  CatalogIndexPage,
  catalogPlugin,
} from '@backstage/plugin-catalog';
import {
  CatalogImportPage,
  catalogImportPlugin,
} from '@backstage/plugin-catalog-import';
import {
  CatalogGraphPage,
  catalogGraphPlugin,
} from '@backstage/plugin-catalog-graph';
import { ScaffolderFieldExtensions, scaffolderPlugin, NextScaffolderPage } from '@backstage/plugin-scaffolder/alpha';
import { SearchPage } from '@backstage/plugin-search';
import { searchPage } from './components/search/SearchPage';
import { TechRadarPage } from '@backstage/plugin-tech-radar';
import {
  DefaultTechDocsHome,
  TechDocsIndexPage,
  techdocsPlugin,
  TechDocsReaderPage,
} from '@backstage/plugin-techdocs';
import { TechDocsAddons } from '@backstage/plugin-techdocs-react';
import {
  ReportIssue,
  TextSize,
  ExpandableNavigation,
} from '@backstage/plugin-techdocs-module-addons-contrib';
import { UserSettingsPage } from '@backstage/plugin-user-settings';
import { apis } from './apis';
import { entityPage } from './components/catalog/EntityPage';
import { Root } from './components/Root';
import { AlertDisplay, OAuthRequestDialog } from '@backstage/core-components';
import { FlatRoutes } from '@backstage/core-app-api';
import { createApp } from '@backstage/app-defaults';
import { SignInPage } from './components/CustomSignInPage/SignInPage';
import { ExplorePage, explorePlugin } from '@backstage/plugin-explore';
import UserDetails from './UserDetails';
import { Templates } from './components/home/Templates';
import {
  CustomEntityPickerExtension,
  AWSTagPickerExtension,
} from './scaffolder/MyCustomExtension';
import { YamlWizard } from './components/home/YamlWizard';
import YamlHelper from './components/YamlHelper';
import { PortalReports } from './components/home/PortalReports';
import { getProviders } from './helpers/authProviders';
import { darkTheme, lightTheme } from './themes';
import { orgPlugin } from '@backstage/plugin-org';
import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import { HomepageCompositionRoot } from '@backstage/plugin-home';
import { HomePage } from './components/home/HomePage';
import { HelloWorldPage } from '@internal/plugin-hello-world';
import { EntityGlossaryPage } from '@internal/plugin-glossary';
import SlackIcon from './icons/SlackIcon';
import GitlabIcon from './icons/GitLabIcon';
import ConfluenceIcon from './icons/ConfluenceIcon';
import JiraIcon from './icons/JiraIcon';
import SplunkIcon from './icons/SplunkIcon';
import BackstageIcon from './icons/BackstageIcon';
import ArchimateIcon from './icons/ArchimateIcon';
import OktaIcon from './icons/OktaIcon';
import MuralIcon from './icons/MuralIcon';
import SplunkOrgIcon from './icons/SplunkOrgIcon';
import NewRelicIcon from './icons/NewRelicIcon';
import { GrpcPlaygroundPage } from 'backstage-grpc-playground';
import { UptlPage } from './components/Uptl';
import { PlaylistIndexPage } from '@backstage/plugin-playlist';
import { AnnouncementsPage } from '@k-phoen/backstage-plugin-announcements';
import { rearPortalTheme } from './components/customTheme/rearPortalTheme';
import { jioTheme } from './components/customTheme/jioTheme';
import { mckinseyTheme } from './components/customTheme/mcKinseyTheme';
import { QetaPage } from '@drodil/backstage-plugin-qeta';
import { ServiceRequestPage } from '@internal/plugin-service-request';
import WbIncandescentIcon from '@material-ui/icons/WbIncandescent';
import Brightness4SharpIcon from '@material-ui/icons/Brightness4Sharp';
import JioIcon from './icons/JioIcon';
import MckinseyIcon from './icons/Mckinsey';
import { ToolkitPage } from '@internal/plugin-toolkit';
import { OnboardingPage } from '@internal/plugin-onboarding';
import { ContextApiPocPage } from '@internal/plugin-context-api-poc';

const app = createApp({
  apis,
  icons: {
    // Custom icons
    slack: SlackIcon,
    gitlab: GitlabIcon,
    confluence: ConfluenceIcon,
    jira: JiraIcon,
    splunk: SplunkIcon,
    backstage: BackstageIcon,
    archimate: ArchimateIcon,
    okta: OktaIcon,
    mural: MuralIcon,
    splunkOriginal: SplunkOrgIcon,
    newRelic: NewRelicIcon,
  },
  themes: [
    {
      id: 'light-theme',
      title: 'Light Theme',
      variant: 'light',
      icon: <WbIncandescentIcon/>,
      Provider: ({ children }) => (
        <ThemeProvider theme={lightTheme}>
          <CssBaseline>{children}</CssBaseline>
        </ThemeProvider>
      ),
    },
    {
      id: 'dark-theme',
      title: 'Dark Theme',
      variant: 'dark',
      icon: <Brightness4SharpIcon/>,
      Provider: ({ children }) => (
        <ThemeProvider theme={darkTheme}>
          <CssBaseline>{children}</CssBaseline>
        </ThemeProvider>
      ),
    },
    {
      id: 'rearportal',
      title: 'RearPortal',
      variant: 'light',
      Provider: ({ children }) => (
        <ThemeProvider theme={rearPortalTheme}>
          <CssBaseline>{children}</CssBaseline>
        </ThemeProvider>
      ),
    },
    {
      id: 'mckinsey',
      title: 'McKinsey',
      variant: 'light',
      icon: <MckinseyIcon/>,
      Provider: ({ children }) => (
        <ThemeProvider theme={mckinseyTheme}>
          <CssBaseline>{children}</CssBaseline>
        </ThemeProvider>
      ),
    },
    {
      id: 'jio',
      title: 'Jio',
      variant: 'light',
      icon: <JioIcon/>,
      Provider: ({ children }) => (
        <ThemeProvider theme={jioTheme}>
          <CssBaseline>{children}</CssBaseline>
        </ThemeProvider>
      ),
    },
  ],
  components: {
    SignInPage: props => (
      <SignInPage {...props} align="center" providers={[...getProviders()]} />
    ),
  },
  bindRoutes({ bind }) {
    bind(explorePlugin.externalRoutes, {
      catalogEntity: catalogPlugin.routes.catalogEntity,
    });
    bind(catalogPlugin.externalRoutes, {
      createComponent: scaffolderPlugin.routes.root,
      viewTechDoc: techdocsPlugin.routes.docRoot,
    });
    bind(apiDocsPlugin.externalRoutes, {
      registerApi: catalogImportPlugin.routes.importPage,
    });
    bind(scaffolderPlugin.externalRoutes, {
      registerComponent: catalogImportPlugin.routes.importPage,
    });
    bind(catalogGraphPlugin.externalRoutes, {
      catalogEntity: catalogPlugin.routes.catalogEntity,
    });
    bind(orgPlugin.externalRoutes, {
      catalogIndex: catalogPlugin.routes.catalogIndex,
    });
  },
});

const AppProvider = app.getProvider();
const AppRouter = app.getRouter();

const routes = (
  <FlatRoutes>
    <Navigate key="/" to="home" />
    <Route path="/catalog" element={<CatalogIndexPage />} />
    <Route
      path="/catalog/:namespace/:kind/:name"
      element={<CatalogEntityPage />}
    >
      {entityPage}
    </Route>
    <Route path="/home" element={<HomepageCompositionRoot />}>
      <HomePage />
    </Route>
    <Route path="/docs" element={<TechDocsIndexPage />}>
      <DefaultTechDocsHome />
    </Route>
    <Route path="/Templates" element={<Templates />} />
    <Route
      path="/docs/:namespace/:kind/:name/*"
      element={<TechDocsReaderPage />}
    >
      <TechDocsAddons>
        <ReportIssue />
        <ExpandableNavigation />
        <TextSize />
      </TechDocsAddons>
    </Route>

    <Route path="/playlist" element={<PlaylistIndexPage />} />

    <Route
      path="/create"
      element={
        <NextScaffolderPage
          groups={[
            {
              title: 'Golden Path',
              filter: entity =>
                entity?.metadata?.tags?.includes('product') ?? false,
            },
            {
              title: 'Recommended',
              filter: entity =>
                entity?.metadata?.tags?.includes('recommended') ?? false,
            },
            {
              title: 'Backstage Descriptors',
              filter: entity =>
                entity?.spec?.type == 'backstage-catalog' ?? false,
            },
          ]}
        />
      }
    >
      <ScaffolderFieldExtensions>
        <CustomEntityPickerExtension />
        <AWSTagPickerExtension />
      </ScaffolderFieldExtensions>
    </Route>

    {/* <Route path="/create/next" element={<NextScaffolderPage
        groups={[
          {
            title: "Products",
            filter: entity =>
              entity?.metadata?.tags?.includes('product') ?? false,
          },
          {
            title: "Backstage Descriptors",
            filter: entity =>
              entity?.spec?.type == 'backstage-catalog' ?? false,
          },
        ]}
      />}
    >

      <ScaffolderFieldExtensions>
        <CustomEntityPickerExtension />
        <AWSTagPickerExtension />
      </ScaffolderFieldExtensions>

    </Route> */}

    <Route path="/api-docs" element={<ApiExplorerPage />} />
    <Route path="/uptl" element={<UptlPage />}>
      {/* <HomePage /> */}
    </Route>
    <Route
      path="/tech-radar"
      element={
        <TechRadarPage
          width={1125}
          height={600}
          title="Enterprise X Technology Radar"
          pageTitle="Business Divison Y"
          subtitle="Landscape of Technologies driving our Future of Innovation"
        />
      }
    />
    <Route path="/explore" element={<ExplorePage />} />
    <Route path="/catalog-import" element={<CatalogImportPage />} />
    <Route path="/search" element={<SearchPage />}>
      {searchPage}
    </Route>
    <Route path="/settings" element={<UserSettingsPage />} />
    {/* <Route path="/newrelic" element={<NewRelicPage />} /> */}
    <Route path="/yaml-wizard" element={<YamlWizard />} />
    <Route path="/yaml-helper" element={<YamlHelper />} />
    <Route
      path="/catalog-graph"
      element={<CatalogGraphPage initialState={{ maxDepth: 1 }} />}
    />
    <Route path="/portal-nr-reports" element={<PortalReports />} />
    <Route path="/hello-world" element={<HelloWorldPage />} />
    <Route path="/glossary" element={<EntityGlossaryPage />} />
    <Route path="/grpc-playground" element={<GrpcPlaygroundPage />} />
    <Route path="/announcements" element={<AnnouncementsPage />} />
    <Route path="/toolkit" element={<ToolkitPage />} />
    <Route path="/service-request" element={<ServiceRequestPage />}/>
    <Route path="/onboarding" element={<OnboardingPage />} />
    <Route path="/qeta" element={<QetaPage title="Questions" />} />
    <Route path="/context-api-poc" element={<ContextApiPocPage />} />
  </FlatRoutes>
);

const App = () => (
  <AppProvider>
    <AlertDisplay />
    <OAuthRequestDialog />
    <AppRouter>
      <Root>
        <UserDetails />
        {routes}
      </Root>
    </AppRouter>
  </AppProvider>
);
export default App;
