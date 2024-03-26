import { PropsWithChildren } from "react";
import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";

import { getAuthData } from "../../../../entities/User";

type TRequireAutheProps = PropsWithChildren & {}
const RequireAuth = ({ children }: TRequireAutheProps) => {
    const auth = useSelector(getAuthData);
    const location = useLocation();

    if (!auth) {
        return <Navigate
            to="/"
            state={{
                from: location
            }}
            replace
        />;
    }

    return <div>{children}</div>;
};

export default RequireAuth;