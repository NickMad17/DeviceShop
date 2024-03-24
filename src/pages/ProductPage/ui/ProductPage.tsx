import {Loader, PageLayout, Swiper} from "@/shared";
import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import {Header} from "@/widget/Header";
import {getProducts, Product, Products} from "@/features/Products";
import {ButtonAddToCart} from "@/features/ButtonAddToCart";

const ProductPage = () => {

    const {productId} = useParams<{ productId: string }>()
    const id = productId ? +productId : 0
    const [thisProduct, setThisProduct] = useState<Product | undefined>(undefined)
    const [loading, setLoading] = useState<boolean>(false)
    const img = () => {
        if (thisProduct?.photo_count) {
            return thisProduct.photo_count
        }
        return 1
    }
    useEffect(() => {
        Products.setNullProduct()
        setLoading(true)
        getProducts()
            .then(
                () => {
                    setThisProduct(Products.data?.find(product => product.id === id))
                }
            ).finally(() => {
            setLoading(false)
        })
    }, []);


    return (
        <>
            <Header/>
            <PageLayout>
                <div className='flex pt-10 gap-36 px-28'>
                    <div>
                        <Swiper id={id} imgCount={img()}/>
                    </div>
                    {loading ?
                        (
                            <div className='w-full flex justify-center items-center'>
                                <Loader/>
                            </div>
                        )
                        :
                        (
                            <div>
                                <h2 className='text-3xl mb-8'>{thisProduct?.name}</h2>
                                <div className='flex flex-col gap-2'>
                                    {thisProduct?.description?.split('<').map((el, index) => {
                                        return (
                                            <p key={index} className='text-lg'>{el}</p>
                                        )

                                    })}
                                </div>
                                <p className='text-2xl mt-20'>{thisProduct?.price} руб</p>
                                <div className="mt-20 w-60">
                                    <ButtonAddToCart productId={id}/>
                                </div>
                            </div>
                        )
                    }
                </div>
            </PageLayout>
        </>
    );
};

export default ProductPage;
