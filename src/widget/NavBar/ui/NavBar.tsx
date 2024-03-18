import {useState} from "react";
import {Products, SearchType} from "@/features/Products";
import {Button} from "@/shared/shadcnui/ui/button.tsx";
import {cn} from "@/shared/lib/utils.ts";

const NavBar = () => {
    const typeSort = ["Все", 'Мониторы', 'Компьютеры', 'Аксессуары', 'Ноутбуки']
    const [thisElement, setThisElement] = useState<string>('Все')
    const addSort = (el: string) => {
        setThisElement(el)
        if (el === 'Все') {
            Products.setProductSearch(el, SearchType.ALL)

        } else {
            Products.setProductSearch(el, SearchType.TYPE)
        }
    }
    return (
        <div className="h-[61px] mb-3 bg-background w-full pt-2 pb-3 border-b px-10 flex items-center gap-2">
            {typeSort.map(el => {
                return (
                    <Button className={cn('text-lg text-foreground ', thisElement === el && 'bg-input text-primary')} variant='link' key={el}
                         onClick={() => addSort(el)}>
                        {el}
                    </Button>

                )
            })}
        </div>
    );
};

export default NavBar;
