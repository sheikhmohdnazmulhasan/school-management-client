import { Button } from "antd";
import { useForm } from "react-hook-form";
import { useLoginMutation } from "../redux/features/auth/authApi";
import { FC } from "react";
import { useAppDispatch } from "../redux/hook";
import { setUser } from "../redux/features/auth/authSlice";
import { verifyToken } from "../utils/verifyToken";

const Login: FC = () => {
    const { register, handleSubmit } = useForm();
    const dispatch = useAppDispatch();

    const [login, { error, isLoading }] = useLoginMutation();


    async function onSubmit(data) {
        const res = await login(data).unwrap();

        if (!isLoading && !error) {
            const user = verifyToken(res.data.accessToken);

            dispatch(setUser({ user, token: res.data.accessToken }))
        }
    }

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="">
                    <label htmlFor="id">ID: </label>
                    <input type="text" id="id" {...register('id')} />
                </div>

                <div className="">
                    <label htmlFor="id">Password: </label>
                    <input type="text" id="password" {...register('password')} />
                </div>
                <Button htmlType="submit">Login</Button>
            </form>
        </div>
    );
};

export default Login;