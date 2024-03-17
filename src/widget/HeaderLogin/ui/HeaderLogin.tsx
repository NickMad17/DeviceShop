import Logo from "@/shared/ui/Logo.tsx";
import {FormDialog} from "@/widget/AuthForm";

const HeaderLogin = () => {

    return (
        <div
            className='fixed w-[100vw] h-14 rounded-lg border-b shadow-md flex justify-between items-center gap-2 px-10 bg-background z-10'>
            <Logo/>
            <div className="flex gap-1 ">
                <FormDialog variant='link' isReg={false} text='Sign in'/>
                <FormDialog isReg={true} text='Sign up'/>
            </div>
        </div>
    );
};

export default HeaderLogin;
