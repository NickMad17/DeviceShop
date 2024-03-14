import {createContext, Dispatch, PropsWithChildren, ReactNode, SetStateAction, useState} from "react";
import {Session} from "@supabase/supabase-js";

interface UserSessionType {
    session: Session | null | undefined
    setSession: Dispatch<SetStateAction<Session | null | undefined>>
}

export const AuthContext = createContext<UserSessionType | null>(null)

interface Props extends PropsWithChildren {
    children: ReactNode
}

const AuthProvider = ({children}: Props) => {
    const token = JSON.parse(localStorage.getItem('token')  || '""')
    const [session, setSession] = useState<Session | null | undefined>(token ? token : null)

    return <AuthContext.Provider value={{
        session,
        setSession
    }}>{children}</AuthContext.Provider>
};

export default AuthProvider;
