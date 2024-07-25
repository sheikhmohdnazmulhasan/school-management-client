import MainLayout from "./components/layouts/MainLayout"
import ProtectedRoute from "./components/layouts/ProtectedRoute"

const Root = () => <ProtectedRoute><MainLayout /></ProtectedRoute>

export default Root

