import {makeAutoObservable} from "mobx";

export interface Product {
    colors: string[] | null;
    created_at: string;
    description: string | null;
    id: number;
    name: string;
    price: number;
    type: string;
    favorites: boolean
    photo_count: number
}

export enum SearchType {
    NAME = 'name',
    TYPE = 'type',
    ALL = '',
}

export enum SortType {
    NEW = 'Сначала новые',
    CHEAP = 'Сначала дешевые',
    EXPENSIVE = 'Сначала дорогие'
}

class Products {
    data: Product[] | undefined | null = null
    reserveData: Product[] | undefined | null = null
    error: string | null | undefined = null
    loading: boolean = false

    constructor() {
        makeAutoObservable(this)
    }

    setLoading(isLoading: boolean) {
        this.loading = isLoading
    }

    setNullProduct() {
        this.data = null
    }

    setProduct = (data: Product[] | null | undefined, errorMessage?: string) => {
        if (data !== undefined && data !== null && errorMessage == undefined) {
            this.error = null
            const sortData = data.sort((a, b) => a.id - b.id)
            this.data = sortData;
            this.reserveData = sortData;
        } else {
            this.error = errorMessage
        }
    }

    setProductSearch = (text: string, params: SearchType) => {
        if (!(params === SearchType.ALL)) {
            this.data = this.reserveData?.filter((el) => {
                if (params === SearchType.NAME) {
                    if (el[params].toLowerCase().startsWith(text.toLowerCase())) {
                        return el
                    }
                }
                if (el[params] === text) {
                    return el
                }
            })
        } else {
            this.data = this.reserveData
        }
    }

    setProductSort(el:SortType) {
        if (el === SortType.CHEAP) {
            this.data = this.data?.sort((a, b) =>  a.price - b.price)
        }
        if (el === SortType.EXPENSIVE) {
            this.data = this.data?.sort((a, b): number =>  {
                if (a.price > b.price) {
                    return -1
                }
                return 0
            })
        }
        if (el === SortType.NEW) {
            this.data = this.data?.sort((a, b): number =>  {
                if (Date.parse(a.created_at) > Date.parse(b.created_at)) {
                    return -1
                }
                return 0
            })
        }
    }

    reset = () => {
        this.data = null
        this.reserveData = null
    }


}

export default new Products()
