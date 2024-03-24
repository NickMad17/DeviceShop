import {Button} from "@/shared/shadcnui/ui/button.tsx";
import {CartStore, deleteApiCart, getCart} from "@/features/Cart";
import {setHistory} from "@/features/ButtonAddHistory/api/setHistory.ts";
import {getProducts} from "@/features/Products";
import {toast} from "sonner";
import {useState} from "react";
import {Loader} from "@/shared";

interface Props {
    total: number
}

const ButtonAddHistory = ({total}: Props) => {
    const [loading, setLoading] = useState<boolean>(false)
    const createHistory = () => {
        setLoading(true)
        setHistory(total)
            .then(() => deleteApiCart())
            .then(() => getCart())
            .then(() => getProducts())
            .finally(() => {
                CartStore.reset()
                toast.success('ваш заказ умпешно выполнен')
                setLoading(false)
            })
    }

    return (
        <Button className='mt-8' disabled={loading} onClick={createHistory}>{loading ? <Loader className='w-6 h-6'/>: "Оформить заказ"}</Button>
    );
};

export default ButtonAddHistory;
