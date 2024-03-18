import {Card, CardContent, CardFooter, CardTitle} from "@/shared/shadcnui/ui/card.tsx";
import {cn} from "@/shared/lib/utils.ts";
import {Button} from "@/shared/shadcnui/ui/button.tsx";
import React, {useState} from "react";
import {BackgroundGradient} from "@/shared/ui/Layout/BackgroundGradient.tsx";
import {Heart, Plus} from "lucide-react";
import {Link} from "react-router-dom";
import {Paths} from "@/app/providers/routerProvider";
import {setFavorites} from "@/features/Products";
import {observer} from "mobx-react-lite";


interface CardProps extends React.ComponentProps<typeof Card> {
    productId: number
    name: string | null
    url: string
    price: number | null
    favorites: boolean
}

export const CardProduct = observer(({className, productId, name, url, price, favorites, ...props}: CardProps) => {
    const [cart, setCart] = useState<boolean>(false)
    const [productCount, setProductCount] = useState<number>(0)
    const [favoritesClient, setFavoritesClient] = useState<boolean>(favorites)
    const handleFavorites = () => {
        setFavorites(!favorites, productId).finally(() => setFavoritesClient(!favoritesClient))
    }

    const addToCart = () => {
        setProductCount(1)
        setCart(!cart)
    }

    const increment = () => {
        setProductCount(prevState => {
            return prevState + 1
        })
    }

    const decrement = () => {
        setProductCount(prevState => {
            const value = prevState - 1
            if (value === 0) {
                setCart(false)
            }
            return value
        })

        console.log(productCount)
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
                            <Button variant='ghost' className='p-2' onClick={handleFavorites}>
                                <Heart className={favoritesClient ? 'fill-foreground' : ''}/>
                            </Button>
                        </div>
                    </div>
                </CardContent>
                <CardFooter className='flex gap-3'>
                    {cart ?
                        (
                            <Card className='w-full flex justify-between items-center p-0 overflow-hidden'>
                                <Button onClick={decrement} variant='secondary' className='w-20 '>
                                    <p className='text-xl mb-1'>-</p>
                                </Button>
                                <p className='text-[19px]'>{productCount}</p>
                                <Button onClick={increment} variant='secondary' className='w-20 '>
                                    <p className='text-xl mb-1'>+</p>
                                </Button>
                            </Card>
                        )
                        :
                        (
                            <Button onClick={addToCart} className="w-full">
                                <Plus className="mr-2 h-4 w-4"/> <span>Добавить в корзину</span>
                            </Button>
                        )}
                </CardFooter>
            </Card>
        </BackgroundGradient>
    )
})
