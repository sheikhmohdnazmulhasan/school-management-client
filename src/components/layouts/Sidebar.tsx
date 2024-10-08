import { Layout, Menu } from "antd";
import { itemsGenerator } from "../../utils/itemsgenerator";
import { adminPaths } from "../../routes/Admin.routes";
import { facultyPaths } from "../../routes/Faculty.routes";
import { studentPaths } from "../../routes/Student.routes";
import { useAppSelector } from "../../redux/hook";
import { useCurrentUser } from "../../redux/features/auth/authSlice";
const { Sider } = Layout;

const userRole = {
    ADMIN: 'admin',
    FACULTY: 'faculty',
    STUDENT: 'student'
}

const Sidebar = () => {
    const { role } = useAppSelector(useCurrentUser) as { role: string | null };

    let sidebarItems;

    switch (role) {
        case userRole.ADMIN:
            sidebarItems = itemsGenerator(adminPaths)
            break;

        case userRole.FACULTY:
            sidebarItems = itemsGenerator(facultyPaths)
            break;

        case userRole.STUDENT:
            sidebarItems = itemsGenerator(studentPaths)
            break;

        default:
            break;
    }

    return (
        <Sider>
            <div className="demo-logo-vertical" />
            <Menu theme="dark" mode="inline" defaultSelectedKeys={['Dashboard']} items={sidebarItems} />
        </Sider>
    );
};

export default Sidebar;