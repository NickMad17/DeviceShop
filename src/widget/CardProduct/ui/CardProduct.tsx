import {Card, CardContent, CardFooter, CardTitle} from "@/shared/shadcnui/ui/card.tsx";
import {cn} from "@/shared/lib/utils.ts";
import {BackgroundGradient} from "@/shared/ui/Layout/BackgroundGradient.tsx";
import {Link} from "react-router-dom";
import {Paths} from "@/app/providers/routerProvider";
import {observer} from "mobx-react-lite";
import {ButtonAddToCart} from "@/features/ButtonAddToCart";
import {ComponentProps} from "react";


interface CardProps extends ComponentProps<typeof Card> {
    productId: number
    name: string | null
    url: string
    price: number | null
    favorites: boolean
}

export const CardProduct = observer(({className, productId, name, url, price, favorites, ...props}: CardProps) => {
    // const [favoritesClient, setFavoritesClient] = useState<boolean>(favorites)
    // const [disabled, setDisabled] = useState<boolean>(false)
    // const handleFavorites = () => {
        //TODO данная функия находится в разработке
        console.log()
        // setDisabled(true)
        // setFavorites(!favorites, productId).finally(() => {
        //     setFavoritesClient(!favoritesClient)
        //     if (!favoritesClient) {
        //         toast.message('Товар добавлен в избранное')
        //     } else {
        //         toast.message('Товар удален из избранного')
        //     }
        //     setDisabled(false)
        // })
    // }


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
                            <Link to={`${Paths.PRODUCT}/${productId}`}>
                                <CardTitle
                                    className='text-2xl line-clamp-2 hover:text-blue-400 transition'>{name}</CardTitle>
                            </Link>
                        </div>
                        <div className='flex justify-between'>
                            <p className='text-2xl font-medium'><span
                                className='font-bold'>{price}</span> руб</p>
                            {/*<Button disabled={disabled} variant='ghost' className='p-2' onClick={handleFavorites}>*/}
                            {/*    <Heart className={favoritesClient ? 'fill-foreground' : ''}/>*/}
                            {/*</Button>*/}
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
