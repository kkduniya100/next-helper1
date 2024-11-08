import { useSelector } from "react-redux";
import DashboardLayout from "../../components/DashboardLayout";

const index = () => {
    const token = useSelector((state) => state.auth.token);
    console.log(token, "token...")
    return (
        <DashboardLayout>
            <h2 className="text-2xl font-bold mb-4">Welcome to the Dashboard</h2>
            <p>This is your main dashboard content area.</p>
            {/* Additional dashboard content here */}
        </DashboardLayout>
    )
}

export default index;