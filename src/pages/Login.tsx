import { Button } from "antd";
import { useForm } from "react-hook-form";
import { useLoginMutation } from "../redux/features/auth/authApi";
import { FC } from "react";
import { useAppDispatch } from "../redux/hook";
import { setUser } from "../redux/features/auth/authSlice";
import { verifyToken } from "../utils/verifyToken";
import { TLoginCredential, TUser } from "../interface";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";

const Login: FC = () => {
    const { register, handleSubmit } = useForm<TLoginCredential>();
    const [login, { error, isLoading }] = useLoginMutation();
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    async function onSubmit(data: TLoginCredential) {
        const toastId = toast.loading('Logging In...');

        try {
            const res = await login(data).unwrap();

            if (error) {
                toast.error('Sorry', { id: toastId });
                console.log(error);

            } else if (!isLoading && !error) {
                const user = (verifyToken(res.data.accessToken) as TUser)

                dispatch(setUser({ user, token: res.data.accessToken }));

                toast.success('Logged in Success', { id: toastId });
                navigate(`/${user.role}/dashboard`);
            }

        } catch (error) {
            toast.error('Something Wrong', { id: toastId });
            console.log(error);
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