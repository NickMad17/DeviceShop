import {createHashRouter} from "react-router-dom";
import {Paths} from "../types";
import ProtectedRoute from "@/app/providers/routerProvider/ui/ProtectedRoute.tsx";
import {Account, CartPage, ErrorPage, FavoritesPage, Home, ProductPage, Start} from "@/pages";

export const router = createHashRouter([
    {
        path: Paths.HOME,
        element: (
            <ProtectedRoute>
                <Home/>
            </ProtectedRoute>
        )
    },
    {
        path: Paths.START,
        element: <Start/>
    },
    {
        path: Paths.ERROR,
        element: <ErrorPage/>
    },
    {
        path: Paths.ACCOUNT,
        element: (
            <ProtectedRoute>
                <Account/>
            </ProtectedRoute>
        )
    },
    {
        path: Paths.FAVORITES,
        element: (
            <ProtectedRoute>
                <FavoritesPage/>
            </ProtectedRoute>
        )
    },
    {
        path: Paths.CART,
        element: (
            <ProtectedRoute>
                <CartPage/>
            </ProtectedRoute>
        )
    },
    {
        path: `${Paths.PRODUCT}/:productId`,
        element: (
            <ProtectedRoute>
                <ProductPage/>
            </ProtectedRoute>
        )
    },
])
