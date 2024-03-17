import {Dialog, DialogContent, DialogTrigger} from "@/shared/shadcnui/ui/dialog.tsx";
import {Button} from "@/shared/shadcnui/ui/button.tsx";
import FormRegistration from "./FormRegistration.tsx";
import FormLogin from "./FormLogin.tsx";
import {Title} from "@radix-ui/react-dialog";
import {MainUser} from "@/features/MainUser";
import {Loader} from "@/shared";
import {observer} from "mobx-react-lite";

interface PropsAuthForm {
    variant?: "link" | "default" | "destructive" | "outline" | "secondary" | "ghost" | null | undefined
    isReg: boolean
    text: string
}


export const FormDialog = observer(
    ({isReg, variant, text}: PropsAuthForm) => {


        return (
            <Dialog>
                <DialogTrigger asChild>
                    <Button variant={variant}>{text}</Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[600px] sm:min-h-[600px]">
                    <div className='flex flex-col'>
                        <Title className='text-center text-3xl'>{isReg ? "Sign Up" : "Sign in"}</Title>
                        {MainUser.loading
                            ? (<div className='h-[100%] w-[100%] flex justify-center items-center'>
                                <Loader/>
                            </div>)
                            : (isReg ? <FormRegistration/> : <FormLogin/>)
                        }
                    </div>
                </DialogContent>
            </Dialog>
        )
    }
)
