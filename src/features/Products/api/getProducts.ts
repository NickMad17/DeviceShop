import supabase from "@/app/config/supabase.ts";
import Products from "@/features/Products/store/Products.ts";
import {CartStore} from "@/features/Cart";

export const getProducts = async () => {
    const {data, error} = await supabase
        .from('products')
        .select('*')
    if (data) {
        const array: number[] = []
        Products.setProduct(data)
        CartStore.data?.forEach(el => {
            array.push(el.id)
        })
        const detailedData = data?.filter(product => array?.find(productCartId => product.id === productCartId))
        CartStore.setDetailedData(detailedData)
    }

    if (error) {
        Products.setProduct(data, error.message)
    }
}
