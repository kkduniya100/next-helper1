import Link from 'next/link';

const Sidebar = () => {
  return (
    <aside className="bg-gray-900 text-white w-64 h-screen p-5">
      <nav className="space-y-4">
        <Link href="/dashboard">
          <span className="block py-2 px-4 rounded hover:bg-gray-700">Dashboard</span>
        </Link>
        <Link href="/dashboard/items">
          <span className="block py-2 px-4 rounded hover:bg-gray-700">Items</span>
        </Link>
        <Link href="/dashboard/settings">
          <span className="block py-2 px-4 rounded hover:bg-gray-700">Settings</span>
        </Link>
      </nav>
    </aside>
  );
};

export default Sidebar;