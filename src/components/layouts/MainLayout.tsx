import { FC } from "react";
import { Layout, Menu, MenuProps } from "antd";
import { Outlet } from "react-router-dom";
import { AdminItems } from "../../routes/Admin.routes";
const { Header, Content, Footer, Sider } = Layout;

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
                <Sider
                    breakpoint="lg"
                    collapsedWidth="0"
                    onBreakpoint={(broken) => {
                        console.log(broken);
                    }}
                    onCollapse={(collapsed, type) => {
                        console.log(collapsed, type);
                    }}
                >
                    <div className="demo-logo-vertical" />
                    <Menu theme="dark" mode="inline" defaultSelectedKeys={['4']} items={AdminItems} />
                </Sider>
                <Layout>
                    <Header style={{ padding: 0 }} />
                    <Content style={{ margin: '24px 16px 0' }}>
                        <div>
                            <Outlet />
                        </div>
                    </Content>
                    <Footer style={{ textAlign: 'center' }}>
                        Ant Design ©{new Date().getFullYear()} Created by Ant UED
                    </Footer>
                </Layout>
            </Layout>
        </div>
    );
};

export default MainLayout;