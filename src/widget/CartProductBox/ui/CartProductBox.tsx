import {CartStore, getCart} from "@/features/Cart";
import {Card} from "@/shared/shadcnui/ui/card.tsx";
import {ButtonAddToCart} from "@/features/ButtonAddToCart";
import {useEffect, useState} from "react";
import {getProducts} from "@/features/Products";
import {baseImageUrl} from "@/app/config/supabase.ts";
import {observer} from "mobx-react-lite";
import {Loader} from "@/shared";
import {ButtonAddHistory} from "@/features/ButtonAddHistory";

interface Props {
    className: string
}
const CartProductBox = observer(({className}: Props) => {
    const [total, setTotal] = useState<number>(0)

    useEffect(() => {
        setTotal(0)
        getCart().then(
            () => getProducts()
        )
        CartStore.detailedData?.forEach((detaile) => {
            CartStore.data?.forEach(data => {
                if (data.id === detaile.id) {
                    // @ts-ignore
                    setTotal(prevState => prevState + detaile.price * data.count)
                }
            })
        })
    }, [CartStore.data]);

    return (
        <Card className={className}>
            {!CartStore.detailedData && <div className='w-full flex justify-center'><Loader/></div>}
            {CartStore.detailedData?.length === 0 && <p>В корзине пока пусто</p>}
            {CartStore.detailedData?.map(product => {
                return (
                    <Card key={product.id} className='bg-background p-5 mt-4 flex gap-20 m-h-[400px] '>
                        <div className=" h-full flex items-center pl-7 pt-7 overflow-hidden">
                            <img className='w-[300px]' src={`${baseImageUrl}/products_img/${product.id}/1.webp`} alt="товар"/>
                        </div>
                        <div className="flex flex-col gap-4 justify-between my-8 ">
                            <div className='flex flex-col gap-2'>
                                <h2>{product.name}</h2>
                                {/*<ul>{product.description?.split('<').map(el => <li>{el}</li>)}</ul>*/}
                                <p>{product.price} руб</p>
                            </div>
                            <div className="flex justify-between gap-36 items-end">
                                <div className="w-[250px]">
                                    <ButtonAddToCart productId={product.id}/>
                                </div>
                                <p className='text-xl'>{product.price} руб</p>
                            </div>
                        </div>
                    </Card>
                )
            })}
            {(CartStore.detailedData && CartStore.detailedData.length > 0) && <>
              <p className='text-end text-xl pr-10 pt-8'>Итого <span className='text-primary'>{total} руб</span></p>
              <ButtonAddHistory total={total}/>
            </>}
        </Card>
    );
});

export default CartProductBox;