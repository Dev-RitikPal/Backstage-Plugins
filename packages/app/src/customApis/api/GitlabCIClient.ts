import { DiscoveryApi } from '@backstage/core-plugin-api';
import { GitlabCIApi } from './GitlabCIApi';
import { FileData, ReleaseData, UptlData } from './ProviderInterface';

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
  ): Promise<T | undefined> {
    const apiUrl = `${await this.discoveryApi.getBaseUrl('proxy')}/gitlabci`;
    const response = await fetch(
      `${apiUrl}/${path}?${new URLSearchParams(query).toString()}`,
    );

    if (response.status === 200) {
      return (await response.json()) as T;
    }
    return undefined;
  }

  async getLatestProjectRelease(): Promise<ReleaseData | undefined> {
    const releasesData = await this.callApi<Array<Object>>(
      `projects/${28282364}/releases`,
      {},
    );

    let releaseData;

    // transforming data to required format/schema
    if(releasesData && releasesData[0]) {
      let temp:any = releasesData[0]
      temp.html_url = temp._links.self
      releaseData = releasesData[0] as ReleaseData;
    }


    return releaseData
  }

  async getRawFile(path:string=""): Promise<FileData | undefined> {
    const fileData = await this.callApi<Object>(
      path,
      {
        ref: 'main',
      },
    );
    return { getFileData: fileData };
  }

  async getUptlData() {
    const uptlData = await this.callApi<Object>(
      'projects/41913685/repository/files/uptl.json',
      {
        ref: 'main',
      },
    );

    return { getUptlData: uptlData } as UptlData;
  }
}
