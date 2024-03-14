import supabase from "@/app/config/supabase.ts";
import MainUser from "../../store/MainUser.ts";


export const userPostPublicDataBase = async (id: string | undefined, first_name: string, last_name: string) => {
    const {data, error} = await supabase
        .from('profiles')
        .insert({
            id: id ? id : "",
            first_name,
            last_name
        })
    if (data) {
        console.log(data)
    }
    if (error) {
        MainUser.setUser(data, error.message)
    }

}
