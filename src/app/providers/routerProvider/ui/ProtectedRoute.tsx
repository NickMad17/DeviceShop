import {ReactNode, useEffect} from "react";
import {useNavigate} from "react-router-dom";
import {Paths} from "@/app/providers/routerProvider";
import {useAuth} from "@/app/providers/AuthProvider";

interface Props {
    children: ReactNode
}


const ProtectedRoute = ({children}: Props) => {
    const auth = useAuth()
    const navigate = useNavigate()

    useEffect(() => {
        if (auth?.session === null || auth?.session === undefined) {
            navigate(Paths.AUTH, {replace: true})
        }
    }, [navigate, auth?.session]);

    if (auth?.session) {
        return children
    }
};

export default ProtectedRoute;
