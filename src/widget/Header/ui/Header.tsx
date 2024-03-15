import {ThemeSwitcher} from "@/features/ThemeSwitcher";
import Cart from "@/shared/ui/icons/Cart.tsx";
import {Favorites} from "@/shared";
import {Input} from "@/shared/shadcnui/ui/input.tsx";
import {Avatar, AvatarFallback} from "@/shared/shadcnui/ui/avatar.tsx";
import {Button} from "@/shared/shadcnui/ui/button.tsx";
import Logo from "@/shared/ui/Logo.tsx";
import {UserRound} from "lucide-react";

const Header = () => {
    return (
        <div
            className='fixed w-[100vw] h-14 rounded-lg border-b shadow-md flex justify-between items-center gap-2 px-10 bg-background z-20'>
            <Logo/>
            <Input placeholder="Type a command or search..."/>
            <div className="flex gap-1 ">
                <Button>Поиск</Button>
                <ThemeSwitcher/>
                <Favorites/>
                <Cart/>
                <Avatar className='ml-3 flex bg-accent justify-center items-center'>
                    <UserRound/>
                    <AvatarFallback>CN</AvatarFallback>
                </Avatar>
            </div>
        </div>
    );
};

export default Header;
