import supabase from "@/app/config/supabase.ts";
import MainUser from "../store/MainUser.ts";

export const login = async (email: string, password: string) => {
    MainUser.setLoading(true)
    const {data, error} = await supabase.auth.signInWithPassword({
        email: email,
        password: password
    })
        .finally(() => {
            MainUser.setLoading(false)
        })
    if (data) {
        MainUser.setUser(data.session)
    }
    if (error) {
        MainUser.setUser(data.session, error.message)
    }
}
