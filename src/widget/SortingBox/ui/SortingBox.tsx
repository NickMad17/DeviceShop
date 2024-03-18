import {Select, SelectContent, SelectTrigger, SelectValue} from "@/shared/shadcnui/ui/select.tsx";
import {observer} from "mobx-react-lite";
import {useState} from "react";
import {Check} from "lucide-react";
import {Products, SortType} from "@/features/Products";

const SortingBox = observer(() => {
    const sortParams: SortType[] = [SortType.NEW, SortType.CHEAP, SortType.EXPENSIVE]
    const [thisElement, setThisElement] = useState<string>('Нет сортировки')
    const [isOpen, setOpen] = useState(false)
    const addSort = (el: SortType) => {
        setThisElement(el)
        Products.setProductSort(el)
    }

    return (
        <div className='bg-transparent  rounded-lg mb-6 p-[10px] flex justify-end items-center flex-wrap'>
            <div className="flex justify-end gap-5 flex-wrap">
                <div className="w-[180px] bg-background">
                    <div onClick={() => setOpen(!isOpen)}>
                        <Select open={isOpen}>
                            <SelectTrigger className="w-[180px]">
                                <SelectValue placeholder={thisElement}/>
                            </SelectTrigger>
                            <SelectContent>
                                {sortParams.map(el => {
                                    return (
                                        <div onClick={() => addSort(el)}
                                             key={el}
                                             className='text-sm py-1.5 px-2 hover:bg-input cursor-pointer flex justify-between items-center'>
                                            {el}
                                            {el === thisElement && <Check className='w-3 mr-2'/>}
                                        </div>
                                    )
                                })}
                            </SelectContent>
                        </Select>
                    </div>
                </div>
            </div>
        </div>
    );
});

export default SortingBox;
