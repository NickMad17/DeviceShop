import {ShoppingCart} from "lucide-react";
import {Button} from "@/shared/shadcnui/ui/button.tsx";
import {cn} from "@/shared/lib/utils.ts";
import {Paths} from "@/app/providers/routerProvider";
import {useLocation} from "react-router-dom";
interface Props {
    productCount: number | null
}
const CartIcon = ({productCount}:Props) => {
    const locate = useLocation().pathname
    return (
        <Button className='border-none rounded-xl relative' variant="outline" size="icon">
            <ShoppingCart className={cn('w-5 h-5', Paths.CART === locate && 'fill-foreground')}/>
            <span className="sr-only">Toggle theme</span>
            {(productCount && productCount > 0) && <div className='absolute top-[-2px] right-0 z-10 w-5 h-5 rounded-full bg-primary text-[11px]'>{productCount}</div>}
        </Button>
    );
};

export default CartIcon;
