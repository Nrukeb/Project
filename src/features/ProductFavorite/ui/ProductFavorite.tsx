

import React, { memo, useCallback } from 'react';
import { MdFavoriteBorder, MdFavorite } from "react-icons/md";
import { useSelector } from "react-redux";

import { getAuthData } from "../../../entities/User";
import { useAppDispatch } from "../../../shared/lib/hooks/useAppDispatch/useAppDispatch";
import { toggleProductFavorite } from "../model/services/toggleProductFavorite/toggleProductFavorite";

const ProductFavorite = (props: { id: number }) => {
    const dispatch = useAppDispatch();
    const user = useSelector(getAuthData);
    const { id } = props;

    const onClick = useCallback((event: React.MouseEvent<HTMLDivElement>) => {
        event.stopPropagation();

        if (!user) return;

        const isFavorite = user.productFavorites.includes(id);

        const favorites =
            isFavorite
                ? user.productFavorites.filter(favoriteId => favoriteId !== id)
                : [...user.productFavorites, id];

        dispatch(toggleProductFavorite({
            id: user.id,
            productFavorites: favorites
        }));
    }, [dispatch, id, user]);

    if (user) {
        return (
            <div
                onClick={onClick}
            >
                {
                    user.productFavorites.includes(id)
                        ? (
                            <MdFavorite
                                size={20}
                            />
                        ) : (
                            <MdFavoriteBorder
                                size={20}
                            />
                        )
                }
            </div>
        );
    }

    return null;
};

export default memo(ProductFavorite);
