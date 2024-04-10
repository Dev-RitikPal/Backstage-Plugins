import React from "react"

export interface IToolkit {
    id?: number
    toolkit?: number
    title: string
    url: string
    logo: string
    type: 'public' | 'private'
    owner?: string
    actions?: any
}
export interface IToolkitState {
    showModal: boolean
    myToolkits: {
        list: IToolkit[],
        error: string,
        message: string,
        loading: boolean
        showAlert: boolean
    },
    toolkits: {
        list: IToolkit[],
        error: string,
        message: string,
        loading: boolean
        showAlert: boolean
    },
    create: {
        error: string
        message: string
        loading: boolean
        showAlert: boolean
        success: boolean
    },
    add: {
        error: string
        message: string
        loading: boolean
        showAlert: boolean
        success: boolean
    },
    delete: {
        error: string
        message: string
        loading: boolean
        showAlert: boolean
        success: boolean
    }
    toolkit: IToolkit | {}
}
export type TToolkitMode = {
    mode: 'read' | 'write';
};
export interface ITool {
    key?: any;
    label: string;
    url: string;
    icon: React.ReactNode;
};
export type TActionButton = {
    onDeleteClick: () => void
    onEdit: () => void
    owner: string,
    currentUser: string
    onRemove: () => void
}
