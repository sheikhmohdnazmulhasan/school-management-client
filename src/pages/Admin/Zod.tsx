import { FieldValues, useForm } from "react-hook-form";

const Zod = () => {
    const { handleSubmit, register } = useForm()

    async function handleSubmitForm(data: FieldValues): Promise<void> {
        console.log(data);
    }

    return (
        <div>
            <form onSubmit={handleSubmit(handleSubmitForm)}>
                <label htmlFor="name">Name</label> <br />
                <input type="text" id="name" {...register('name')} /> <br />

                <label htmlFor="name">Email</label> <br />
                <input type="email" id="email" {...register('email')} /> <br />

                <label htmlFor="number">Number</label> <br />
                <input type="number" id="number" {...register('number')} /> <br />
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default Zod;