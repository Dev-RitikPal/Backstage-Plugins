import { DiscoveryApi, FetchApi } from '@backstage/core-plugin-api';
import { GlossaryItemForm } from '../types/GlossaryItem';
import { GlossaryApi } from './GlossaryApi';

export class GlossaryClient implements GlossaryApi {
  private readonly discoveryApi: DiscoveryApi;
  private readonly fetchApi: FetchApi;

  constructor(options: { discoveryApi: DiscoveryApi; fetchApi: FetchApi }) {
    this.discoveryApi = options.discoveryApi;
    this.fetchApi = options.fetchApi ?? { fetch };
  }
  async addGlossaryItem(glossaryItemForm: GlossaryItemForm): Promise<any> {
    const baseUrl = await this.discoveryApi.getBaseUrl('glossary');

    return await this.fetchApi
      .fetch(`${baseUrl}/add`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(glossaryItemForm),
      })
      .then(resp => resp.json());
  }

  async updateGlossaryItem(glossaryItemForm: GlossaryItemForm): Promise<any> {
    const baseUrl = await this.discoveryApi.getBaseUrl('glossary');

    return await this.fetchApi
      .fetch(`${baseUrl}/update`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(glossaryItemForm),
      })
      .then(resp => resp.json());
  }

  async getGlossaryByRef(entityRef: string): Promise<any> {
    const baseUrl = await this.discoveryApi.getBaseUrl('glossary');

    const response = await fetch(
      `${baseUrl}/${encodeURIComponent(entityRef)}`,
      {
        method: 'GET',
      },
    );

    return response.ok ? response : null;
  }

  async getGlossary(): Promise<any> {
    const baseUrl = await this.discoveryApi.getBaseUrl('glossary');

    const response = await fetch(`${baseUrl}/all`, {
      method: 'GET',
    });

    return response.ok ? response : null;
  }
  async getGlossaryBySearch(searchText: string): Promise<any> {
    const baseUrl = await this.discoveryApi.getBaseUrl('glossary');

    const response = await fetch(
      `${baseUrl}/search/${encodeURIComponent(`${searchText}`)}`,
      {
        method: 'GET',
      },
    );

    return response.ok ? response : null;
  }

  async getFilteredGlossary(
    searchText: string,
    entityRef: string,
  ): Promise<any> {
    const baseUrl = await this.discoveryApi.getBaseUrl('glossary');
    var raw = JSON.stringify({
      text: `${searchText}`,
      entityRef: entityRef,
    });
    var myHeaders = new Headers();
    myHeaders.append('Content-Type', 'application/json');

    var requestOptions = {
      method: 'POST',
      body: raw,
      headers: myHeaders,
    };
    const response = await fetch(`${baseUrl}/filter`, requestOptions);

    return response.ok ? response : null;
  }
}
