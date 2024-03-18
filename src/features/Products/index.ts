import {getProducts} from "@/features/Products/api/getProducts.ts";
import Products, {Product, SearchType, SortType} from "@/features/Products/store/Products.ts";
import {setFavorites} from "@/features/Products/api/setFavorites.ts";
import {getFavoritesProducts} from "@/features/Products/api/getFavoritesProducts.tsx";

export {
    getProducts,
    Products,
    setFavorites,
    getFavoritesProducts
};
export {SearchType, SortType}
export type {Product};
