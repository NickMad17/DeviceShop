import {login} from "@/features/MainUser/api/login.ts";
import MainUser from "@/features/MainUser/store/MainUser.ts";
import {registration} from "@/features/MainUser/api/Registration.ts";
import {UserRequestType} from "@/features/MainUser/types/userRequestType.ts";
import {GetUserRole} from "@/features/MainUser/api/getUserRole.ts";

export {
    MainUser,
    login,
    registration,
    GetUserRole
};


export type { UserRequestType };
