import { FC } from "react";
import { Layout } from "antd";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
const { Header, Content } = Layout;

const MainLayout: FC = () => {

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
                    <Header style={{ padding: 0 }} />
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