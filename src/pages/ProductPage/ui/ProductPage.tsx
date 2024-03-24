import {PageLayout, PageLoader, Swiper} from "@/shared";
import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import {Header} from "@/widget/Header";
import {getProducts, Product, Products} from "@/features/Products";
import {ButtonAddToCart} from "@/features/ButtonAddToCart";

const ProductPage = () => {

    const {productId} = useParams<{ productId: string }>()
    const id = productId ? +productId : 0
    const [thisProduct, setThisProduct] = useState<Product | undefined>(undefined)

    const img = () => {
        if (thisProduct?.photo_count) {
            return thisProduct.photo_count
        }
        return 1
    }
    useEffect(() => {
        Products.setNullProduct()
        Products.setLoading(true)
        getProducts()
            .finally(
                () => {
                    setThisProduct(Products.data?.find(product => product.id === id))
                    Products.setLoading(false)
                }
            )
    }, []);


    return (
        <>
            <Header/>
            {!Products.loading ? (
                    <PageLayout>
                        <div className='flex pt-10 gap-36 px-28'>
                            <div>
                                <Swiper id={id} imgCount={img()}/>
                            </div>
                            <div>
                                <h2 className='text-3xl mb-8'>{thisProduct?.name}</h2>
                                <div className='flex flex-col gap-2'>
                                    {thisProduct?.description?.split('<').map((el, index) => {
                                        return (
                                            <p key={index} className='text-xl'>{el}</p>
                                        )
                                    })}
                                </div>
                                <p className='text-2xl mt-20'>{thisProduct?.price} руб</p>
                                <div className="mt-20 w-5/12">
                                    <ButtonAddToCart productId={id}/>
                                </div>
                            </div>
                        </div>
                    </PageLayout>)
                :
                (
                    <PageLoader/>
                )
            }
        </>
    );
};

export default ProductPage;
