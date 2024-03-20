import supabase from "@/app/config/supabase.ts";
import {CartStore, CartType} from "@/features/Cart";
export const create = async (id:string, productId:number) => {
    const { data, error } = await supabase
        .from('cart')
        .insert({
            id: id,
            products: [{id: productId, count: 1}]
        })
        .eq('id', id)
        .select()
    if (data) {
        console.log(data)
    }
    if (error) {
        console.log(error)
    }
}

export const change = async (id:string, CartItem: CartType, newParams: boolean = false) => {
    let newData;

    if (newParams) {
        newData = CartStore.data ? [...CartStore.data, CartItem]: CartItem
    } else {
        // TODO: перенести в CartStore
        newData = CartStore.data?.map(el => {
            if (el.id === CartItem.id && typeof el.count === "number") {
                el.count = el.count + 1
                return el
            }
            return el
        })
    }

    const { data, error } = await supabase
        .from('cart')
        .update({
            products: newData
        })
        .eq('id', id)
        .select()
    if (data) {
        console.log(data)
    }
    if (error) {
        console.log(error)
    }
}

export const removeList = async (id:string, productId: number) => {
    const newData = CartStore.data?.filter(el =>  (el.id !== productId))
    const { data, error } = await supabase
        .from('cart')
        .update({
            products: newData
        })
        .eq('id', id, )
        .select()
    if (data) {
        console.log(data)
    }
    if (error) {
        console.log(error)
    }
}

export const deleteItem = async (id:string, cartItem: CartType) => {
    const newData: CartType[] | undefined = CartStore.data?.map(el => {
        if (el.id === cartItem.id && typeof el.count === "number") {
            el.count = el.count - 1
            return el
        }
        return el
    })

    const { data, error } = await supabase
        .from('cart')
        .update({
            products: newData
        })
        .eq('id', id, )
        .select()
    if (data) {
        console.log(data)
    }
    if (error) {
        console.log(error)
    }
}