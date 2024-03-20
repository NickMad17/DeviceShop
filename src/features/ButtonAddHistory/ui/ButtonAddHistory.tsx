import {Button} from "@/shared/shadcnui/ui/button.tsx";
import {CartStore, deleteApiCart, getCart} from "@/features/Cart";
import {setHistory} from "@/features/ButtonAddHistory/api/setHistory.ts";
import {getProducts} from "@/features/Products";
import {toast} from "sonner";

interface Props {
    total: number
}

const ButtonAddHistory = ({total}: Props) => {

    const createHistory = () => {
        console.log('wd')
        setHistory(total)
            .then(() => deleteApiCart())
            .then(() => getCart())
            .then(() => getProducts())
            .finally(() => {
                CartStore.reset()
                toast.success('ваш заказ умпешно выполнен')
            })
    }

    return (
        <Button className='mt-8' onClick={createHistory}>Оформить заказ</Button>
    );
};

export default ButtonAddHistory;