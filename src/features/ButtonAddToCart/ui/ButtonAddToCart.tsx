import {CartStore, deleteApiCartItem, setApiCart} from "@/features/Cart";
import {Card} from "@/shared/shadcnui/ui/card.tsx";
import {Button} from "@/shared/shadcnui/ui/button.tsx";
import {Plus} from "lucide-react";
import {observer} from "mobx-react-lite";
import {useEffect, useState} from "react";
import {Loader} from "@/shared";
import {toast} from "sonner";

interface Props {
    productId: number
}

const ButtonAddToCart = observer(({productId}: Props) => {
    const [disabled, setDisabled] = useState<boolean>(false)
    const data = CartStore.data?.find(el => el.id === productId)?.count

    useEffect(() => {
        setDisabled(false)
    }, [CartStore.data]);
    const addToCart = () => {
        setDisabled(true)
        setApiCart(productId)
        toast.success('Товар добавлен')
    }

    const increment = () => {
        setDisabled(true)
        setApiCart(productId)
    }

    const decrement = () => {
        setDisabled(true)
        deleteApiCartItem(productId)
    }
    // @ts-ignore
    return (
        <>
            {(CartStore.data && CartStore.data.find(el => el.id === productId && (el.count !== 0))) ?
                (
                    <Card className='w-full flex justify-between items-center p-0 overflow-hidden'>
                        <Button disabled={disabled} onClick={decrement} variant='secondary' className='w-20 '>
                            <p className='text-xl mb-1'>-</p>
                        </Button>
                        <p className='text-[19px]'>{disabled ? <Loader className='h-6 w-6'/> : data}</p>
                        <Button disabled={disabled} onClick={increment} variant='secondary' className='w-20 '>
                            <p className='text-xl mb-1'>+</p>
                        </Button>
                    </Card>
                )
                :
                (
                    <Button disabled={disabled} onClick={addToCart} className="w-full"
                            variant={disabled ? 'secondary' : 'default'}>
                        {disabled ?
                            <Loader className='h-7 w-7'/>
                            :
                            <>
                                <Plus className="mr-2 h-4 w-4"/>
                                <span>Добавить в корзину</span>
                            </>
                        }
                    </Button>
                )}
        </>
    );
});

export default ButtonAddToCart;
