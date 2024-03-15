import {CardDemo} from "@/widget/CardProduct";
import {PageLayout} from "@/shared";
import {Header} from "@/widget/Header";

const Auth = () => {
    return (<>
            <Header/>
            <PageLayout>
                <h1 className='text-center pb-10 text-3xl font-[600]'>Наушники</h1>
                <div className='flex gap-4 flex-wrap justify-center'>
                    <CardDemo name='Беруши' url='https://doctorhead.ru/upload/resize_cache/webp/iblock/f33/6vmzlcet221b7kx4dy21wzm2z6qdqywk/Edifier-GX07-Grey_photo_1.webp'/>
                    <CardDemo name="То же самое" url="https://doctorhead.ru/upload/resize_cache/webp/iblock/1fa/hmkwdxdojn8n3g2m0ty2lkwhtvvn6s27/Sony-Inzone-H5-Black_photo_1.webp"/>
                    <CardDemo name='Беруши' url='https://doctorhead.ru/upload/resize_cache/webp/iblock/f33/6vmzlcet221b7kx4dy21wzm2z6qdqywk/Edifier-GX07-Grey_photo_1.webp'/>
                    <CardDemo name="То же самое" url="https://doctorhead.ru/upload/resize_cache/webp/iblock/1fa/hmkwdxdojn8n3g2m0ty2lkwhtvvn6s27/Sony-Inzone-H5-Black_photo_1.webp"/>
                    <CardDemo name='Беруши' url='https://doctorhead.ru/upload/resize_cache/webp/iblock/f33/6vmzlcet221b7kx4dy21wzm2z6qdqywk/Edifier-GX07-Grey_photo_1.webp'/>
                    <CardDemo name="То же самое" url="https://doctorhead.ru/upload/resize_cache/webp/iblock/1fa/hmkwdxdojn8n3g2m0ty2lkwhtvvn6s27/Sony-Inzone-H5-Black_photo_1.webp"/>
                    <CardDemo name='Беруши' url='https://doctorhead.ru/upload/resize_cache/webp/iblock/f33/6vmzlcet221b7kx4dy21wzm2z6qdqywk/Edifier-GX07-Grey_photo_1.webp'/>
                    <CardDemo name="То же самое" url="https://doctorhead.ru/upload/resize_cache/webp/iblock/1fa/hmkwdxdojn8n3g2m0ty2lkwhtvvn6s27/Sony-Inzone-H5-Black_photo_1.webp"/>
                    <CardDemo name='Беруши' url='https://doctorhead.ru/upload/resize_cache/webp/iblock/f33/6vmzlcet221b7kx4dy21wzm2z6qdqywk/Edifier-GX07-Grey_photo_1.webp'/>
                    <CardDemo name="То же самое" url="https://doctorhead.ru/upload/resize_cache/webp/iblock/1fa/hmkwdxdojn8n3g2m0ty2lkwhtvvn6s27/Sony-Inzone-H5-Black_photo_1.webp"/>
                    <CardDemo name='Беруши' url='https://doctorhead.ru/upload/resize_cache/webp/iblock/f33/6vmzlcet221b7kx4dy21wzm2z6qdqywk/Edifier-GX07-Grey_photo_1.webp'/>
                    <CardDemo name="То же самое" url="https://doctorhead.ru/upload/resize_cache/webp/iblock/1fa/hmkwdxdojn8n3g2m0ty2lkwhtvvn6s27/Sony-Inzone-H5-Black_photo_1.webp"/>
                </div>
            </PageLayout>
        </>

    )
};

export default Auth;
