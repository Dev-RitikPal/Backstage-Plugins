import { DiscoveryApi } from '@backstage/core-plugin-api';
import {
  ContributorData,
  MergeRequest,
  PipelineObject,
} from '../components/types';
import { IssueObject, ProjectData } from './../components/types';
import {
  ContributorsSummary,
  GitlabCIApi,
  IssuesSummary,
  LanguagesSummary,
  MergeRequestsStatusSummary,
  MergeRequestsSummary,
  PipelineSummary,
} from './GitlabCIApi';

export class GitlabCIClient implements GitlabCIApi {
  discoveryApi: DiscoveryApi;
  baseUrl: string;
  constructor({
    discoveryApi,
    baseUrl = 'https://gitlab.com/',
  }: {
    discoveryApi: DiscoveryApi;
    baseUrl?: string;
  }) {
    this.discoveryApi = discoveryApi;
    this.baseUrl = baseUrl.endsWith('/') ? baseUrl : `${baseUrl}/`;
  }

  private async callApi<T>(
    path: string,
    query: { [key in string]: any },
    url: string | null = null,
  ): Promise<T | []> {
    const apiUrl =
      url || `${await this.discoveryApi.getBaseUrl('proxy')}/gitlabci`;
    const response = await fetch(
      `${apiUrl}/${path}?${new URLSearchParams(query).toString()}`,
    );
    if (response.status === 200) {
      return (await response.json()) as T;
    }
    return [];
  }

  async getPipelineSummary(
    projectID?: string,
  ): Promise<PipelineSummary | undefined> {
    const pipelineObjects = await this.callApi<PipelineObject[]>(
      'projects/' + projectID + '/pipelines',
      {},
    );
    let projectObj: any = await this.callApi<Object>(
      'projects/' + projectID,
      {},
    );
    if (pipelineObjects) {
      pipelineObjects.forEach((element: PipelineObject) => {
        element.project_name = projectObj?.name;
      });
    }
    return {
      getPipelinesData: pipelineObjects!,
    };
  }

  async getUserAllMergeRequest(options: { token: string } | null = null) {
    const mergeRequestsResponse = await this.callApi<MergeRequest[]>(
      'merge_requests',
      {
        scope: 'created_by_me', // all means created_by_me + assigned_to_me
        // order_by: 'created_at' , // updated_at
        // view: 'simple',
        access_token: options?.token,
      },
      'https://gitlab.com/api/v4',
    );

    const projectIds = new Set();
    mergeRequestsResponse.forEach(mr => projectIds.add(mr.project_id));

    const requests = [...projectIds].map(id =>
      this.callApi<any>(`projects/${id}`, {}),
    );

    let projectsMetaInfo = await Promise.allSettled(requests);

    const responses: any = [];

    projectsMetaInfo.forEach(response => {
      if (response.status === 'fulfilled') {
        responses.push(response.value);
      }
    });

    const projectIdAndNameRecord: Record<string, string> = {};

    responses.forEach((response: any) => {
      projectIdAndNameRecord[response.id] = response.name;
    });

    const mergeRquestsList = mergeRequestsResponse.map(mr => {
      mr.project_name = projectIdAndNameRecord[mr.project_id];
      return mr;
    });

    return {
      getMergeRequestsData: mergeRquestsList!,
    };
  }

  async getUserProjects(token: string, options: {}) {
    const projectList = await this.callApi<ProjectData[]>(
      'projects',
      {
        access_token: token,
        per_page: 30,
        simple: true,
        membership: true,
        ...options,
      },
      'https://gitlab.com/api/v4',
    );

    return { getProjectsList: projectList };
  }

  async getUserProjectPipelines(
    projectId: string,
    token: string,
    options: {},
  ): Promise<PipelineSummary | undefined> {
    const pipelineList = await this.callApi<PipelineObject[]>(
      `projects/${projectId}/pipelines`,
      {
        access_token: token,
        per_page: 30,
        ...options,
      },
      'https://gitlab.com/api/v4',
    );

    return { getPipelinesData: pipelineList || [] };
  }

  async getIssuesSummary(
    projectId: string,
  ): Promise<IssuesSummary | undefined> {
    const issuesObject = await this.callApi<IssueObject[]>(
      `projects/${projectId}/issues`,
      {},
    );

    let projectObj: any = await this.callApi<Object>(
      'projects/' + projectId,
      {},
    );
    if (issuesObject) {
      issuesObject.forEach((element: IssueObject) => {
        element.project_name = projectObj?.name;
      });
    }

    return {
      getIssuesData: issuesObject!,
    };
  }

  async getProjectName(projectID?: string): Promise<string | undefined> {
    let projectObj: any = await this.callApi<Object>(
      'projects/' + projectID,
      {},
    );
    return projectObj?.name;
  }

  private async getUserProfilesData(
    contributorsData: ContributorData[],
  ): Promise<ContributorData[]> {
    for (let i = 0; contributorsData && i < contributorsData.length; i++) {
      const userProfile: any = await this.callApi<Object[]>('users', {
        search: contributorsData[i].email,
      });
      if (userProfile) {
        userProfile.forEach((userProfileElement: ContributorData) => {
          if (userProfileElement.name == contributorsData[i].name) {
            contributorsData[i].avatar_url = userProfileElement?.avatar_url;
          }
        });
      }
    }
    return contributorsData;
  }

  async getMergeRequestsSummary(
    projectID?: string,
  ): Promise<MergeRequestsSummary | undefined> {
    const mergeRquestsList = await this.callApi<MergeRequest[]>(
      'projects/' + projectID + '/merge_requests',
      {},
    );
    return {
      getMergeRequestsData: mergeRquestsList!,
    };
  }

  async getMergeRequestsStatusSummary(
    projectID?: string,
    count?: number,
  ): Promise<MergeRequestsStatusSummary | undefined> {
    const mergeRequestsList = await this.callApi<MergeRequest[]>(
      'projects/' + projectID + '/merge_requests',
      { per_page: count },
    );
    return {
      getMergeRequestsStatusData: mergeRequestsList!,
    };
  }

  async getContributorsSummary(
    projectID?: string,
  ): Promise<ContributorsSummary | undefined> {
    const contributorsData = await this.callApi<ContributorData[]>(
      'projects/' + projectID + '/repository/contributors',
      { sort: 'desc' },
    );
    const updatedContributorsData = await this.getUserProfilesData(
      contributorsData!,
    );
    return {
      getContributorsData: updatedContributorsData!,
    };
  }

  async getLanguagesSummary(
    projectID?: string,
  ): Promise<LanguagesSummary | undefined> {
    const languageObjects = await this.callApi<Object>(
      'projects/' + projectID + '/languages',
      {},
    );
    return {
      getLanguagesData: languageObjects!,
    };
  }

  async getProjectDetails(projectSlug?: string): Promise<Object | undefined> {
    let projectDetails: any;
    if (projectSlug) {
      projectDetails = await this.callApi<Object>(
        'projects/' + encodeURIComponent(projectSlug),
        {},
      );
    }
    return projectDetails;
  }

  async retryPipelineBuild(
    projectID?: string,
    pipelineID?: string,
  ): Promise<Object | undefined> {
    let retryBuild = await this.callApi<Object>(
      'projects/' + projectID + '/pipelines/' + pipelineID + '/retry',
      {},
    );
    return retryBuild;
  }
}
