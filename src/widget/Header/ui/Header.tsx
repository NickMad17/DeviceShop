import {ThemeSwitcher} from "@/features/ThemeSwitcher";
import Cart from "@/shared/ui/icons/Cart.tsx";
import {Favorites} from "@/shared";
import {Avatar,} from "@/shared/shadcnui/ui/avatar.tsx";
import Logo from "@/shared/ui/Logo.tsx";
import {UserRound} from "lucide-react";
import {Link, useLocation} from "react-router-dom";
import {Paths} from "@/app/providers/routerProvider";
import {Search} from "@/features/Search";

const Header = () => {
    const locate = useLocation().pathname
    return (
        <div
            className='fixed w-[100vw] h-14 rounded-[0] border-b shadow-md flex justify-between items-center gap-2 px-10 bg-background z-20 '>
            <Link to={Paths.HOME}>
                <Logo/>
            </Link>
            {locate === Paths.HOME && (
                <Search/>
            )}
            <div className="flex gap-1 ">
                <ThemeSwitcher/>
                <Favorites/>
                <Cart/>
                <Link to={Paths.ACCOUNT}>
                    <Avatar className='ml-3 flex bg-accent justify-center items-center'>
                        <UserRound/>
                    </Avatar>
                </Link>
            </div>
        </div>
    );
};

export default Header;
