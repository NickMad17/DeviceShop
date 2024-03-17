import {getProducts} from "@/features/Products/api/getProducts.ts";
import Products, {Product} from "@/features/Products/store/Products.ts";
import {setFavorites} from "@/features/Products/api/setFavorites.ts";

export {
    getProducts,
    Products,
    setFavorites
};

export type { Product };

