import {Header} from "@/widget/Header";
import {PageLayout} from "@/shared";
import {CartProductBox} from "@/widget/CartProductBox";

const CartPage = () => {
    return (
        <>
            <Header/>
            <PageLayout>
                <h2 className='text-3xl font-medium mt-5 text-center mb-6 '>Корзина</h2>
                <div className="center mt-6">
                    <CartProductBox className='flex flex-col bg-popover p-4'/>
                </div>
            </PageLayout>
        </>
    );
};

export default CartPage;