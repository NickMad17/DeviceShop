import {makeAutoObservable} from "mobx";
import {Session} from "@supabase/supabase-js";


class MainUser {
    // @ts-ignore
    id:  | null | undefined| string = JSON.parse(localStorage?.getItem('sb-jzcmkeoooytnffqgrpit-auth-token'))?.user?.id || null
    // @ts-ignore
    name: string | null | undefined = JSON.parse(localStorage?.getItem('sb-jzcmkeoooytnffqgrpit-auth-token'))?.user?.email || null
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
            this.name = data.user.email
            this.id = data.user.id
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

    reset = () => {
        this.id = null
        this.data = null
        this.role = null
    }
}

export default new MainUser()
