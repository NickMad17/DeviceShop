import {Accordion, AccordionContent, AccordionItem, AccordionTrigger} from "@/shared/shadcnui/ui/accordion.tsx";
import {useEffect, useState} from "react";
import supabase from "@/app/config/supabase.ts";
import {MainUser} from "@/features/MainUser";


export function AccordionBox() {
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

    return (
        history?.length > 0 ? (
            <Accordion type="single" collapsible className="w-full ">
                {history?.map(historyItem => {
                    return (
                        <AccordionItem key={historyItem.id} value={historyItem.id} className='bg-input px-2'>
                            <AccordionTrigger>{historyItem.created_at}</AccordionTrigger>
                            <AccordionContent>
                                <div className='flex flex-col justify-between py-1 px-8 '>
                                    {historyItem.products.map(product => {
                                        return (
                                            <div key={product.name} className='flex justify-between'>
                                                <p className='text-[15px]'>{product.name}</p>
                                                <p className=' text-[16px]'>кол-во: {product.count}</p>
                                            </div>
                                        )
                                    })}
                                    <p className='text-end mt-3 text-[16px]'>{historyItem.total_cost} руб</p>

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
