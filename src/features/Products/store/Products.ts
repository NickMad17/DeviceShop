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

    setProductSearch = (text: string) => {
        this.data = this.reserveData?.filter((el) => {
            console.log(el.name, text)
            if (el.name.toLowerCase().startsWith(text.toLowerCase())) {
                return el
            }
        })
    }


}

export default new Products()
