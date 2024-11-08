import { useDispatch, useSelector } from "react-redux";
import { clearCredentials } from '../redux/slices/authSlice';
import { useRouter } from "next/router";

const Header = () => {
    const dispatch = useDispatch();
    const router = useRouter();

    // Optional: Get user info from Redux or localStorage
    // const user = useSelector((state) => state.auth.user) || JSON.parse(localStorage.getItem('user') || []);
    const user = useSelector((state) => state.auth.user);

    const handleLogout = () => {
        dispatch(clearCredentials()); // Clear Redux store
        localStorage.removeItem('token'); // Clear token from localStorage
        localStorage.removeItem('user'); // Clear user info from localStorage
        router.push('/login'); // Navigate to login
    };

    return (
      <header className="bg-gray-800 text-white p-4 flex justify-between items-center">
        <h1 className="text-lg font-semibold">Dashboard</h1>
        <div className="flex items-center space-x-4">
          <p>Welcome, {user?.name || 'User'}</p> {/* Display user's name if available */}
          <button onClick={handleLogout} className="bg-blue-500 text-white px-3 py-1 rounded">Logout</button>
        </div>
      </header>
    );
  };
  
export default Header;
