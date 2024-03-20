import {CartStore, getCart} from "@/features/Cart";
import {Card} from "@/shared/shadcnui/ui/card.tsx";
import {ButtonAddToCart} from "@/features/ButtonAddToCart";
import {useEffect} from "react";
import {getProducts} from "@/features/Products";
import {baseImageUrl} from "@/app/config/supabase.ts";
import {observer} from "mobx-react-lite";
import {Button} from "@/shared/shadcnui/ui/button.tsx";
import {Loader} from "@/shared";

interface Props {
    className: string
}
const CartProductBox = observer(({className}: Props) => {

    useEffect(() => {
        getCart().then(
            () => getProducts()
        )
    }, [CartStore.data?.length]);

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
                                <ul>{product.description?.split('<').map(el => <li>{el}</li>)}</ul>
                                <p>{product.price} руб</p>
                            </div>
                            <div className="w-[250px]">
                                <ButtonAddToCart productId={product.id}/>
                            </div>
                        </div>
                    </Card>
                )
            })}
            {(CartStore.detailedData && CartStore.detailedData.length > 0) && <Button className='mt-8'>Оформить заказ</Button>}
        </Card>
    );
});

export default CartProductBox;