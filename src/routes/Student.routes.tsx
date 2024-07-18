import CreateAdmin from "../pages/Admin/CreateAdmin";

import StudentDashboard from "../pages/Student/StudentDashboard";

export const studentPaths = [
    {
        name: 'Dashboard',
        path: '/student/dashboard',
        element: <StudentDashboard />
    },
    {
        name: 'User Management',
        children: [
            {
                name: 'Create Admin',
                path: '/student/create-admin',
                element: <CreateAdmin />
            },
           
        ]
    },
];