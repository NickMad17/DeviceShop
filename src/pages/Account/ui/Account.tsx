import {AdminPanel} from "@/widget/AdminPanel";
import {PageLayout} from "@/shared";
import {Header} from "@/widget/Header";
import {Button} from "@/shared/shadcnui/ui/button.tsx";
import {useState} from "react";
import supabase from "@/app/config/supabase.ts";
import {toast} from "sonner";
import {useNavigate} from "react-router-dom";
import {Paths} from "@/app/providers/routerProvider";

const Account = () => {
    const [isOpen, setOpen] = useState<boolean>(false)
    const navigate = useNavigate()
    const logOut = async () => {
        let {error} = await supabase.auth.signOut()
        if (error) {
            toast.error(error.message)

        } else {
            localStorage.removeItem('token')
            navigate(Paths.START)
        }
    }
    return (
        <>
            <Header/>
            <PageLayout>
                <div className="flex justify-between">
                    <Button className='mb-6'
                            onClick={() => setOpen(!isOpen)}>{isOpen ? 'Скрыть админ панеь' : 'Показать админ панель'}</Button>
                    <Button className='mb-6' onClick={logOut}>Выйти из аккаунта</Button>
                </div>
                <div className='flex  w-full'>
                    {isOpen && <AdminPanel/>}
                </div>
            </PageLayout>
        </>
    );
}


export default Account;
