import * as z from "zod";

export const formSchemaReg = z.object({
    emailAddress: z.string().email(),
    password: z.string().min(6),
    confirmPassword: z.string().min(6),
}).refine((data) => {
    return data.password === data.confirmPassword
}, {
    message: 'Passwords do not match',
    path: ['confirmPassword']
})

export const formSchemaLogin = z.object({
    emailAddress: z.string().email(),
    password: z.string().min(6),
})
