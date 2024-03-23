import {PageLayout, Swiper} from "@/shared";
import {useEffect} from "react";
import {useParams} from "react-router-dom";
import {Header} from "@/widget/Header";
import {Products} from "@/features/Products";
import {ButtonAddToCart} from "@/features/ButtonAddToCart";

const ProductPage = () => {

    const {productId, photo_count} = useParams<{ productId: string, photo_count: string }>()
    const id = productId ? +productId : 0
    const thisProduct = Products.data?.find(product => product.id === id)
    const img = () => {
        if (thisProduct?.photo_count) {
            return thisProduct.photo_count
        }
        return 1
    }
    useEffect(() => {
        console.log(id, photo_count)
    }, []);

    return (
        <>
            <Header/>
            <PageLayout>
                <div className='flex pt-10 gap-36 px-28'>
                    <div className=''>
                        <Swiper id={id} imgCount={img()}/>
                    </div>
                    <div >
                        <h2 className='text-3xl mb-8'>{thisProduct?.name}</h2>
                        <div className='flex flex-col gap-2'>
                            {thisProduct?.description?.split('<').map(el => {
                                return (
                                    <p className='text-xl'>{el}</p>
                                )
                            })}
                        </div>
                            <p className='text-2xl mt-20'>{thisProduct?.price} руб</p>
                        <div className="mt-20 w-5/12">
                            <ButtonAddToCart productId={id}/>
                        </div>
                    </div>
                </div>
            </PageLayout>
        </>
    );
};

export default ProductPage;
