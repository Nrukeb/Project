import { RouteProps } from "react-router-dom";

import { AuthPage } from "../../../../pages/AuthPage";
import { MainPage } from "../../../../pages/MainPage";
import { NotFoundPage } from "../../../../pages/NotFoundPage";
import { ProductDetailsPage } from "../../../../pages/ProductDetailsPage";
import ProductListPage from "../../../../pages/ProductListPage/ui/ProductListPage";

enum AppRoutes {
    MAIN = "main",
    NOT_FOUND = "not_found",
    PRODUCT_LIST = "product_list",
    PRODUCT_DETAILS = "product_details",
    AUTH = "auth"
}

export type AppRouteProps = RouteProps & {
    authOnly?: boolean;
}

export const RoutePaths: Record<AppRoutes, string> = {
    [AppRoutes.MAIN]: "/",
    [AppRoutes.PRODUCT_LIST]: "/product_list",
    [AppRoutes.PRODUCT_DETAILS]: "/product_details/:id",
    [AppRoutes.AUTH]: "/auth",

    // last
    [AppRoutes.NOT_FOUND]: "*"
};

export const routerConfig: Record<AppRoutes, AppRouteProps> = {
    [AppRoutes.MAIN]: {
        path: RoutePaths.main,
        element: <MainPage />,
        authOnly: true
    },
    [AppRoutes.PRODUCT_LIST]: {
        path: RoutePaths.product_list,
        element: <ProductListPage />,
        authOnly: true
    },
    [AppRoutes.PRODUCT_DETAILS]: {
        path: RoutePaths.product_details,
        element: <ProductDetailsPage />,
    },
    [AppRoutes.AUTH]: {
        path: RoutePaths.auth,
        element: <AuthPage />
    },
    [AppRoutes.NOT_FOUND]: {
        path: RoutePaths.not_found,
        element: <NotFoundPage />
    }
};