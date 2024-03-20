import supabase from "@/app/config/supabase.ts";
import {MainUser} from "@/features/MainUser";

export const deleteApiCart = async () => {
    const id = MainUser.id ? MainUser.id : ''
    const { error } = await supabase
        .from('cart')
        .delete()
        .eq('id', id)
    if (error) {
        console.log(error)
    }
}