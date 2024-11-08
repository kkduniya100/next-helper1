import { useState, useEffect } from 'react';
import DashboardLayout from '../../components/DashboardLayout';
import { fetchItems } from '../../utils/api';

const ItemsPage = () => {
  const [itemsData, setItems] = useState([]);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadItems = async () => {
      setIsLoading(true);
      setError(null);
      try {
        const data = await fetchItems(page);
        console.log(data, "abcd")
        setItems(data); // Assuming the API returns an `items` array
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    loadItems();
  }, [page]);

  const handleNextPage = () => setPage((prevPage) => prevPage + 1);
  const handlePrevPage = () => setPage((prevPage) => Math.max(prevPage - 1, 1));

  return (
    <DashboardLayout>
      <h2 className="text-2xl font-bold mb-4">Items List</h2>

      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <ul className="space-y-2">
          {itemsData?.length > 0 ? (
            itemsData?.map((item) => (
              <li key={item.id} className="p-4 bg-white rounded shadow">
                <span>{item.title}</span>
              </li>
            ))
          ) : (
            <p>No items found.</p>
          )}
        </ul>
      )}

      <div className="flex justify-between mt-4">
        <button
          onClick={handlePrevPage}
          disabled={page === 1}
          className="bg-gray-300 px-4 py-2 rounded disabled:opacity-50"
        >
          Previous
        </button>
        <span>Page {page}</span>
        <button
          onClick={handleNextPage}
          className="bg-gray-300 px-4 py-2 rounded"
        >
          Next
        </button>
      </div>
    </DashboardLayout>
  );
};

export default ItemsPage;