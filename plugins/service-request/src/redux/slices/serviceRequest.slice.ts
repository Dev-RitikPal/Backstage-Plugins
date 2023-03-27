import { createSlice, createAsyncThunk, Slice } from '@reduxjs/toolkit'
import { ServiceRequest } from '../endpoints';


export const getAllSR = createAsyncThunk("ServiceRequest/All", async () => {
    const response = await fetch(ServiceRequest.all);
    return await response.json();
})
type TInitialState ={
    error: string,
    showModal: boolean,
    loading: boolean,
    requests: []
}
const initialState: TInitialState = {
    error: '',
    showModal: false,
    loading: false,
    requests: []
}
export const serviceRequestSlice:Slice<TInitialState> = createSlice({
    name: 'Service Request',
    initialState,
    reducers: {
        toggleModal: (state) => {
            state.showModal = !state.showModal
        }
    },
    extraReducers: {
        [getAllSR.pending.type]: (state) => {
            state.loading = true;
            state.error = '';
        },
        [getAllSR.rejected.type]: (state, action) => {
            state.loading = false;
            state.error = action.error.message;
        },
        [getAllSR.fulfilled.type]: (state, action) => {
            state.loading = false;
            state.error = '';
            state.requests = action?.payload?.results || [];
        }

        // [loginUser.pending.type]: (state) => {
        //     state.loading = true;
        //     state.error = false;
        //   },
        //   [loginUser.rejected.type]: (state, action) => {
        //     state.loading = false;
        //     state.error = action.error.message;
        //   },
        //   [loginUser.fulfilled.type]: (state, action) => {
        //     state.loading = false;
        //     state.error = false;
        //     state.user = action?.payload?.data?.user || {};
        //   },
    },
});
export const { toggleModal } = serviceRequestSlice.actions
export default serviceRequestSlice.reducer
