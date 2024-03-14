import {makeAutoObservable} from "mobx";
import {Session} from "@supabase/supabase-js";

// TODO: Убрать занос в локал стор (нужно лишь для отладки)

class MainUser {
    // @ts-ignore
    id:  | null | undefined = JSON.parse(localStorage.getItem('token'))?.user?.id || null
    data: Session | undefined | null = null
    error: string | null | undefined = null
    loading: boolean = false

    constructor() {
        makeAutoObservable(this);
    }

    setUser(data: Session | undefined | null, errorMessege?: string) {
        if (data !== undefined && data !== null && errorMessege == undefined) {
            this.data = data;
        } else {
            this.error = errorMessege
        }
    }

    setLoading(isLoading: boolean) {
        this.loading = isLoading
    }
}

export default new MainUser()
