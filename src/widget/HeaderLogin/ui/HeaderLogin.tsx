import {Button} from "@/shared/shadcnui/ui/button.tsx";
import {useNavigate} from "react-router-dom";
import {Paths} from "@/app/providers/routerProvider";

const HeaderLogin = () => {
    const navigate = useNavigate()

    return (
        <div
            className='fixed w-[100vw] h-14 rounded-lg border-b shadow-md flex justify-between items-center gap-2 px-10 bg-background'>
            <p className='text-[1.3rem] pr-3 whitespace-nowrap'>Maady<span
                className='text-primary font-[600]'>Shop</span></p>
            <div className="flex gap-1 ">
                <Button variant='link' onClick={() => navigate(Paths.AUTH)}>Sign in</Button>
                <Button onClick={() => navigate(Paths.AUTH)}>Sign up</Button>
            </div>
        </div>
    );
};

export default HeaderLogin;