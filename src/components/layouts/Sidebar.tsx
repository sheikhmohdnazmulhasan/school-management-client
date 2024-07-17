import { Layout, Menu } from "antd";
import { itemsGenerator } from "../../utils/itemsgenerator";
import { adminPaths } from "../../routes/Admin.routes";
const { Sider } = Layout;

const Sidebar = () => {
    return (
        <Sider>
            <div className="demo-logo-vertical" />
            <Menu theme="dark" mode="inline" defaultSelectedKeys={['Dashboard']} items={itemsGenerator(adminPaths)} />
        </Sider>
    );
};

export default Sidebar;