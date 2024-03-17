import supabase from "@/app/config/supabase.ts";
import {getProducts} from "@/features/Products";

export const setFavorites = (favorites: boolean, productId: number) => {
    const push = async () => {
        const {data, error} = await supabase
            .from('products')
            .update({favorites})
            .eq('id', productId)

        if (data) {
            console.log(data)
        }

        if (error) {
            console.log(error)
        }
    }
    return push().then(
        () => getProducts()
    )
}
