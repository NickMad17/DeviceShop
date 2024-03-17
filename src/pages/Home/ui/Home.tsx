import {Header} from "@/widget/Header";
import {PageLayout, TabGradientBg} from "@/shared";
import {useTheme} from "@/app/providers/ThemeProvider";
import {SortingBox} from "@/widget/SortingBox";
import {ProductBox} from "@/widget/ProductBox";

const Home = () => {
    const {theme} = useTheme()

    return (
        <>
            <Header/>
            {theme !== 'light' && <TabGradientBg containerClassName='fixed z-[-10]'/>}
            <PageLayout>
                <SortingBox/>
                <ProductBox/>
            </PageLayout>
        </>
    );
};

export default Home;
