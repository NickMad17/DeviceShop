import {Accordion, AccordionContent, AccordionItem, AccordionTrigger} from "@/shared/shadcnui/ui/accordion.tsx";
import {useEffect, useState} from "react";
import supabase from "@/app/config/supabase.ts";
import {MainUser} from "@/features/MainUser";

interface IHistoryItem {
    id: string;
    created_at: string;
    products: any[];
    total_cost: number;
}

export function HistoryBox() {
    const [history, setHistory] = useState<any>()

    useEffect(() => {
        const getHistory = async () => {
            const {data, error} = await supabase
                .from('history')
                .select('*')
                .eq('user_id', MainUser.id)
            if (data) {
                console.log(data)
                setHistory(data)
            }
            if (error) {
                console.log(error)
            }
        }
        getHistory()
        console.log(history)
    }, []);

    const validTime = (time: number) => {
        if (time < 10) {
            return `0${time}`
        }
        return time
    }

    return (
        history?.length > 0 ? (
            <Accordion type="single" collapsible className="w-full ">
                {history?.map((historyItem: IHistoryItem) => {
                    return (
                        <AccordionItem key={historyItem.id} value={historyItem.id} className='bg-input px-2'>
                            <AccordionTrigger>{historyItem.created_at.substring(0, 10).split("-").reverse().join("/")} {validTime(new Date(historyItem.created_at).getHours())}:{validTime(new Date(historyItem.created_at).getMinutes())}</AccordionTrigger>
                            <AccordionContent className='bg-background rounded-lg mb-3'>
                                <div className='flex flex-col justify-between gap-3 px-8 border-b mb-2 py-5'>
                                    {historyItem.products.map(product => {
                                        return (
                                            <div key={product.name} className='flex justify-between mb-2'>
                                                <p className='text-[15px]'>{product.name}</p>
                                                <p className=' text-[16px]'>кол-во: {product.count}</p>
                                            </div>
                                        )
                                    })}
                                </div>
                                <div className='px-8 flex justify-between'>
                                    <p className='text-[16px]'>Итого:</p>
                                    <p className='text-[16px] '>{historyItem.total_cost} руб</p>
                                </div>
                            </AccordionContent>
                        </AccordionItem>
                    )
                })
                }
            </Accordion>
        ) : (
            <p className='text-center'>Пока вы ничего не заказывали</p>
        )
    )
}
