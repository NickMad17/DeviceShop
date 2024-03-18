import {ShoppingCart} from "lucide-react";
import {Button} from "@/shared/shadcnui/ui/button.tsx";

const Cart = () => {
    return (
        <Button className='border-none rounded-xl relative' variant="outline" size="icon">
            <ShoppingCart className='w-5 h-5'/>
            <span className="sr-only">Toggle theme</span>
            <div className='absolute top-[-2px] right-0 z-10 w-5 h-5 rounded-full bg-primary text-[11px]'>1</div>
        </Button>
    );
};

export default Cart;
