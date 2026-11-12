import {z} from "zod";

const studentSchema = z.object({
    name: z.string().min(3, {message: "Name must be at least 3 characters long"}),
    email: z.string().email({message: "Enter a valid email address"}),
    age: z.number().int().min(0, {message: "Age must be a non-negative integer"})
})

export default studentSchema;