import { DiscoveryApi } from '@backstage/core-plugin-api';
import { UptlData, UptlApi } from './UptlApi';

export class UptlClient implements UptlApi {
  discoveryApi: DiscoveryApi;
  baseUrl: string;
  constructor({
    discoveryApi,
    baseUrl = '',
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
    const apiUrl = `${await this.discoveryApi.getBaseUrl('uptl')}${path}`;
    const response = await fetch(
      `${apiUrl}?${new URLSearchParams(query).toString()}`,
    );

    if (response.status === 200) {
      return (await response.json()) as T;
    }
    return undefined;
  }

  async getUptlData() {
    const uptlData = await this.callApi<Object>(
      ``,
      {}
    );

    return { getUptlData: uptlData } as UptlData;
  }
}
