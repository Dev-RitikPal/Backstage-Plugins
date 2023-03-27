import React from "react"

export interface IChecklist {
    id?: number | null
    title?: string,
    checklist?: number,
    user?: string,
    group?: string,
    owner?: string,
    isDone?: boolean | null,
    created_at?: string,
    updated_at?: string
}
export type IList = {
    [key:string]:IChecklist[]
}
export interface IOnboardingState {
    showModal: boolean
    checklist: {
        list: any,
        groups: string[],
        selectedGroup: string,
        tabs:string[],
        selectedTab: string,
        ownerList: IChecklist[],
        error: string,
        message: string,
        success: boolean,
        loading: boolean
        edit:IChecklist
    },
}

export interface ITool {
    key?: any;
    label: string;
    url: string;
    icon: React.ReactNode;
};
