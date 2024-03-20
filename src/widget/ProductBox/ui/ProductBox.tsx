import {Products} from "@/features/Products";
import {CardProduct, SkeletonProductCard} from "@/widget/CardProduct";
import {baseImageUrl} from "@/app/config/supabase.ts";
import {Alert, AlertDescription, AlertTitle} from "@/shared/shadcnui/ui/alert.tsx";
import {TriangleAlert} from "lucide-react";
import {useEffect} from "react";
import {observer} from "mobx-react-lite";

interface Props {
    getProducts: () => Promise<void>
}

const ProductBox = observer(({getProducts}: Props) => {
    useEffect(() => {
        Products.setNullProduct()
        Products.setLoading(true)
        getProducts()
            .finally(
                () => Products.setLoading(false)
            )
    }, []);

    return (
        <>
            <div className='flex gap-3 flex-wrap justify-center'>

                {Products.data && Products.data?.map((product) => {
                    return (

                        <CardProduct key={product.id} name={product.name} price={product.price}
                                     favorites={product.favorites}
                                     productId={product.id}
                                     url={`${baseImageUrl}/products_img/${product.id}/1.webp`}/>
                    )
                })}
            </div>

            <div className='absolute left-0 top-auto center w-full'>
                <div className='flex gap-3 flex-wrap justify-center'>
                    {Products.error && (
                        <div className='w-full'>
                            <Alert variant='destructive' className='w-[100%]'>
                                <TriangleAlert className="h-4 w-4 "/>
                                <AlertTitle>Error</AlertTitle>
                                <AlertDescription>
                                    {Products.error}
                                </AlertDescription>
                            </Alert>
                        </div>
                    )}
                    {Products.loading && (
                        <>
                            <SkeletonProductCard/>
                            <SkeletonProductCard/>
                            <SkeletonProductCard/>
                            <SkeletonProductCard/>
                            <SkeletonProductCard/>
                            <SkeletonProductCard/>
                            <SkeletonProductCard/>
                            <SkeletonProductCard/>
                            <SkeletonProductCard/>
                            <SkeletonProductCard/>
                            <SkeletonProductCard/>
                            <SkeletonProductCard/>
                        </>
                    )}
                </div>
            </div>
        </>
    );
});

export default ProductBox;
