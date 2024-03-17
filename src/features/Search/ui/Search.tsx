import {Input} from "@/shared/shadcnui/ui/input.tsx";
import {Button} from "@/shared/shadcnui/ui/button.tsx";
import {Product, Products, SearchType} from "@/features/Products";
import {ChangeEvent, useState} from "react";
import {X} from "lucide-react";
import {Link} from "react-router-dom";
import {Paths} from "@/app/providers/routerProvider";

const Search = () => {
    const [text, setText] = useState<string>('')
    const [names, setNames] = useState<Product[] | [] | null | undefined>([])
    const change = (e: ChangeEvent<HTMLInputElement>) => {
        setText(e.target.value)
        console.log(text)
    }

    const focus = () => {
        setNames(Products.data)
    }

    const blur = () => {
        setTimeout(() => {
            setNames(null)
        },100)
    }

    const search = () => {
        Products.setProductSearch(text, SearchType.NAME)
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
                            if (product.name.toLowerCase().startsWith(text.toLowerCase()) || text === '') {
                                return (
                                    <Link to={Paths.PRODUCT} key={product.id}>
                                        <p
                                            onClick={() => {
                                                console.log('wdwd')
                                            }}
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

            <Button className='max-[877px]:hidden' onClick={search}>Поиск</Button>
        </>
    );
};

export default Search;
