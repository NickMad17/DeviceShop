import {makeAutoObservable} from "mobx";
import {Product} from "@/features/Products";

export interface CartType {
    id: number
    count: number | string | undefined
}

class CartStore {
    detailedData: null | Product[] = null
    data: null | CartType[] = null
    cartCounter: null | number = null
    loading: boolean = false
    error: undefined | null | string = null

    constructor() {
        makeAutoObservable(this)
    }

    setDetailedData (detailedData: Product[] | undefined) {
        if (detailedData) {
            this.detailedData = detailedData
        } else {
            this.data = null
        }
    }

    setCart(data: CartType[] | undefined | null, errorMessage?: string) {
        if (data !== undefined && data !== null && errorMessage == undefined) {
            this.data = data;
        } else {
            this.error = errorMessage
        }
    }
    setLoading(isLoading: boolean) {
        this.loading = isLoading
    }

    setCounter = (count: number | null | undefined) => {
        if (count) {
            this.cartCounter = count
        } else {
            this.cartCounter = null
        }
    }
}

export default new CartStore()