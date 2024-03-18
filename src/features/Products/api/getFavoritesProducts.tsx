import supabase from "@/app/config/supabase.ts";
import Products from "@/features/Products/store/Products.ts";

export const getFavoritesProducts = async () => {
    const { data , error } = await supabase
        .from('products')
        .select('*')
        .eq('favorites', true)
    if (data) {
        Products.setProduct(data)
    }

    if (error) {
        Products.setProduct(data, error.message)
    }
}
