import {ShoppingCart} from "lucide-react";
import {Button} from "@/shared/shadcnui/ui/button.tsx";

const Cart = () => {
    return (
            <Button className='border-none rounded-xl' variant="outline" size="icon">
                <ShoppingCart className='w-5 h-5'/>
                <span className="sr-only">Toggle theme</span>
            </Button>
    );
};

export default Cart;