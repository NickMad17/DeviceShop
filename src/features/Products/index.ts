import {getProducts} from "@/features/Products/api/getProducts.ts";
import Products, {Product, SearchType} from "@/features/Products/store/Products.ts";
import {setFavorites} from "@/features/Products/api/setFavorites.ts";

export {
    getProducts,
    Products,
    setFavorites
};

export {SearchType}

export type {Product};
