import {Header} from "@/widget/Header";
import {PageLayout} from "@/shared";
import {useEffect} from "react";

const FavoritesPage = () => {
    useEffect(() => {
        console.log('данная страница находится в разработке')
    }, []);

    //TODO: данная страница находится в разработке
    return (
        <>
        <Header/>
            <PageLayout>
                <h2 className='text-3xl font-medium mt-5 text-center mb-6'>Избранное</h2>
                {/*<ProductBox getProducts={getFavoritesProducts}/>*/}
                <p className='text-center text-xl text-primary'>данная страница находится в разработке</p>
            </PageLayout>
        </>
    );
};

export default FavoritesPage;
