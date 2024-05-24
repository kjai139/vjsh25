import { object, string } from "zod"


export const signInSchema = object({
    email: string({
        required_error: 'Email is required'
    }).min(1, "Email is required").email("Invalid email"),
    password: string({
        required_error: "Password is required"
    }).min(1, "Password is required").min(8, "Password must have at least 8 digits").regex(/[A-Z]/, 'Password must contain at least one uppercase letter')
    .regex(/[!@#$%^&*(),.?":{}|<>]/, 'Password must contain at least one special character');
})