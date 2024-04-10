import { DiscoveryApi } from '@backstage/core-plugin-api';
import { ConfluenceApi, InfoPage } from './ConfluenceApi';


export class ConfluenceClient implements ConfluenceApi {
    discoveryApi: DiscoveryApi;
    baseUrl: string;

    constructor({
        discoveryApi,
        baseUrl = 'https://conf.willhillatlas.com/',
    }:{
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
        const apiUrl = `${await this.discoveryApi.getBaseUrl('proxy')}/confluence/rest/api`;
        const response = await fetch(
            `${apiUrl}/${path}?${new URLSearchParams(query).toString()}`,
    );

        if (response.status === 200) {
            return (await response.json()) as T;
        }

        return undefined;
    }

    async getInfoPage(id?: string): Promise<InfoPage | undefined> {
        const releaseData = await this.callApi<Object>(
          `content/${id}`,
          {expand:'body.storage'},
        );
        return { getInfoPageData: releaseData };
      }
}
