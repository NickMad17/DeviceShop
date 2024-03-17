import {Menu} from "lucide-react";

const Logo = () => {
    return (
        <>
            <p className='text-[1.3rem] pr-3 whitespace-nowrap max-[877px]:hidden'>Maady<span
                className='text-primary font-[600]'>Shop</span></p>
            <Menu className='hidden max-[877px]:block'/>
        </>
    );
};

export default Logo;
