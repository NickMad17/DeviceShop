import {Header} from "@/widget/Header";
import {PageLayout} from "@/shared";
import {ProductBox} from "@/widget/ProductBox";
import {getFavoritesProducts} from "@/features/Products";

const FavoritesPage = () => {
    return (
        <>
        <Header/>
            <PageLayout>
                <h2 className='text-3xl font-medium mt-5 text-center mb-6'>Избранное</h2>
                <ProductBox getProducts={getFavoritesProducts}/>
            </PageLayout>
        </>
    );
};

export default FavoritesPage;
