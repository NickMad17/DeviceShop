import supabase from "@/app/config/supabase.ts";
import Products from "@/features/Products/store/Products.ts";

export const getProducts = async () => {
    const { data , error } = await supabase
        .from('products')
        .select('*')
    if (data) {
        Products.setProduct(data)
    }

    if (error) {
        Products.setProduct(data, error.message)
    }
}
