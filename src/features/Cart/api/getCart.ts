import supabase from "@/app/config/supabase.ts";
import CartStore from "@/features/Cart/store/CartStore.ts";
import {MainUser} from "@/features/MainUser";

export const getCart = async () => {
        const id = MainUser.id || ''
        let { data, error } = await supabase
            .from('cart')
            .select('products')
            .eq('id', id)
        if (data) {
            const dataProducts = data[0].products
            CartStore.setCart(dataProducts)
            CartStore.setCounter(dataProducts.length)
        }
        if (error) {
            CartStore.setCart(null,error.message)
        }
}