import {ThemeSwitcher} from "@/features/ThemeSwitcher";
import Cart from "@/shared/ui/Cart/Cart.tsx";
import {Favorites} from "@/shared";
import {Input} from "@/shared/shadcnui/ui/input.tsx";
import {Avatar, AvatarFallback, AvatarImage} from "@/shared/shadcnui/ui/avatar.tsx";
import {Button} from "@/shared/shadcnui/ui/button.tsx";

const Header = () => {
    return (
        <div
            className='fixed w-[100vw] h-14 rounded-lg border-b shadow-md flex justify-between items-center gap-2 px-10 bg-background'>
            <p className='text-[1.2rem] pr-3 whitespace-nowrap'>Maady<span
                className='text-primary font-[600]'>Shop</span></p>
            <Input placeholder="Type a command or search..."/>
            <div className="flex gap-1 ">
                <Button>Поиск</Button>
                <ThemeSwitcher/>
                <Favorites/>
                <Cart/>
                <Avatar className='ml-3'>
                    <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn"/>
                    <AvatarFallback>CN</AvatarFallback>
                </Avatar>
            </div>
        </div>
    );
};

export default Header;