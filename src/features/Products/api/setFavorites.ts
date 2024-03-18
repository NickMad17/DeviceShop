import supabase from "@/app/config/supabase.ts";

export const setFavorites = async (favorites: boolean, productId: number) => {
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
