import supabase from "@/app/config/supabase.ts";
import {MainUser} from "@/features/MainUser";

export const GetUserRole = async () => {
    const {data, error} = await supabase
        .from('users')
        .select('*')
        .eq("id", MainUser.id ? MainUser.id : '')
    if (data) {
        console.log(data)
        const user = data[0]
        MainUser.setUserRole(user.role)
    }

    if (error) {
        console.log(error)
        MainUser.setUserRole('user')
    }
}
