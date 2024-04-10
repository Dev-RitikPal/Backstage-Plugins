import { createApiRef, DiscoveryApi, FetchApi, IdentityApi } from "@backstage/core-plugin-api";

export const toolkitApiRef = createApiRef<OnboardingApi>({
    id: 'onboarding'
})

export interface OnboardingApi {
    getMyToolkits(): Promise<any>;
}

export class OnboardingClient implements OnboardingApi {
    // private readonly identityApi: IdentityApi;
    private readonly discoveryApi: DiscoveryApi;
    private readonly fetchApi: FetchApi;

    constructor(options: {
        identityApi: IdentityApi;
        discoveryApi: DiscoveryApi;
        fetchApi: FetchApi;
    }) {
        // this.identityApi = options.identityApi;
        this.discoveryApi = options.discoveryApi;
        this.fetchApi = options.fetchApi;
    }

    async getMyToolkits(): Promise<any> {
        const baseUrl = await this.discoveryApi.getBaseUrl('githubapi');
        console.log("🚀 ~ file: api.ts:27 ~ ToolkitClient ~ getMyToolkits ~ baseUrl", baseUrl)
        // return await this.fetchApi.fetch(`${baseUrl}/myToolkits`);
    }

}
