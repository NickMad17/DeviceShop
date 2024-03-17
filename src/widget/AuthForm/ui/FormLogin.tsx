import {Form, FormControl, FormField, FormItem, FormLabel, FormMessage} from "@/shared/shadcnui/ui/form.tsx";
import {Input} from "@/shared/shadcnui/ui/input.tsx";
import {Button} from "@/shared/shadcnui/ui/button.tsx";
import {useForm} from "react-hook-form";
import * as z from "zod";
import {zodResolver} from "@hookform/resolvers/zod";
import {formSchemaLogin} from "@/widget/AuthForm/types/fromShems.ts";
import {useNavigate} from "react-router-dom";
import {Paths} from "@/app/providers/routerProvider";
import {useAuth} from "@/app/providers/AuthProvider";
import {login, MainUser} from "@/features/MainUser";
import {toast} from "sonner";


const FormRegistration = () => {
        const navigate = useNavigate()
        const auth = useAuth()


        const form = useForm<z.infer<typeof formSchemaLogin>>({
            resolver: zodResolver(formSchemaLogin),
            defaultValues: {
                emailAddress: '',
                password: '',
            }
        })

        const handleSubmit = (values: z.infer<typeof formSchemaLogin>) => {
            console.log('accepted', values)
            login(values.emailAddress, values.password).then(() => {
                console.log(MainUser);
                if (MainUser.error) {
                    toast.error(MainUser.error)
                    MainUser.error = null
                    const token = JSON.parse(localStorage.getItem('token') || 'null')
                    if (token !== null && token !== 'null') {
                        setTimeout(() => {
                            navigate(Paths.HOME)
                        }, 300)
                    } else {
                        localStorage.removeItem('token')
                    }

                } else {
                    auth?.setSession(MainUser.data);
                    toast.success('Access')
                    console.log(MainUser, 'accepted')
                    setTimeout(() => {
                        navigate(Paths.HOME);
                    }, 500);
                }
            })
        }


        return (
            <Form {...form}>
                <form className='flex flex-col justify-between h-[100%] mt-10 '
                      onSubmit={form.handleSubmit(handleSubmit)}>
                    <div>
                        <FormField control={form.control} name="emailAddress" render={({field}) => {
                            return (
                                <FormItem className='pb-5'>
                                    <FormLabel>Email Address</FormLabel>
                                    <FormControl>
                                        <Input placeholder='Email Adress'  {...field}/>
                                    </FormControl>
                                    <FormMessage/>
                                </FormItem>
                            )
                        }}/>
                        <FormField control={form.control} name="password" render={({field}) => {
                            return (
                                <FormItem className='pb-5'>
                                    <FormLabel>Password</FormLabel>
                                    <FormControl>
                                        <Input placeholder='Password' type='password' {...field}/>
                                    </FormControl>
                                    <FormMessage/>
                                </FormItem>
                            )
                        }}/>
                    </div>
                    <Button type="submit" className='w-[100%]'>Save changes</Button>
                </form>
            </Form>
        )
    }
;

export default FormRegistration;
