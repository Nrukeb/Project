import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { IProductSearchSchema } from "../types";

const initialState: IProductSearchSchema = {
    term: ""
};

const productSearchSlice = createSlice({
    name: "productSearch",
    initialState,
    reducers: {
        setTrem: (state, action: PayloadAction<string>) => {
            state.term = action.payload;
        }
    }
});

export const {
    name: productSearchReducerName,
    actions: productSearchActions,
    reducer: productSearchReduser
} = productSearchSlice;