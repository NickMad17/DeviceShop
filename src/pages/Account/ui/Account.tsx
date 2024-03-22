import {PageLayout} from "@/shared";
import {Header} from "@/widget/Header";
import {Button} from "@/shared/shadcnui/ui/button.tsx";
import supabase from "@/app/config/supabase.ts";
import {toast} from "sonner";
import {useNavigate} from "react-router-dom";
import {Paths} from "@/app/providers/routerProvider";
import {CartStore} from "@/features/Cart";
import {MainUser} from "@/features/MainUser";
import {Products} from "@/features/Products";
import {HistoryBox} from "@/widget/HistoryBox";
import {UserRound} from "lucide-react";
import {Avatar} from "@/shared/shadcnui/ui/avatar.tsx";
import {observer} from "mobx-react-lite";

const Account = observer(() => {
    const navigate = useNavigate()
    const logOut = async () => {
        let {error} = await supabase.auth.signOut()
        if (error) {
            toast.error(error.message)

        } else {
            localStorage.removeItem('token')
            CartStore.reset()
            MainUser.reset()
            Products.reset()
            navigate(Paths.START)
        }
    }
    return (
        <>
            <Header/>
            <PageLayout>
                <div className='center mt-8'>
                    <div className="flex justify-between items-center py-3">
                        <div className="flex gap-4 items-center">
                            <Avatar className='w-12 h-12 ml-3 flex bg-accent justify-center items-center'>
                                <UserRound/>
                            </Avatar>
                            <p>{MainUser.name}</p>
                        </div>
                        <Button onClick={logOut}>Выйти из аккаунта</Button>
                    </div>
                    <h2 className='text-center text-xl my-3'>История заказов</h2>
                    <HistoryBox/>
                </div>
            </PageLayout>
        </>
    );
})


export default Account;
