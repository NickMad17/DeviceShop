import supabase from "@/app/config/supabase.ts";
import MainUser from "../store/MainUser.ts";
import {userPostPublicDataBase} from "./userPostDataBase.ts";

export const registration = async (email: string, password: string) => {
    MainUser.setLoading(true)
    const {data, error} = await supabase.auth.signUp({
        email: email,
        password: password
    })
        .finally(() => {
            MainUser.setLoading(false)
        })
    if (data) {
        localStorage.setItem('token', JSON.stringify(data.session))
        MainUser.setUser(data.session)
        setTimeout(() => {
            userPostPublicDataBase(data.user?.id, email)
        },500)
    }
    if (error) {
        MainUser.setUser(data.session, error.message)
    }
}
