import { StateSchema } from "../../../../app/providers/StoreProvider";

export const getProductSearchTerm = (state: StateSchema) =>
    state.productSearch.term;

export const productSearchSelectors = {
    getProductSearchTerm
};