import { configureStore } from "@reduxjs/toolkit"
import paramsReducer, { params } from "./params/paramsSlice"
import { createLogger } from "redux-logger"

const logger = createLogger([])

export const store = configureStore({
    reducer: {
        [params]: paramsReducer,
    },
    middleware: [logger],
})
