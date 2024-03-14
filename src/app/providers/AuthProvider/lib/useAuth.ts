import {useContext} from "react";
import {AuthContext} from ".././/ui/AuthProvider.tsx";

export const useAuth = () => {
    const context = useContext(AuthContext)
    return context
}
