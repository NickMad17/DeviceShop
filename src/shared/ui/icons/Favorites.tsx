import {Heart} from "lucide-react";
import {Button} from "@/shared/shadcnui/ui/button.tsx";

const Favorites = () => {
    return (
        <Button className='border-none rounded-xl' variant="outline" size="icon">
            <Heart className='w-5 h-5'/>
            <span className="sr-only">Toggle theme</span>
        </Button>
    );
};

export default Favorites;