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
import { InfoCard } from '@backstage/core-components';
import { EntityApiDefinitionCard } from '@backstage/plugin-api-docs';
import {
  EntityAboutCard,
  EntityLayout,
  EntityOrphanWarning,
  EntityProcessingErrorsPanel,
  EntitySwitch,
  hasCatalogProcessingErrors,
  isComponentType,
  isKind,
  isOrphan,
} from '@backstage/plugin-catalog';
import { EntityCatalogGraphCard } from '@backstage/plugin-catalog-graph';
import { useEntity } from '@backstage/plugin-catalog-react';
import { EntityKafkaContent } from '@backstage/plugin-kafka';
import { EntityKubernetesContent } from '@backstage/plugin-kubernetes';
import { EntityNewRelicDashboardContent } from '@backstage/plugin-newrelic-dashboard';
import {
  EntityGroupProfileCard,
  EntityMembersListCard,
  EntityOwnershipCard,
  EntityUserProfileCard,
} from '@backstage/plugin-org';
import {
  EntityPagerDutyCard,
  isPagerDutyAvailable,
} from '@backstage/plugin-pagerduty';
import { EntityTechdocsContent } from '@backstage/plugin-techdocs';
import { ReportIssue } from '@backstage/plugin-techdocs-module-addons-contrib';
import { TechDocsAddons } from '@backstage/plugin-techdocs-react';
import {
  EntityGitlabContent,
  isGitlabAvailable,
} from '@internal/backstage-plugin-gitlab';
import { Grid } from '@material-ui/core';
import Alert from '@material-ui/lab/Alert';
import React, { ReactNode, useMemo, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { isArchitectureDiagramAvailable } from '../../helpers/isArchitectureDiagramAvailable';
import {
  isKafkaFeatureAvailable,
  isKubernetesFeatureAvailable,
  isNewRelicFeatureAvailable,
} from '../../hooks/featureCheck';
import {
  EntityConsumedApisCard,
  EntityConsumingComponentsCard,
  EntityHasApisCard,
  EntityProvidedApisCard,
  EntityProvidingComponentsCard,
} from './../api-docs';
import { ArchitectureDiagram } from './Architecture';
import {
  EntityDependsOnComponentsCard,
  EntityDependsOnResourcesCard,
  EntityHasComponentsCard,
  EntityHasResourcesCard,
  EntityHasSubcomponentsCard,
  EntityHasSystemsCard,
} from './index';
import { Content as NewLinksCardContent } from './NewEntityLinksCard';
import { EntityLinksEmptyState } from './NewEntityLinksCard/EntityLinksEmptyState';
import { EntityPlaylistDialog } from '@backstage/plugin-playlist';
import PlaylistAddIcon from '@material-ui/icons/PlaylistAdd';
import { EntityTodoContent } from '@backstage/plugin-todo';
import { EntityAdrContent, isAdrAvailable } from '@backstage/plugin-adr';
import {
  EntityGithubActionsContent,
  // isGithubActionsAvailable,
} from '@backstage/plugin-github-actions';
import { EntityGithubInsightsContent } from '@roadiehq/backstage-plugin-github-insights';
import { EntityGithubPullRequestsContent } from '@roadiehq/backstage-plugin-github-pull-requests';
import { EntitySecurityInsightsContent } from '@roadiehq/backstage-plugin-security-insights';
// To-Do : GitHub Pull Request Board for Enterprises using GitHub Corporate
// import { EntityTeamPullRequestsCard, EntityTeamPullRequestsContent } from '@backstage/plugin-github-pull-requests-board';

const EntityLayoutWrapper = (props: { children?: ReactNode }) => {
  const [playlistDialogOpen, setPlaylistDialogOpen] = useState(false);

  const extraMenuItems = useMemo(() => {
    return [
      {
        title: 'Add to playlist',
        Icon: PlaylistAddIcon,
        onClick: () => setPlaylistDialogOpen(true),
      },
    ];
  }, []);

  return (
    <>
      <EntityLayout UNSTABLE_extraContextMenuItems={extraMenuItems}>
        {props.children}
      </EntityLayout>
      <EntityPlaylistDialog
        open={playlistDialogOpen}
        onClose={() => setPlaylistDialogOpen(false)}
      />
    </>
  );
};

const techdocsContent = (
  <EntityTechdocsContent>
    <TechDocsAddons>
      <ReportIssue />
    </TechDocsAddons>
  </EntityTechdocsContent>
);

const EntityLinksCard = () => {
  const [links, setLinks] = useState<any | undefined>([]);
  const { entity } = useEntity();
  useEffect(() => setLinks(entity?.metadata?.links), [entity]);
  return (
    <Grid item xs={12} md={6}>
      <InfoCard title="Links" variant="gridItem">
        {!links || links.length === 0 ? (
          <EntityLinksEmptyState />
        ) : (
          <NewLinksCardContent tools={links} />
        )}
      </InfoCard>
    </Grid>
  );
};
const entityWarningContent = (
  <>
    <EntitySwitch>
      <EntitySwitch.Case if={isOrphan}>
        <Grid item xs={12}>
          <EntityOrphanWarning />
        </Grid>
      </EntitySwitch.Case>
    </EntitySwitch>

    <EntitySwitch>
      <EntitySwitch.Case if={hasCatalogProcessingErrors}>
        <Grid item xs={12}>
          <EntityProcessingErrorsPanel />
        </Grid>
      </EntitySwitch.Case>
    </EntitySwitch>
  </>
);

const overviewContent = (
  <Grid container spacing={3} alignItems="stretch">
    {entityWarningContent}
    <Grid item md={6}>
      <EntityAboutCard variant="gridItem" />
    </Grid>
    <EntityLinksCard />
    <Grid item md={12}>
      <EntityDependsOnComponentsCard variant="gridItem" />
    </Grid>
    <Grid item md={12}>
      <EntityDependsOnResourcesCard variant="gridItem" />
    </Grid>
    <Grid item xs={12}>
      <EntityHasSubcomponentsCard variant="gridItem" />
    </Grid>

    <EntitySwitch>
      <EntitySwitch.Case if={isPagerDutyAvailable}>
        <Grid item md={6}>
          <EntityPagerDutyCard />
        </Grid>
      </EntitySwitch.Case>
    </EntitySwitch>
  </Grid>
);

const componentCommon = (
  <>
    <EntityLayout.Route path="/" title="Overview">
      {overviewContent}
    </EntityLayout.Route>

    <EntityLayout.Route path="/docs" title="Docs">
      {techdocsContent}
    </EntityLayout.Route>

    <EntityLayout.Route
      path="/Architecture"
      title="Architecture"
      if={isArchitectureDiagramAvailable}
    >
      <ArchitectureDiagram />
    </EntityLayout.Route>

    <EntityLayout.Route path="/dependencies" title="Dependencies">
      <Grid>
        <EntityCatalogGraphCard variant="gridItem" height={400} />
      </Grid>
    </EntityLayout.Route>

    <EntityLayout.Route if={isGitlabAvailable} path="/gitlab" title="GitLab">
      <EntityGitlabContent />
    </EntityLayout.Route>

    <EntityLayout.Route path="/todo" title="To Do">
      <EntityTodoContent />
    </EntityLayout.Route>

    <EntityLayout.Route
      if={isNewRelicFeatureAvailable}
      path="/new-relic-dashboard"
      title="New Relic Dashboard"
    >
      <EntityNewRelicDashboardContent />
    </EntityLayout.Route>
  </>
);

const serviceEntityPage = (
  <EntityLayoutWrapper>
    <EntityLayout.Route path="/" title="Overview">
      {overviewContent}
    </EntityLayout.Route>

    <EntityLayout.Route path="/docs" title="Docs">
      {techdocsContent}
    </EntityLayout.Route>

    <EntityLayout.Route if={isAdrAvailable} path="/adrs" title="ADRs">
      <EntityAdrContent />
    </EntityLayout.Route>

    <EntityLayout.Route
      path="/Architecture"
      title="Architecture"
      if={isArchitectureDiagramAvailable}
    >
      <ArchitectureDiagram />
    </EntityLayout.Route>

    <EntityLayout.Route path="/github-actions" title="GitHub Actions">
      <EntityGithubActionsContent />
    </EntityLayout.Route>

    <EntityLayout.Route
      path="/code-insights"
      title="GitHub Insights">
      <EntityGithubInsightsContent />
    </EntityLayout.Route>

    <EntityLayout.Route path="/pull-requests" title="Pull Requests">
      <EntityGithubPullRequestsContent />
    </EntityLayout.Route>

    <EntityLayout.Route
      path="/security-insights"
      title="Security Insights">
      <EntitySecurityInsightsContent />
    </EntityLayout.Route>

    <EntityLayout.Route path="/dependencies" title="Dependencies">
      <Grid>
        <EntityCatalogGraphCard variant="gridItem" height={400} />
      </Grid>
    </EntityLayout.Route>

    <EntityLayout.Route path="/todo" title="To Do">
      <EntityTodoContent />
    </EntityLayout.Route>

    <EntityLayout.Route
      if={isNewRelicFeatureAvailable}
      path="/new-relic-dashboard"
      title="New Relic Dashboard"
    >
      <EntityNewRelicDashboardContent />

    </EntityLayout.Route>

    <EntityLayout.Route path="/api" title="API">
      <Grid container spacing={3} alignItems="stretch">
        <EntityProvidedApisCard />
        <EntityConsumedApisCard />
      </Grid>
    </EntityLayout.Route>

    <EntityLayout.Route
      if={isKubernetesFeatureAvailable}
      path="/kubernetes"
      title="Kubernetes"
    >
      <EntityKubernetesContent />
    </EntityLayout.Route>

    <EntityLayout.Route
      if={isKafkaFeatureAvailable}
      path="/kafka"
      title="Kafka"
    >
      <EntityKafkaContent />
    </EntityLayout.Route>
  </EntityLayoutWrapper>
);

const commonEntityPage = <EntityLayoutWrapper>{componentCommon}</EntityLayoutWrapper>;

const defaultEntityPage = (
  <EntityLayoutWrapper>
    <EntityLayout.Route path="/" title="Portal Blocked!">
      <Grid item xs={12}>
        <Link to="/docs/default/component/engineering-portal/adrs/0001-supported-spec-types-for-component-descriptors/">
          <Alert severity="warning">
            The declared component type is not supported in Engineering Portal.
            Please view the ADR for more information.
          </Alert>
        </Link>
      </Grid>
    </EntityLayout.Route>
  </EntityLayoutWrapper>
);

const componentPage = (
  <EntitySwitch>
    <EntitySwitch.Case if={isComponentType('service')}>
      {serviceEntityPage}
    </EntitySwitch.Case>

    <EntitySwitch.Case if={isComponentType('website')}>
      {commonEntityPage}
    </EntitySwitch.Case>

    <EntitySwitch.Case if={isComponentType('library')}>
      {commonEntityPage}
    </EntitySwitch.Case>

    <EntitySwitch.Case if={isComponentType('application')}>
      {commonEntityPage}
    </EntitySwitch.Case>

    <EntitySwitch.Case if={isComponentType('deployment')}>
      {commonEntityPage}
    </EntitySwitch.Case>

    <EntitySwitch.Case if={isComponentType('terraform-module')}>
      {commonEntityPage}
    </EntitySwitch.Case>

    <EntitySwitch.Case if={isComponentType('container')}>
      {commonEntityPage}
    </EntitySwitch.Case>

    <EntitySwitch.Case if={isComponentType('kubernetes')}>
      {commonEntityPage}
    </EntitySwitch.Case>

    <EntitySwitch.Case if={isComponentType('helm-chart')}>
      {commonEntityPage}
    </EntitySwitch.Case>

    <EntitySwitch.Case if={isComponentType('alerts')}>
      {commonEntityPage}
    </EntitySwitch.Case>

    <EntitySwitch.Case if={isComponentType('kafka')}>
      {commonEntityPage}
    </EntitySwitch.Case>

    <EntitySwitch.Case if={isComponentType('infrastructure')}>
      {commonEntityPage}
    </EntitySwitch.Case>

    <EntitySwitch.Case if={isComponentType('database')}>
      {commonEntityPage}
    </EntitySwitch.Case>

    <EntitySwitch.Case if={isComponentType('lambda')}>
      {commonEntityPage}
    </EntitySwitch.Case>

    <EntitySwitch.Case if={isComponentType('step-function')}>
      {commonEntityPage}
    </EntitySwitch.Case>

    <EntitySwitch.Case if={isComponentType('product')}>
      {commonEntityPage}
    </EntitySwitch.Case>

    <EntitySwitch.Case>{defaultEntityPage}</EntitySwitch.Case>
  </EntitySwitch>
);

const apiPage = (
  <EntityLayoutWrapper>
    <EntityLayout.Route path="/" title="Overview">
      <Grid container spacing={3}>
        {entityWarningContent}
        <Grid item md={6}>
          <EntityAboutCard variant="gridItem" />
        </Grid>

        <EntityLinksCard />

        <Grid item xs={12}>
          <EntityProvidingComponentsCard />
        </Grid>

        <Grid item xs={12}>
          <EntityConsumingComponentsCard />
        </Grid>
      </Grid>
    </EntityLayout.Route>

    <EntityLayout.Route path="/definition" title="Definition">
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <EntityApiDefinitionCard />
        </Grid>
      </Grid>
    </EntityLayout.Route>
    <EntityLayout.Route path="/dependencies" title="Dependencies">
      <Grid>
        <EntityCatalogGraphCard variant="gridItem" height={400} />
      </Grid>
    </EntityLayout.Route>
    <EntityLayout.Route
      if={isNewRelicFeatureAvailable}
      path="/new-relic-dashboard"
      title="New Relic Dashboard"
    >
      <EntityNewRelicDashboardContent />
    </EntityLayout.Route>
  </EntityLayoutWrapper>
);

const userPage = (
  <EntityLayoutWrapper>
    <EntityLayout.Route path="/" title="Overview">
      <Grid container spacing={3}>
        {entityWarningContent}
        <Grid item xs={12} md={6}>
          <EntityUserProfileCard variant="gridItem" />
        </Grid>
        <Grid item xs={12} md={6}>
          <EntityOwnershipCard variant="gridItem" />
        </Grid>
      </Grid>
    </EntityLayout.Route>
    <EntityLayout.Route path="/dependencies" title="dependencies">
      <Grid>
        <EntityCatalogGraphCard variant="gridItem" height={400} />
      </Grid>
    </EntityLayout.Route>
  </EntityLayoutWrapper>
);

const groupPage = (
  <EntityLayoutWrapper>
    <EntityLayout.Route path="/" title="Overview">
      <Grid container spacing={3}>
        {entityWarningContent}
        <Grid item xs={12} md={6}>
          <EntityGroupProfileCard variant="gridItem" />
        </Grid>
        <Grid item xs={12} md={6}>
          <EntityOwnershipCard variant="gridItem" />
        </Grid>
        <Grid item xs={12}>
          <EntityMembersListCard />
        </Grid>
        {/* <Grid item xs={12}>
          <EntityTeamPullRequestsCard />
        </Grid> */}
        <EntityLinksCard />
      </Grid>
    </EntityLayout.Route>
    <EntityLayout.Route path="/diagram" title="Diagram">
      <Grid>
        <EntityCatalogGraphCard variant="gridItem" height={400} />
      </Grid>
    </EntityLayout.Route>
    {/* <EntityLayout.Route path="/glossary" title="Glossary">
      <EntityGlossaryContent />
    </EntityLayout.Route> */}
    {/* <EntityLayout.Route path="/pull-requests" title="Pull Requests">
            <EntityTeamPullRequestsContent />
        </EntityLayout.Route> */}
  </EntityLayoutWrapper>
);

const systemPage = (
  <EntityLayoutWrapper>
    <EntityLayout.Route path="/" title="Overview">
      <Grid container spacing={3} alignItems="stretch">
        {entityWarningContent}
        <Grid item md={6}>
          <EntityAboutCard variant="gridItem" />
        </Grid>
        <EntityLinksCard />
        <Grid item md={12}>
          <EntityHasComponentsCard variant="gridItem" />
        </Grid>
        <Grid item md={12}>
          <EntityHasResourcesCard variant="gridItem" />
        </Grid>
        <Grid item md={12}>
          <EntityHasApisCard variant="gridItem" />
        </Grid>
      </Grid>
    </EntityLayout.Route>
    <EntityLayout.Route path="/dependencies" title="Dependencies">
      <Grid>
        <EntityCatalogGraphCard variant="gridItem" height={400} />
      </Grid>
    </EntityLayout.Route>
    <EntityLayout.Route
      if={isNewRelicFeatureAvailable}
      path="/new-relic-dashboard"
      title="New Relic Dashboard"
    >
      <EntityNewRelicDashboardContent />
    </EntityLayout.Route>
    <EntityLayout.Route
      path="/ArchiMate"
      title="Architecture"
      if={isArchitectureDiagramAvailable}
    >
      <ArchitectureDiagram />
    </EntityLayout.Route>
  </EntityLayoutWrapper>
);

const domainPage = (
  <EntityLayoutWrapper>
    <EntityLayout.Route path="/" title="Overview">
      <Grid container spacing={3} alignItems="stretch">
        {entityWarningContent}
        <Grid item md={6}>
          <EntityAboutCard variant="gridItem" />
        </Grid>
        <EntityLinksCard />
        <Grid item xs={12}>
          <EntityHasSystemsCard variant="gridItem" />
        </Grid>
      </Grid>
    </EntityLayout.Route>
    <EntityLayout.Route path="/dependencies" title="Dependencies">
      <Grid>
        <EntityCatalogGraphCard variant="gridItem" height={400} />
      </Grid>
    </EntityLayout.Route>
    <EntityLayout.Route
      if={isNewRelicFeatureAvailable}
      path="/new-relic-dashboard"
      title="New Relic Dashboard"
    >
      <EntityNewRelicDashboardContent />
    </EntityLayout.Route>
    <EntityLayout.Route
      path="/ArchiMate"
      title="Architecture"
      if={isArchitectureDiagramAvailable}
    >
      <ArchitectureDiagram />
    </EntityLayout.Route>
  </EntityLayoutWrapper>
);

export const entityPage = (
  <>
    <EntitySwitch>
      <EntitySwitch.Case if={isKind('component')} children={componentPage} />
      <EntitySwitch.Case if={isKind('api')} children={apiPage} />
      <EntitySwitch.Case if={isKind('group')} children={groupPage} />
      <EntitySwitch.Case if={isKind('user')} children={userPage} />
      <EntitySwitch.Case if={isKind('system')} children={systemPage} />
      <EntitySwitch.Case if={isKind('domain')} children={domainPage} />
      <EntitySwitch.Case>{commonEntityPage}</EntitySwitch.Case>
    </EntitySwitch>
  </>
);
