// Define the schema using Zod
import {  z } from "zod";

const zodSchema = z.object({
    name: z.string().nonempty({ message: 'Name is required' }),
    email: z.string().nonempty({ message: 'Email is required' }).email({ message: 'Invalid email address' }),
    number: z.number({ message: 'Number is required' }),
});


export const ZodValidation = {zodSchema}