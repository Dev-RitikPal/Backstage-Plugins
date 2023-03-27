import { createApiRef } from '@backstage/core-plugin-api';
import {
  ContributorData,
  IssueObject,
  MergeRequest,
  PipelineObject,
  ProjectData,
} from '../components/types';

export interface PipelineSummary {
  getPipelinesData: PipelineObject[];
}

export interface ProjectSummary {
  getProjectsList: ProjectData[];
}

export interface ContributorsSummary {
  getContributorsData: ContributorData[];
}

export interface MergeRequestsSummary {
  getMergeRequestsData: MergeRequest[];
}

export interface MergeRequestsStatusSummary {
  getMergeRequestsStatusData: MergeRequest[];
}

export interface LanguagesSummary {
  getLanguagesData: any;
}

export interface IssuesSummary {
  getIssuesData: IssueObject[];
}

export const GitlabCIApiRef = createApiRef<GitlabCIApi>({
  id: 'plugin.gitlabci.service',
});

export type GitlabCIApi = {
  getPipelineSummary(projectID: string): Promise<PipelineSummary | undefined>;
  getContributorsSummary(
    projectID: string,
  ): Promise<ContributorsSummary | undefined>;
  getMergeRequestsSummary(
    projectID: string,
  ): Promise<MergeRequestsSummary | undefined>;
  getMergeRequestsStatusSummary(
    projectID: string,
    count: number,
  ): Promise<MergeRequestsStatusSummary | undefined>;
  getProjectName(projectID: string): Promise<string | undefined>;
  getLanguagesSummary(projectID: string): Promise<LanguagesSummary | undefined>;
  retryPipelineBuild(
    projectID: string,
    pipelineID: string,
  ): Promise<Object | undefined>;
  getProjectDetails(projectSlug: string): Promise<Object | undefined>;
  getIssuesSummary(projectID: string): Promise<IssuesSummary | undefined>;
  getUserAllMergeRequest(
    options: {
      token: string;
    } | null,
  ): Promise<MergeRequestsSummary | undefined>;
  getUserProjects(
    token: string,
    options?: {},
  ): Promise<ProjectSummary | undefined>;
  getUserProjectPipelines(
    projectId: string,
    token: string,
    options?: {},
  ): Promise<PipelineSummary | undefined>;
};
