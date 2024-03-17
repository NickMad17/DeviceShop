import supabase from "@/app/config/supabase.ts";
import MainUser from "../store/MainUser.ts";


export const userPostPublicDataBase = async (id: string | undefined, email: string) => {
    const {data, error} = await supabase
        .from('users')
        .insert({
            id: id ? id : "",
            email
        })
    if (data) {
        console.log(data)
    }
    if (error) {
        MainUser.setUser(data, error.message)
    }

}
