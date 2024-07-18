import CreateFaculty from "../pages/Admin/CreateFaculty";
import CreateStudent from "../pages/Admin/CreateStudent";
import FacultyDashboard from "../pages/Faculty/FacultyDashboard";

export const facultyPaths = [
    {
        name: 'Dashboard',
        path: '/faculty/dashboard',
        element: <FacultyDashboard />
    },
    {
        name: 'User Management',
        children: [
            // {
            //     name: 'Create Admin',
            //     path: '/faculty/create-admin',
            //     element: <CreateAdmin />
            // },
            {
                name: 'Create Faculty',
                path: '/faculty/create-faculty',
                element: <CreateFaculty />
            },
            {
                name: 'Create Student',
                path: '/faculty/create-student',
                element: <CreateStudent />
            },
        ]
    },
];