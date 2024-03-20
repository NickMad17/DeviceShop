import {useEffect} from "react";
import CartIcon from "@/shared/ui/icons/CartIcon.tsx";
import CartStore from "@/features/Cart/store/CartStore.ts";
import {observer} from "mobx-react-lite";
import {Link} from "react-router-dom";
import {Paths} from "@/app/providers/routerProvider";
import {getCart} from "@/features/Cart";

const Cart = observer(
    () => {
        useEffect(() => {
            CartStore.setLoading(true)
            getCart().finally(() => CartStore.setLoading(false))
            console.log(CartStore.data)
        }, []);
        return (
            <Link to={Paths.CART}>
                <CartIcon productCount={CartStore.cartCounter}/>
            </Link>
        );
    }
);

export default Cart;