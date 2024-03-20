import {makeAutoObservable} from "mobx";
import {Session} from "@supabase/supabase-js";


class MainUser {
    // @ts-ignore
    id:  | null | undefined| string = JSON.parse(localStorage.getItem('token'))?.user?.id || null
    data: Session | undefined | null = null
    error: string | null | undefined = null
    loading: boolean = false
    role: null | string = null

    constructor() {
        makeAutoObservable(this);
    }

    setUser(data: Session | undefined | null, errorMessage?: string) {
        if (data !== undefined && data !== null && errorMessage == undefined) {
            this.data = data;
        } else {
            this.error = errorMessage
        }
    }

    setLoading(isLoading: boolean) {
        this.loading = isLoading
    }

    setUserRole = (role: string) => {
        this.role = role
    }
}

export default new MainUser()
