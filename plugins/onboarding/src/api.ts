import { createApiRef, DiscoveryApi, FetchApi, IdentityApi } from "@backstage/core-plugin-api";

export const onboardingApiRef = createApiRef<OnboardingApi>({
    id:"onboarding"
})

export interface OnboardingApi {
    createChecklist(body: any): Promise<any>;
    updateChecklist(body: any, id: number): Promise<any>;
    deleteChecklist(id: number): Promise<any>;
    getChecklist(): Promise<any>;
    getOwnerChecklist(group: string): Promise<any>;
    updateChecklistStatus(body: any, id: number): Promise<any>;
    onboardingStatus(): Promise<any>;

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

    async getChecklist(): Promise<any> {
        const baseUrl = await this.discoveryApi.getBaseUrl('onboarding');
        return await this.fetchApi.fetch(`${baseUrl}/checklist?groups=cortex`,{
        method: 'GET',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },});
    }
    async getOwnerChecklist(group:string): Promise<any> {
        const baseUrl = await this.discoveryApi.getBaseUrl('onboarding');
        return await this.fetchApi.fetch(`${baseUrl}/ownerChecklist?group=${group}`,{
        method: 'GET',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },});
    }

    async createChecklist(body: any): Promise<any> {
        const baseUrl = await this.discoveryApi.getBaseUrl('onboarding');
        return await this.fetchApi.fetch(`${baseUrl}/checklist`, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(body)
        })
    }

    async updateChecklist(body:any, id: number): Promise<any> {
        const baseUrl = await this.discoveryApi.getBaseUrl('onboarding');
        return await this.fetchApi.fetch(`${baseUrl}/checklist/${id}`, {
            method: 'PUT',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(body)
        });
    }

    async updateChecklistStatus(body:any, id: number): Promise<any> {
        const baseUrl = await this.discoveryApi.getBaseUrl('onboarding');
        return await this.fetchApi.fetch(`${baseUrl}/checklist/update/${id}`, {
            method: 'PUT',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(body)
        });
    }

    async deleteChecklist(id: number): Promise<any> {
        const baseUrl = await this.discoveryApi.getBaseUrl('onboarding');
        return await this.fetchApi.fetch(`${baseUrl}/checklist/${id}`, { method: 'DELETE' });
    }
    async onboardingStatus(): Promise<any> {
        const baseUrl = await this.discoveryApi.getBaseUrl('onboarding');
        return await this.fetchApi.fetch(`${baseUrl}/onboardingStatus`, { method: 'GET' });
    }
}