import {CartStore, getCart} from "@/features/Cart";
import {MainUser} from "@/features/MainUser";
import {change, create} from "@/features/Cart/api/funcsCartApi.ts";

export const setApiCart = (productId: number) => {
    const id = MainUser.id || ''
    const CartItem = CartStore.data?.find(el => el.id === productId)

    if (CartStore.data) {
        if (CartItem) {
            console.log('изменяем корзину пользователя')
            // если есть такой элимент в корзине пользователя
            change(id, CartItem).then(() => {
                getCart()
            })

        } else {
            // если его нет
            change(id, {id: productId, count: 1}, true).then(() => {
                getCart()
            })
        }

    } else {
        console.log('создаем корзину пользователя')
        create(id, productId).then(() => {
            getCart()
        })
    }
}

