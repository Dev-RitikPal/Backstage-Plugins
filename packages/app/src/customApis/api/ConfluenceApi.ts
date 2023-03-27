import { createApiRef } from "@backstage/core-plugin-api";

export interface InfoPage {
    getInfoPageData: any;
}

export const ConfluenceApiRef = createApiRef<ConfluenceApi>({
    id: 'confluence.api',
});

export type ConfluenceApi = {
    getInfoPage(id: string): Promise<Object | undefined>;
}
