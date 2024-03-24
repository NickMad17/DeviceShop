import {Input} from "@/shared/shadcnui/ui/input.tsx";
import {Button} from "@/shared/shadcnui/ui/button.tsx";
import {Product, Products, SearchType} from "@/features/Products";
import {ChangeEvent, useState} from "react";
import {X} from "lucide-react";
import {Link} from "react-router-dom";
import {Paths} from "@/app/providers/routerProvider";
import {observer} from "mobx-react-lite";

const Search = observer(() => {
    const [text, setText] = useState<string>('')
    const [names, setNames] = useState<Product[] | [] | null | undefined>([])
    const change = (e: ChangeEvent<HTMLInputElement>) => {
        console.log(names?.length)
        setText(e.target.value)
    }

    const focus = () => {
        setNames(Products.reserveData)
    }

    const blur = () => {
        setTimeout(() => {
            setNames(null)
        },100)
    }

    const search = () => {
        Products.setProductSearch(text, SearchType.NAME)
        if (Products.data?.length === 0) {
            reset()
        }
    }

    const reset = () => {
        setText('')
        Products.setProductSearch('', SearchType.NAME)
    }

    return (
        <>
            <div className='w-full relative max-[877px]:hidden'>
                <Input onInput={change} onFocus={focus} onBlur={blur} value={text}
                       placeholder="Type a command or search..."/>
                {text.length !== 0 && <X onClick={reset} className='absolute right-2 top-[6px] hover:cursor-pointer'/>}
                {names && (
                    <div className='absolute top-10 bg-background border-x max-h-[270px] overflow-hidden rounded w-full' key={Date.now()}>
                        {names?.map(product => {
                            if (product.name.toLowerCase().includes(text.toLowerCase()) || text === '') {
                                return (
                                    <Link to={`${Paths.PRODUCT}/${product.id}`} key={product.id}>
                                        <p
                                            className='border-b py-1 pl-3 text-[14px] font-[300] hover:bg-input cursor-pointer'
                                        >
                                            {product.name}
                                        </p>
                                    </Link>
                                )
                            }
                        })}
                    </div>
                )}
            </div>

            <Button className='max-[877px]:hidden' disabled={text?.length === 0 } onClick={search}>Поиск</Button>
        </>
    );
});

export default Search;
