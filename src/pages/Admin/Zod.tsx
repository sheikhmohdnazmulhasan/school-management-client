import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from '@hookform/resolvers/zod';
import { ZodValidation } from "../../schemas";
import { TypeOf } from "zod";

// Infer the TypeScript type from the schema
type FormSchema = TypeOf<typeof ZodValidation.zodSchema>;

const Zod = () => {
    // Using `useForm` with Zod schema resolver and TypeScript type
    const { handleSubmit, register, formState: { errors } } = useForm<FormSchema>({
        resolver: zodResolver(ZodValidation.zodSchema),
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
                <input type="number" id="number" {...register('number', { valueAsNumber: true })} /> <br />
                {errors.number?.message && <p>{errors.number?.message}</p>}

                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default Zod;
