import  { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Data from './components/data';
import Login from './components/login';
import UserForm from './components/userForm';
import axios from 'axios';


const App = () => {
  const [newCustomer, setNewCustomer] = useState(null);

  const handleCreateCustomer = async (customer) => {
    try {
      // we have to replace API endpoint to create a new customer on the server for now i am using dummy Api
      const response = await axios.post('https://sunbase-endpoint/create-customer', customer);
  
      if (response.status === 201) {
        // If the customer is successfully created on the server
        setNewCustomer(response.data); // Update the state with the response from the server
      } else {
        console.error('Failed to create customer on the server.');
     
      }
    } catch (error) {
      console.error('Error creating customer:', error);
      
    }
  };
  

  return (
    <div>
    <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route path="/add-user" element={<UserForm onCreate={handleCreateCustomer}/>}></Route>
        <Route path="/users-info" element={<Data />}></Route>
      </Routes>
      

      {newCustomer && (
        <div className="notification">
          New Customer Created:
          <pre>{JSON.stringify(newCustomer, null, 2)}</pre>
        </div>
      )}
    </div>
  );
};

export default App;
