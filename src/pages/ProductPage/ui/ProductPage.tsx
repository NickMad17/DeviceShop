import {PageLayout, Swiper} from "@/shared";
import {useEffect} from "react";
import {useParams} from "react-router-dom";
import {Header} from "@/widget/Header";

const ProductPage = () => {

    const {productId} = useParams<{ productId: string }>()
    const id = productId ? +productId : null

    useEffect(() => {
        console.log(id)
    }, []);

    return (
        <>
            <Header/>
            <PageLayout>
                <div className='pl-16 pt-10'>
                    <Swiper id={4} imgCount={3}/>
                </div>
            </PageLayout>
        </>
    );
};

export default ProductPage;