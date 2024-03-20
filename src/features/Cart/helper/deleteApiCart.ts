import {MainUser} from "@/features/MainUser";
import {CartStore, getCart} from "@/features/Cart";
import {deleteItem, removeList} from "@/features/Cart/api/funcsCartApi.ts";

export const deleteApiCartItem = (productId: number) => {
    const id = MainUser.id || ''
    const CartItem = CartStore.data?.find(el => el.id === productId)
    if ((CartItem?.count && typeof CartItem?.count !== "string") && CartItem?.count > 1) {
        console.log(CartItem.count)
        deleteItem(id, CartItem).then(() => {
            getCart()
        })
    } else {
        console.log('no')
        //Todo: добавить функицию удаления
        removeList(id, productId).then(() => {
            getCart()
        })
    }
}