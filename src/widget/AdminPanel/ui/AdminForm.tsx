import {Form, FormControl, FormField, FormItem, FormLabel, FormMessage} from "@/shared/shadcnui/ui/form.tsx";
import {Input} from "@/shared/shadcnui/ui/input.tsx";
import {Button} from "@/shared/shadcnui/ui/button.tsx";
import * as z from "zod";
import {useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import {ChangeEvent, useState} from "react";
import supabase from "@/app/config/supabase.ts";

const AdminForm = () => {
    const [img, setImg] = useState< any >(null)
    const formSchema = z.object({
        img: z.any(),
        name: z.string().min(1),
        description: z.string().min(6),
        type: z.string().min(1),
        price: z.string().min(1),
        colors: z.string().min(1),
    })

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            img: '',
            name: '',
            description: '',
            type: '',
            price: '',
            colors: '',
        }
    })
    const handleSubmit = (values: z.infer<typeof formSchema>) => {
        console.log(values, img)

        const add = async () => {
            const {data, error} = await supabase.storage
                .from('products_img')
                .upload('2' + '/' + `product-${Date.now()}.webp`, img)
            if (data) {
                console.log(data)
            }
            if (error) {
                console.log(error)
            }
        }
        add()


    }

    const change = (e: ChangeEvent<HTMLInputElement>) => {
        const file = e?.target?.files
        // @ts-ignore
            setImg(file[0])
    }


    return (
        <Form {...form}>
            <form className='flex flex flex-col justify-between h-[100%] mt-2'
                  onSubmit={form.handleSubmit(handleSubmit)}>
                <div>
                    {img && <img className='w-52' src={URL.createObjectURL(img)} alt="картинка"/>}
                    <FormField control={form.control} name="img" render={() => {
                        return (
                            <FormItem className='pb-5'>
                                <FormLabel>Имя</FormLabel>
                                <FormControl>
                                    <Input className='bg-input' type="file" onChange={change}
                                           multiple/>
                                </FormControl>
                                <FormMessage/>
                            </FormItem>
                        )
                    }}/>
                    <FormField control={form.control} name="name" render={({field}) => {
                        return (
                            <FormItem className='pb-5'>
                                <FormLabel>Имя</FormLabel>
                                <FormControl>
                                    <Input className='bg-input' type='text'
                                           placeholder='Введите имя товара' {...field}/>
                                </FormControl>
                                <FormMessage/>
                            </FormItem>
                        )
                    }}/>
                    <FormField control={form.control} name="type" render={({field}) => {
                        return (
                            <FormItem className='pb-5'>
                                <FormLabel>Категория</FormLabel>
                                <FormControl>
                                    <Input className='bg-input' type='text'
                                           placeholder='Введите котегорию товра'{...field}/>
                                </FormControl>
                                <FormMessage/>
                            </FormItem>
                        )
                    }}/>
                    <FormField control={form.control} name="description" render={({field}) => {
                        return (
                            <FormItem className='pb-5'>
                                <FormLabel>Описание</FormLabel>
                                <FormControl>
                                    <Input className='bg-input' type='text'
                                           placeholder='Введите описание товра' {...field}/>
                                </FormControl>
                                <FormMessage/>
                            </FormItem>
                        )
                    }}/>
                    <FormField control={form.control} name="price" render={({field}) => {
                        return (
                            <FormItem className='pb-5'>
                                <FormLabel>Цена</FormLabel>
                                <FormControl>
                                    <Input className='bg-input' type='number'
                                           placeholder='Введите цену товара в рублях' {...field}/>
                                </FormControl>
                                <FormMessage/>
                            </FormItem>
                        )
                    }}/>
                    <FormField control={form.control} name="colors" render={({field}) => {
                        return (
                            <FormItem className='pb-5'>
                                <FormLabel>Цвета</FormLabel>
                                <FormControl>
                                    <Input className='bg-input' type='text'
                                           placeholder='Введите цвета через пробел' {...field}/>
                                </FormControl>
                                <FormMessage/>
                            </FormItem>
                        )
                    }}/>
                </div>
                <Button type="submit" className='w-[100%]'>Добавить товар</Button>
            </form>
        </Form>
    );
};

export default AdminForm;
