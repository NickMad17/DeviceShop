import {CheckIcon} from "@radix-ui/react-icons"
import {Card, CardContent, CardDescription, CardFooter, CardTitle} from "@/shared/shadcnui/ui/card.tsx";
import {cn} from "@/shared/lib/utils.ts";
import {Button} from "@/shared/shadcnui/ui/button.tsx";
import React, {useState} from "react";
import {BackgroundGradient} from "@/shared/ui/Layout/BackgroundGradient.tsx";
import {Plus} from "lucide-react";


interface CardProps extends React.ComponentProps<typeof Card> {
    name: string
    url: string
}

export function CardDemo({className, name, url, ...props}: CardProps) {
    const [cart, setCart] = useState(false)
    return (
        <BackgroundGradient>
            <Card className={cn("w-[340px] rounded-3xl", className)} {...props}>
                <CardContent className="grid gap-4 mt-7">
                    <div className='max-h-[290px] overflow-auto'>
                        <div className="rounded-xl overflow-hidden no-scrollbar">
                            <img className='w-[100%] h-[100%]'
                                 src={url} alt='product'/>
                        </div>
                        <CardTitle className='text-2xl'>{name}</CardTitle>
                        <CardDescription>You have 3 unread messages.</CardDescription>
                    </div>
                </CardContent>
                <CardFooter>
                    <Button onClick={() => setCart(!cart)}
                            className={cn("w-full", cart ? "bg-green-400 hover:bg-green-500" : '')}>
                        {cart ? (
                            <>
                                <CheckIcon className="mr-2 h-4 w-4"/> <span>Удалить из корзины</span>
                            </>
                        ) : (
                            <>
                                <Plus className="mr-2 h-4 w-4"/> <span>Добавить в корзину</span>
                            </>
                        )}
                    </Button>
                </CardFooter>
            </Card>
        </BackgroundGradient>
    )
}
