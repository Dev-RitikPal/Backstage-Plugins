import { createApiRef } from '@backstage/core-plugin-api';

export interface UptlData {
    getUptlData: any;
}

export type UptlApi = {
    getUptlData(): Promise<UptlData>;
};


export const UptlApiRef = createApiRef<UptlApi>({
    id: 'uptl.api',
});
