import { DiscoveryApi } from '@backstage/core-plugin-api';
import { GithubApi } from './GithubApi';
import { FileData, ReleaseData, UptlData } from './ProviderInterface';

export class GithubClient implements GithubApi {
  discoveryApi: DiscoveryApi;
  baseUrl: string;
  constructor({
    discoveryApi,
    baseUrl = 'https://api.github.com/',
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
    const apiUrl = `${await this.discoveryApi.getBaseUrl('proxy')}/githubapi`;
    const response = await fetch(
      `${apiUrl}/${path}?${new URLSearchParams(query).toString()}`,
    );

    if (response.status === 200) {
      return (await response.json()) as T;
    }
    return undefined;
  }

  async getLatestProjectRelease(): Promise<ReleaseData | undefined> {
    const releaseData = await this.callApi<ReleaseData>(
      `repos/backstage/backstage/releases/latest`,
      {},
    );

    return releaseData;
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
    const path = 'portal-app/packages/app/src/components/Uptl/uptlData.json';
    const uptlData = await this.callApi<Object>(
      `repos/NishkarshRaj/wh-vault/contents/${path}`,
      {
        ref: 'main',
      },
    );

    return { getUptlData: uptlData } as UptlData;
  }
}
