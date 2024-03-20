import {Heart} from "lucide-react";
import {Button} from "@/shared/shadcnui/ui/button.tsx";
import {Link, useLocation} from "react-router-dom";
import {cn} from "@/shared/lib/utils.ts";
import {Paths} from "@/app/providers/routerProvider";

const FavoritesIcon = () => {
    const locate = useLocation().pathname
    return (
        <Link to={Paths.FAVORITES}>
            <Button className='border-none rounded-xl ' variant="outline" size="icon">
                <Heart className={cn('w-5 h-5', locate === Paths.FAVORITES && 'fill-foreground')}/>
                <span className="sr-only">Toggle theme</span>
            </Button>
        </Link>
    );
};

export default FavoritesIcon;
