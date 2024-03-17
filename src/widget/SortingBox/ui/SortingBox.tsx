import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue} from "@/shared/shadcnui/ui/select.tsx";
import {Products, SearchType} from "@/features/Products";
import {observer} from "mobx-react-lite";
import {useState} from "react";
import {Check} from "lucide-react";

const SortingBox = observer(() => {
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
        <div className='bg-transparent  rounded-lg mb-6 p-[10px] flex justify-end items-center flex-wrap'>
            <div className="flex justify-end gap-5 flex-wrap">
                <div className="w-[180px] bg-background">
                    <Select>
                        <SelectTrigger className="w-[180px]">
                            <SelectValue placeholder={thisElement}/>
                        </SelectTrigger>
                        <SelectContent>
                            {typeSort?.map(el => {
                                return (
                                    <div className='p-1 flex justify-between cursor-pointer hover:bg-input' key={el}
                                         onClick={() => addSort(el)}>
                                        <p className='pl-2'>{el}</p>
                                        {el === thisElement && <Check className='w-4 mr-2'/>}
                                    </div>
                                )
                            })}
                        </SelectContent>
                    </Select>
                </div>
                <div className="w-[180px] bg-input">
                    <Select>
                        <SelectTrigger className="w-[180px]">
                            <SelectValue placeholder="Сортровка"/>
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="light">Сначала новые</SelectItem>
                            <SelectItem value="dark">Сначаала дешевые</SelectItem>
                            <SelectItem value="system">Сначала дорогие</SelectItem>
                        </SelectContent>
                    </Select>
                </div>
            </div>
        </div>
    );
});

export default SortingBox;
