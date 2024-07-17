import AdminDashboard from "../pages/Admin/AdminDashboard";
import CreateAdmin from "../pages/Admin/CreateAdmin";
import CreateFaculty from "../pages/Admin/CreateFaculty";
import CreateStudent from "../pages/Admin/CreateStudent";

export const adminPaths = [
    {
        name: 'Dashboard',
        path: '/admin/dashboard',
        element: <AdminDashboard />
    },
    {
        name: 'User Management',
        children: [
            {
                name: 'Create Admin',
                path: '/admin/create-admin',
                element: <CreateAdmin />
            },
            {
                name: 'Create Faculty',
                path: '/admin/create-faculty',
                element: <CreateFaculty />
            },
            {
                name: 'Create Student',
                path: '/admin/create-student',
                element: <CreateStudent />
            },
        ]
    },
];


//  const AdminRoutes = adminPaths.reduce((acc: TRoutes[], item) => {
//     if (item.path && item.element) {
//         acc.push({
//             path: item.path,
//             element: item.element
//         })
//     }

//     if (item.children) {
//         item.children.forEach(child => {
//             acc.push({
//                 path: child.path,
//                 element: child.element
//             })
//         })
//     }

//     return acc;

// }, []);

//  export const AdminItems = adminPaths.reduce((acc: TSidebarItem[], item) => {
//     if (item.name && item.path) {
//         acc.push({
//             key: item.name,
//             label: <NavLink to={item.path}>{item.name}</NavLink>
//         })
//     }

//     if (item.children) {
//         acc.push({
//             key: item.name,
//             label: item.name,
//             children: item.children.map(child => ({
//                 key: child.name,
//                 label: <NavLink to={child.path}>{child.name}</NavLink>
//             }))
//         })
//     }

//     return acc;

// }, [])