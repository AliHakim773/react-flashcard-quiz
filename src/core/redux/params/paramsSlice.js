import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    amount: "0",
    category: "",
}
export const paramsSlice = createSlice({
    name: "params",
    initialState,
    reducers: {
        changeParams(state, action) {
            return {
                amount: action.payload.amount,
                category: action.payload.category,
            }
        },
    },
})
export const { changeParams } = paramsSlice.actions

export default paramsSlice.reducer

export const params = paramsSlice.name

export const extractParamsSlice = (global) => {
    return global[params]
}
