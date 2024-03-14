import {createHashRouter} from "react-router-dom";
import {Paths} from "../types";
import ProtectedRoute from "@/app/providers/routerProvider/ui/ProtectedRoute.tsx";
import {Auth, Home, Start} from "@/pages";

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
        path: Paths.AUTH,
        element: <Auth/>
    },
    {
        path: Paths.ERROR,
        element: <p>Error</p>
    },

])
