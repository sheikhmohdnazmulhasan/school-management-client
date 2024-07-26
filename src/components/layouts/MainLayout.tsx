import { FC } from "react";
import { Button, Layout } from "antd";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import { useAppDispatch } from "../../redux/hook";
import { logout } from "../../redux/features/auth/authSlice";
const { Header, Content } = Layout;

const MainLayout: FC = () => {
    const dispatch = useAppDispatch();
    // const items: MenuProps['items'] = [
    //     { key: '1', label: 'Dashboard' },
    //     { key: '2', label: 'Profile' },
    //     {
    //         key: '3', label: 'User Management',
    //         children: [
    //             { key: '3.1', label: 'Create Student' },
    //             { key: '3.2', label: 'Create Faculty' },
    //         ]
    //     },

    // ]

    return (
        <div>
            <Layout style={{ height: '100vh' }}>
                <Sidebar />
                <Layout>
                    <Header><Button onClick={() => dispatch(logout())}>Logout</Button></Header>
                    <Content style={{ margin: '24px 16px 0' }}>
                        <div>
                            <Outlet />
                        </div>
                    </Content>
                </Layout>
            </Layout>
        </div>
    );
};

export default MainLayout;