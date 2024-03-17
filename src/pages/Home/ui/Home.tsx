import {Header} from "@/widget/Header";
import {PageLayout, TabGradientBg} from "@/shared";
import {useEffect} from "react";
import {getProducts, Products} from "@/features/Products";
import {observer} from "mobx-react-lite";
import {baseImageUrl} from "@/app/config/supabase.ts";
import {TriangleAlert} from "lucide-react";
import {Alert, AlertDescription, AlertTitle} from "@/shared/shadcnui/ui/alert.tsx";
import {CardProduct, SkeletonProductCard} from "@/widget/CardProduct";
import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue} from "@/shared/shadcnui/ui/select.tsx";
import {useTheme} from "@/app/providers/ThemeProvider";

const Home = observer(() => {
    const {theme} = useTheme()
    useEffect(() => {
        Products.setLoading(true)
        getProducts()
            .finally(
                () => Products.setLoading(false)
            )
    }, []);
    return (
        <>
            <Header/>
            {theme == 'dark' && <TabGradientBg containerClassName='fixed z-[-10]'/>}
            <PageLayout>
                <div className='bg-transparent  rounded-lg mb-6 p-[10px] flex justify-between items-center'>
                    <h2 className='bg-background border py-2 px-5'>Комрьютеры</h2>
                    <div className="flex justify-end gap-5">
                        <div className="w-[180px] bg-background">
                            <Select>
                                <SelectTrigger className="w-[180px]">
                                    <SelectValue placeholder="Продукты"/>
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="light">Light</SelectItem>
                                    <SelectItem value="dark">Dark</SelectItem>
                                    <SelectItem value="system">System</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                        <div className="w-[180px] bg-input">
                            <Select>
                                <SelectTrigger className="w-[180px]">
                                    <SelectValue placeholder="Сортровка"/>
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="light">Сначала новые</SelectItem>
                                    <SelectItem value="dark">Сначаала дешевые</SelectItem>
                                    <SelectItem value="system">Сначала дорогие</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                    </div>
                </div>
                <div className='flex gap-2 flex-wrap justify-center'>

                    {Products.data && Products.data?.map((product) => {
                        return (

                            <CardProduct key={product.id} name={product.name} price={product.price}
                                         favorites={product.favorites}
                                         productId={product.id}
                                         url={`${baseImageUrl}/products_img/${product.id}/1.webp`}/>
                        )
                    })}
                </div>

                <div className='flex gap-3 flex-wrap justify-center'>
                    {Products.error && (
                        <Alert variant='destructive'>
                            <TriangleAlert className="h-4 w-4 "/>
                            <AlertTitle>Error</AlertTitle>
                            <AlertDescription>
                                {Products.error}
                            </AlertDescription>
                        </Alert>
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
                        </>
                    )}
                </div>
            </PageLayout>
        </>
    );
});

export default Home;
