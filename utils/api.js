export async function loginUser(email, password) {
    try {
      const response = await fetch('/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });
  
      if (!response.ok) {
        throw new Error('Failed to login');
      }
  
      const data = await response.json();
      return data; // or data.token if you only need the token
    } catch (error) {
      console.error('Error logging in:', error);
      throw error;
    }
  }


  export async function fetchItems(page = 1) {
    try {
      const response = await fetch(`https://api.escuelajs.co/api/v1/products?offset=${page*10}&limit=10`);
      if (!response.ok) {
        throw new Error('Failed to fetch items');
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching items:', error);
      throw error;
    }
  }
  
  