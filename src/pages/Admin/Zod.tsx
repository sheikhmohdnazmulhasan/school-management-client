import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from '@hookform/resolvers/zod';
import { z, TypeOf } from "zod";

// Define the schema using Zod
const schema = z.object({
    name: z.string().nonempty({ message: 'Name is required' }),
    email: z.string().nonempty({ message: 'Email is required' }).email({ message: 'Invalid email address' }),
    number: z.string().nonempty({ message: 'Number is required' }),
});

// Infer the TypeScript type from the schema
type FormSchema = TypeOf<typeof schema>;

const Zod = () => {
    // Using `useForm` with Zod schema resolver and TypeScript type
    const { handleSubmit, register, formState: { errors } } = useForm<FormSchema>({
        resolver: zodResolver(schema),
    });

    // Handle form submission
    const handleSubmitForm: SubmitHandler<FormSchema> = async (data) => {
        console.log(data); // This should log the form data correctly now
    };

    return (
        <div>
            <form onSubmit={handleSubmit(handleSubmitForm)}>
                <label htmlFor="name">Name</label> <br />
                <input type="text" id="name" {...register('name')} /> <br />
                {errors.name?.message && <p>{errors.name?.message}</p>}

                <label htmlFor="email">Email</label> <br />
                <input type="email" id="email" {...register('email')} /> <br />
                {errors.email?.message && <p>{errors.email?.message}</p>}

                <label htmlFor="number">Number</label> <br />
                <input type="number" id="number" {...register('number')} /> <br />
                {errors.number?.message && <p>{errors.number?.message}</p>}

                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default Zod;
