import {Form, FormControl, FormField, FormItem, FormLabel, FormMessage} from "@/shared/shadcnui/ui/form.tsx";
import {Input} from "@/shared/shadcnui/ui/input.tsx";
import {Button} from "@/shared/shadcnui/ui/button.tsx";
import {useForm} from "react-hook-form";
import * as z from "zod";
import {zodResolver} from "@hookform/resolvers/zod";
import {formSchemaReg} from "@/widget/AuthForm/types/fromShems.ts";
import {useNavigate} from "react-router-dom";
import {Paths} from "@/app/providers/routerProvider";
import {MainUser, registration} from "@/features/MainUser";
import {useAuth} from "@/app/providers/AuthProvider";
import {toast} from "sonner";


const FormRegistration = () => {
        const navigate = useNavigate()
        const auth = useAuth()


        const form = useForm<z.infer<typeof formSchemaReg>>({
            resolver: zodResolver(formSchemaReg),
            defaultValues: {
                emailAddress: '',
                password: '',
                confirmPassword: '',
            }
        })

        const handleSubmit = (values: z.infer<typeof formSchemaReg>) => {
            console.log('accepted', values)

            registration(
                values.emailAddress,
                values.password
            ).then(() => {
                if (MainUser.error) {
                    toast.error(MainUser.error)
                    MainUser.error = null
                } else {
                    toast.success('Access')
                    auth?.setSession(MainUser.data);
                    setTimeout(() => {
                        navigate(Paths.HOME);
                    }, 500);
                }
            });
        }


        return (
            <Form {...form}>
                <form className='flex flex flex-col justify-between h-[100%] mt-10 '
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
                        <FormField control={form.control} name="confirmPassword" render={({field}) => {
                            return (
                                <FormItem className='pb-5'>
                                    <FormLabel>Confirm Password</FormLabel>
                                    <FormControl>
                                        <Input placeholder='Confirm Password' type='password' {...field}/>
                                    </FormControl>
                                    <FormMessage/>
                                </FormItem>
                            )
                        }}/>
                    </div>
                    <Button type="submit" className='w-[100%]' >Save changes</Button>
                </form>
            </Form>
        )
    }
;

export default FormRegistration;
