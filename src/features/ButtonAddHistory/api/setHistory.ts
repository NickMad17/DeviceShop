import supabase from "@/app/config/supabase.ts";
import {MainUser} from "@/features/MainUser";
import {CartStore} from "@/features/Cart";

interface ProductHistory {
    name: string,
    count: number | string | undefined
}

export const setHistory = async (total: number) => {
    const uId = MainUser.id ? MainUser.id : ''
    const products: ProductHistory[] = []
    CartStore.detailedData?.forEach(detailProduct => {
        CartStore.data?.forEach(product => {
            if (product.id === detailProduct.id) {
                products.push({
                    name: detailProduct.name,
                    count: product.count
                })
            }
        })
    })
    const {data, error} = await supabase
        .from('history')
        .insert({
            user_id: uId,
            total_cost: total,
            products
        })
    if (data) {
        console.log(data)
    }
    if (error) {
        console.log(error)
    }
}