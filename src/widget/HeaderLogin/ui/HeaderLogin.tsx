import Logo from "@/shared/ui/Logo.tsx";
import {AuthFormDialog} from "@/widget/AuthForm";

const HeaderLogin = () => {

    return (
        <div
            className='fixed w-[100vw] h-14 rounded-lg border-b shadow-md flex justify-between items-center gap-2 px-10 bg-background z-10'>
            <Logo/>
            <div className="flex gap-1 ">
                <AuthFormDialog variant='link' authType={false} text='Sign in'/>
                <AuthFormDialog authType={true} text='Sign up'/>
            </div>
        </div>
    );
};

export default HeaderLogin;
