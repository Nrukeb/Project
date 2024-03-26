import ProductSearch from "./ui/ProductSearch";

export {
    ProductSearch
};

export type {
    IProductSearchSchema
} from "./model/types";

export {
    productSearchReducerName,
    productSearchActions,
    productSearchReduser
} from "./model/slice";

export {
    productSearchSelectors
} from "./model/selectors";