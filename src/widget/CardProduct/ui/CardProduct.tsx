import {Card, CardContent, CardFooter, CardTitle} from "@/shared/shadcnui/ui/card.tsx";
import {cn} from "@/shared/lib/utils.ts";
import {Button} from "@/shared/shadcnui/ui/button.tsx";
import React, {useState} from "react";
import {BackgroundGradient} from "@/shared/ui/Layout/BackgroundGradient.tsx";
import {Heart} from "lucide-react";
import {Link} from "react-router-dom";
import {Paths} from "@/app/providers/routerProvider";
import {setFavorites} from "@/features/Products";
import {observer} from "mobx-react-lite";
import {ButtonAddToCart} from "@/features/ButtonAddToCart";
import {toast} from "sonner";


interface CardProps extends React.ComponentProps<typeof Card> {
    productId: number
    name: string | null
    url: string
    price: number | null
    favorites: boolean
}

export const CardProduct = observer(({className, productId, name, url, price, favorites, ...props}: CardProps) => {
    const [favoritesClient, setFavoritesClient] = useState<boolean>(favorites)
    const [disabled, setDisebled] = useState<boolean>(false)
    const handleFavorites = () => {
        setDisebled(true)
        setFavorites(!favorites, productId).finally(() => {
            setFavoritesClient(!favoritesClient)
            if (!favoritesClient) {
                toast.message('Товар добавлен в избранное')
            } else {
                toast.message('Товар удален из избранного')
            }
            setDisebled(false)
        })
    }


    return (
        <BackgroundGradient>
            <Card
                className={cn("w-[350px] min-h-[545px] max-[700px]:min-h-[450px] rounded-3xl", className)} {...props}>
                <CardContent className="grid gap-4 mt-7">

                    <div className='w-[100%] overflow-hidden'>
                        <div
                            className="rounded-xl overflow-hidden no-scrollbar w-[100%] h-[300px] flex items-center">
                            <img
                                src={url} alt='product'/>
                        </div>
                        <div className=" h-[90px] ">
                            <Link to={Paths.PRODUCT}>
                                <CardTitle
                                    className='text-2xl line-clamp-2 hover:text-blue-400 transition'>{name}</CardTitle>
                            </Link>
                        </div>
                        <div className='flex justify-between'>
                            <p className='text-2xl font-medium'><span
                                className='font-bold'>{price}</span> руб</p>
                            <Button disabled={disabled} variant='ghost' className='p-2' onClick={handleFavorites}>
                                <Heart className={favoritesClient ? 'fill-foreground' : ''}/>
                            </Button>
                        </div>
                    </div>
                </CardContent>
                <CardFooter className='flex gap-3'>
                    <ButtonAddToCart productId={productId}/>
                </CardFooter>
            </Card>
        </BackgroundGradient>
    )
})
