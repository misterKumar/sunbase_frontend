import  { useState, useEffect } from 'react';
import axios from 'axios';
import './styles.css';

const Data = () => {
    const [customers, setCustomers] = useState([]);
    const [searchBy, setSearchBy] = useState('firstName');
    const [searchTerm, setSearchTerm] = useState('');
    const [isLoading, setIsLoading] = useState(false);
  
    const fetchCustomers = async () => {
      setIsLoading(true);
      try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/users');
        setCustomers(response.data);
      } catch (error) {
        console.error('Error fetching customers:', error);
      } finally {
        setIsLoading(false);
      }
    };
  
    useEffect(() => {
      fetchCustomers();
    }, []);
  
    const handleSearch = (e) => {
      setSearchTerm(e.target.value);
    };
  
    const filteredCustomers = customers.filter((customer) => {
      if (searchBy === 'firstName') {
        return customer.name.toLowerCase().includes(searchTerm.toLowerCase());
      } else if (searchBy === 'city') {
        return customer.address.city.toLowerCase().includes(searchTerm.toLowerCase());
      } else if (searchBy === 'email') {
        return customer.email.toLowerCase().includes(searchTerm.toLowerCase());
      } else if (searchBy === 'phone') {
        return customer.phone.toLowerCase().includes(searchTerm.toLowerCase());
      }
  
      return true; // Include all customers if searchBy doesn't match any criteria
    });
  
    const handleDelete = async (id) => {
      try {
        await axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`);
        setCustomers((prevCustomers) => prevCustomers.filter((customer) => customer.id !== id));
      } catch (error) {
        console.error('Error deleting customer:', error);
      }
    };
  
    const handleSync = async () => {
      fetchCustomers();
    };

  return (
    <div className="App">
      <input
        type="text"
        placeholder="Search by name, city, email, or phone"
        value={searchTerm}
        onChange={handleSearch}
      />
      <select value={searchBy} onChange={(e) => setSearchBy(e.target.value)}>
        <option value="firstName">First Name</option>
        <option value="city">City</option>
        <option value="email">Email</option>
        <option value="phone">Phone</option>
      </select>
      <button onClick={handleSync}>Sync</button>
      <table>
        <thead>
          <tr>
            <th>First Name</th>
            <th>City</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {isLoading ? (
            <tr>
              <td colSpan={5}>Loading...</td>
            </tr>
          ) : (
            filteredCustomers.map((customer) => (
              <tr key={customer.id}>
                <td>{customer.name}</td>
                <td>{customer.address.city}</td>
                <td>{customer.email}</td>
                <td>{customer.phone}</td>
                <td>
                  <button>Edit</button>
                  <button onClick={() => handleDelete(customer.id)}>Delete</button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Data;
