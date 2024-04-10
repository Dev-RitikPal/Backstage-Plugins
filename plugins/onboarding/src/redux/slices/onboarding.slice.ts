import { createSlice, createAsyncThunk, Slice } from '@reduxjs/toolkit'
// eslint-disable-next-line import/no-extraneous-dependencies
import { ResponseError } from '@backstage/errors';

import { OnboardingApi } from '../../api'
import { IChecklist, IOnboardingState } from "../../interfaces"

type ICreateData = {
    body?: IChecklist,
    id?: number,
    onboardingApi: OnboardingApi,
}

export const getOwnerChecklist = createAsyncThunk("checklist/owner", async (api: OnboardingApi, { getState }) => {
    const state: any = getState()
    const response = await api.getOwnerChecklist(state.onboarding.checklist.selectedGroup)
    if (!response.ok) {
        throw await ResponseError.fromResponse(response);
    }
    return await response.json()
})

export const createChecklist = createAsyncThunk("checklist/create", async (data: ICreateData, { dispatch, getState }) => {
    const state: any = getState()
    const response = await data.onboardingApi.createChecklist({
        ...data.body,
        group: state.onboarding.checklist.selectedGroup
    });
    if (!response.ok) {
        throw await ResponseError.fromResponse(response);
    }
    dispatch(getOwnerChecklist(data.onboardingApi))
    return await response.json() as IChecklist[];
})

export const getChecklist = createAsyncThunk("checklist/user", async (api: OnboardingApi) => {
    const response = await api.getChecklist()
    if (!response.ok) {
        throw await ResponseError.fromResponse(response);
    }
    return await response.json()
})

export const updateChecklist = createAsyncThunk("checklist/update", async (data: ICreateData, { dispatch }) => {
    const response = await data.onboardingApi.updateChecklist(data.body, data.id as number)
    if (!response.ok) {
        throw await ResponseError.fromResponse(response);
    }
    dispatch(getOwnerChecklist(data.onboardingApi))
    return await response.json()
})

export const deleteChecklist = createAsyncThunk("checklist/delete", async (data: ICreateData, { dispatch }) => {
    const response = await data.onboardingApi.deleteChecklist(data.id as number)
    if (!response.ok) {
        throw await ResponseError.fromResponse(response);
    }
    dispatch(getOwnerChecklist(data.onboardingApi))
    return await response.json()
})

export const updateChecklistStatus = createAsyncThunk("checklist/update/status", async (data: ICreateData) => {
    const response = await data.onboardingApi.updateChecklistStatus(data.body, data.id as number)
    if (!response.ok) {
        throw await ResponseError.fromResponse(response);
    }
    return { id: data.id, status: data.body?.isDone }
})

export const onboardingStatus = createAsyncThunk("onboarding/status", async (data: ICreateData) => {
    const response = await data.onboardingApi.onboardingStatus()
    if (!response.ok) {
        throw await ResponseError.fromResponse(response);
    }
    return await response.json();
})

const initialState: IOnboardingState = {
    showModal: true,
    checklist: {
        list: {
            aix: {
                frontDev: [{
                    id: "aix-group_100_1000",
                    title: "base frontend checklist",
                    description: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of de Finibus Bonorum et Malorum (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, Lorem ipsum dolor sit amet.., comes from a line in section 1.10.32.",
                    url: "http://linkedin.com"
                }, {
                    id: "aix-group_101_1000",
                    title: "base frontend checklist",
                    description: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of de Finibus Bonorum et Malorum (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, Lorem ipsum dolor sit amet.., comes from a line in section 1.10.32.",
                }, {
                    id: "aix-group_1002_1000",
                    title: "base frontend checklist",
                    description: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of de Finibus Bonorum et Malorum (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, Lorem ipsum dolor sit amet.., comes from a line in section 1.10.32.",
                    url: "http://linkedin.com"
                }],
                backendDev: [{
                    id: "aix-group_100_1001",
                    title: "base frontend checklist 2",
                    description: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of de Finibus Bonorum et Malorum (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, Lorem ipsum dolor sit amet.., comes from a line in section 1.10.32.",
                },
                {
                    id: "aix-group_100_1002",
                    title: "base frontend checklist 3",
                    description: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of de Finibus Bonorum et Malorum (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, Lorem ipsum dolor sit amet.., comes from a line in section 1.10.32.",
                }],
                common: [{
                    id: "aix-group_100_1001",
                    title: "base frontend checklist 4",
                    description: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of de Finibus Bonorum et Malorum (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, Lorem ipsum dolor sit amet.., comes from a line in section 1.10.32.",
                    url: "http://linkedin.com"
                }],
            },
            rearPortal: {
                frontDev: [{
                    id: "rp-rearportal-group_100_1000",
                    title: "base frontend checklist",
                    description: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of de Finibus Bonorum et Malorum (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, Lorem ipsum dolor sit amet.., comes from a line in section 1.10.32.",
                    url: "http://linkedin.com"
                }],
                backendDev: [{
                    id: "rp-rearportal-group_100_1001",
                    title: "base frontend checklist 5",
                    description: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of de Finibus Bonorum et Malorum (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, Lorem ipsum dolor sit amet.., comes from a line in section 1.10.32.",
                    url: "http://linkedin.com"
                }],
                common: [{
                    id: "rp-rearportal-group_101_1003",
                    title: "base frontend checklist 1",
                    description: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of de Finibus Bonorum et Malorum (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, Lorem ipsum dolor sit amet.., comes from a line in section 1.10.32.",
                    url: "http://linkedin.com"
                }, {
                    id: "rp-rearportal-group_101_1004",
                    title: "base frontend checklist 6",
                    description: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of de Finibus Bonorum et Malorum (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, Lorem ipsum dolor sit amet.., comes from a line in section 1.10.32.",
                }, {
                    id: "rp-rearportal-group_101_1005",
                    title: "base frontend checklist 2",
                    description: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of de Finibus Bonorum et Malorum (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, Lorem ipsum dolor sit amet.., comes from a line in section 1.10.32.",
                    url: "http://linkedin.com"
                }],
            },
            cortex: {
                frontDev: [{
                    id: "aix-group_100_1003",
                    title: "base frontend checklist",
                    description: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of de Finibus Bonorum et Malorum (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, Lorem ipsum dolor sit amet.., comes from a line in section 1.10.32.",
                    url: "http://linkedin.com"
                }, {
                    id: "aix-group_101_1004",
                    title: "base frontend checklist",
                    description: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of de Finibus Bonorum et Malorum (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, Lorem ipsum dolor sit amet.., comes from a line in section 1.10.32.",
                }, {
                    id: "aix-group_1002_1005",
                    title: "base frontend checklist",
                    description: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of de Finibus Bonorum et Malorum (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, Lorem ipsum dolor sit amet.., comes from a line in section 1.10.32.",
                    url: "http://linkedin.com"
                }],
                backendDev: [{
                    id: "aix-group_100_1001",
                    title: "base frontend checklist 6",
                    description: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of de Finibus Bonorum et Malorum (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, Lorem ipsum dolor sit amet.., comes from a line in section 1.10.32.",
                },
                {
                    id: "aix-group_100_1001",
                    title: "base frontend checklist 3",
                    description: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of de Finibus Bonorum et Malorum (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, Lorem ipsum dolor sit amet.., comes from a line in section 1.10.32.",
                }],
                common: [{
                    id: "aix-group_100_1007",
                    title: "base frontend checklist 4",
                    description: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of de Finibus Bonorum et Malorum (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, Lorem ipsum dolor sit amet.., comes from a line in section 1.10.32.",
                    url: "http://linkedin.com"
                }],
            },
            jio: {
                frontDev: [{
                    id: "aix-group_100_1004",
                    title: "base frontend checklist",
                    description: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of de Finibus Bonorum et Malorum (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, Lorem ipsum dolor sit amet.., comes from a line in section 1.10.32.",
                    url: "http://linkedin.com"
                }, {
                    id: "aix-group_101_1005",
                    title: "base frontend checklist",
                    description: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of de Finibus Bonorum et Malorum (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, Lorem ipsum dolor sit amet.., comes from a line in section 1.10.32.",
                }, {
                    id: "aix-group_1002_1006",
                    title: "base frontend checklist",
                    description: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of de Finibus Bonorum et Malorum (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, Lorem ipsum dolor sit amet.., comes from a line in section 1.10.32.",
                    url: "http://linkedin.com"
                }],
                backendDev: [{
                    id: "aix-group_100_1002",
                    title: "base frontend checklist 6",
                    description: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of de Finibus Bonorum et Malorum (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, Lorem ipsum dolor sit amet.., comes from a line in section 1.10.32.",
                },
                {
                    id: "aix-group_100_1003",
                    title: "base frontend checklist 3",
                    description: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of de Finibus Bonorum et Malorum (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, Lorem ipsum dolor sit amet.., comes from a line in section 1.10.32.",
                }],
                common: [{
                    id: "aix-group_100_1004",
                    title: "base frontend checklist 4",
                    description: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of de Finibus Bonorum et Malorum (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, Lorem ipsum dolor sit amet.., comes from a line in section 1.10.32.",
                    url: "http://linkedin.com"
                }],
            },
        },
        groups: [],
        selectedGroup: 'backendDev',
        tabs: [],
        selectedTab: 'aix',
        ownerList: [],
        error: '',
        message: '',
        success: false,
        loading: false,
        edit: {
            id: null,
            title: ''
        }
    },
}

export const checklistSlice: Slice<IOnboardingState> = createSlice({
    name: 'Onboarding',
    initialState,
    reducers: {
        updateSelectedGroup: (state: IOnboardingState, action) => {
            state.checklist.selectedGroup = action.payload
        },
        closeSuccess: (state: IOnboardingState) => {
            state.checklist.message = '';
            state.checklist.success = false;
        },
        closeError: (state: IOnboardingState) => {
            state.checklist.error = '';
        },
        setEdit: (state: IOnboardingState, action) => {
            state.checklist.edit = {
                ...state.checklist.edit,
                ...action.payload
            };
            state.checklist.success = false

        },
        updateSelectedTab: (state: IOnboardingState, action) => {
            state.checklist.selectedTab = action.payload
        },
        updateTab: (state: IOnboardingState, action) => {
            state.checklist.tabs = action.payload
        },
        updateGroup: (state: IOnboardingState, action) => {
            state.checklist.groups = action.payload
        },
        closeModal: (state: IOnboardingState) => {
            state.showModal = false
        }
    },
    extraReducers: {
        [createChecklist.pending.type]: (state: IOnboardingState) => {
            state.checklist.loading = true;
            state.checklist.success = false;
            state.checklist.error = '';
            state.checklist.message = '';
        },
        [createChecklist.rejected.type]: (state: IOnboardingState, action) => {
            state.checklist.loading = false;
            state.checklist.success = false;
            state.checklist.error = action.error.message;
        },
        [createChecklist.fulfilled.type]: (state: IOnboardingState, action) => {
            state.checklist.loading = false;
            state.checklist.error = '';
            state.checklist.success = true;
            state.checklist.message = action.payload.message;
        },
        [getChecklist.pending.type]: (state: IOnboardingState) => {
            state.checklist.loading = true;
            state.checklist.error = '';
            state.checklist.list = {};
        },
        [getChecklist.rejected.type]: (state: IOnboardingState, action) => {
            state.checklist.loading = false;
            state.checklist.error = action.error.message;
        },
        [getChecklist.fulfilled.type]: (state: IOnboardingState, action) => {
            state.checklist.loading = false;
            state.checklist.error = '';
            state.checklist.list = action?.payload?.data || [];
            state.checklist.tabs = Object.keys(action?.payload?.data) || [];

        },
        [getOwnerChecklist.pending.type]: (state: IOnboardingState) => {
            state.checklist.loading = true;
            state.checklist.error = '';
            state.checklist.ownerList = [];
        },
        [getOwnerChecklist.rejected.type]: (state: IOnboardingState, action) => {
            state.checklist.loading = false;
            state.checklist.error = action.error.message;
        },
        [getOwnerChecklist.fulfilled.type]: (state: IOnboardingState, action) => {
            state.checklist.loading = false;
            state.checklist.error = '';
            state.checklist.ownerList = action?.payload.data || [];
        },
        [updateChecklist.pending.type]: (state: IOnboardingState) => {
            state.checklist.loading = true;
            state.checklist.success = false;
            state.checklist.error = '';
            state.checklist.message = '';
        },
        [updateChecklist.rejected.type]: (state: IOnboardingState, action) => {
            state.checklist.loading = false;
            state.checklist.success = false;
            state.checklist.error = action.error.message;
        },
        [updateChecklist.fulfilled.type]: (state: IOnboardingState, action) => {
            state.checklist.loading = false;
            state.checklist.error = '';
            state.checklist.success = true;
            state.checklist.message = action.payload.message;
            state.checklist.edit = { ...initialState.checklist.edit }
        },
        [deleteChecklist.pending.type]: (state: IOnboardingState) => {
            state.checklist.loading = true;
            state.checklist.error = '';
            state.checklist.success = false;
        },
        [deleteChecklist.rejected.type]: (state: IOnboardingState, action) => {
            state.checklist.loading = false;
            state.checklist.success = false;
            state.checklist.error = action.error.message;
        },
        [deleteChecklist.fulfilled.type]: (state: IOnboardingState, action) => {
            state.checklist.loading = false;
            state.checklist.error = '';
            state.checklist.success = true;
            state.checklist.message = action?.payload.message || '';
        },
        [updateChecklistStatus.pending.type]: (state: IOnboardingState) => {
            state.checklist.loading = true;
            state.checklist.error = '';
            state.checklist.success = false;
        },
        [updateChecklistStatus.rejected.type]: (state: IOnboardingState, action) => {
            state.checklist.loading = false;
            state.checklist.success = false;
            state.checklist.error = action.error.message;
        },
        [updateChecklistStatus.fulfilled.type]: (state: IOnboardingState, action) => {
            state.checklist.loading = false;
            state.checklist.error = '';

            state.checklist.list[state.checklist.selectedTab] = state.checklist.list[state.checklist.selectedTab].map((item: IChecklist) => {
                if (item.id === action.payload.id) {
                    item.isDone = action.payload.status
                }
                return item
            })
        },
        [onboardingStatus.pending.type]: (state: IOnboardingState) => {
            state.checklist.loading = true;
            state.checklist.error = '';
            state.checklist.success = false;
        },
        [onboardingStatus.rejected.type]: (state: IOnboardingState, action) => {
            state.checklist.loading = false;
            state.checklist.success = false;
            state.checklist.error = action.error.message;
        },
        [onboardingStatus.fulfilled.type]: (state: IOnboardingState, action) => {
            state.checklist.loading = false;
            state.checklist.error = '';
            state.checklist.success = true;
            state.checklist.edit = { ...initialState.checklist.edit }
            state.showModal = action.payload?.showModal || false
            // state.checklist.message = action?.payload.message || '';
        },
    },
});

export const { updateSelectedGroup, closeError, updateGroup, closeSuccess, setEdit, updateTab, updateSelectedTab, closeModal } = checklistSlice.actions
export default checklistSlice.reducer

