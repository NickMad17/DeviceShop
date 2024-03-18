import {Header} from "@/widget/Header";
import {PageLayout, TabGradientBg} from "@/shared";
import {useTheme} from "@/app/providers/ThemeProvider";
import {SortingBox} from "@/widget/SortingBox";
import {ProductBox} from "@/widget/ProductBox";
import {NavBar} from "@/widget/NavBar";
import {getProducts} from "@/features/Products";

const Home = () => {
    const {theme} = useTheme()

    return (
        <>
            <Header/>
            {theme !== 'light' && <TabGradientBg containerClassName='fixed z-[-10]'/>}
            <PageLayout>
                <NavBar/>
                <div className="center">
                    <SortingBox/>
                    <ProductBox getProducts={getProducts}/>
                </div>
            </PageLayout>
        </>
    );
};

export default Home;
