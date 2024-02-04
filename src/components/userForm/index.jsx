import  { useState } from 'react';
import './styles.css';
import PropTypes from 'prop-types';


const UserForm = ({onCreate}) => {
  const [firstName, setFirstName] = useState('');
  const [street, setStreet] = useState('');
  const [city, setCity] = useState('');
  const [email, setEmail] = useState('');
  const [lastName, setLastName] = useState('');
  const [address, setAddress] = useState('');
  const [state, setState] = useState('');
  const [phone, setPhone] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    onCreate({
      firstName,
      street,
      city,
      email,
      lastName,
      address,
      state,
      phone,
    });
   
  };

  return (
    <form className="create-customer-form" onSubmit={handleSubmit}>
      <label className="form-label" htmlFor="firstName">
        First name:
      </label>
      <input
        className="form-input"
        type="text"
        id="firstName"
        value={firstName}
        onChange={(event) => setFirstName(event.target.value)}
      />

      <label className="form-label" htmlFor="street">
        Street:
      </label>
      <input
        className="form-input"
        type="text"
        id="street"
        value={street}
        onChange={(event) => setStreet(event.target.value)}
      />

      <label className="form-label" htmlFor="city">
        City:
      </label>
      <input
        className="form-input"
        type="text"
        id="city"
        value={city}
        onChange={(event) => setCity(event.target.value)}
      />

      <label className="form-label" htmlFor="email">
        Email:
      </label>
      <input
        className="form-input"
        type="email"
        id="email"
        value={email}
        onChange={(event) => setEmail(event.target.value)}
      />

      <label className="form-label" htmlFor="lastName">
        Last name:
      </label>
      <input
        className="form-input"
        type="text"
        id="lastName"
        value={lastName}
        onChange={(event) => setLastName(event.target.value)}
      />

      <label className="form-label" htmlFor="address">
        Address:
      </label>
      <input
        className="form-input"
        type="text"
        id="address"
        value={address}
        onChange={(event) => setAddress(event.target.value)}
      />

      <label className="form-label" htmlFor="state">
        State:
      </label>
      <input
        className="form-input"
        type="text"
        id="state"
        value={state}
        onChange={(event) => setState(event.target.value)}
      />

      <label className="form-label" htmlFor="phone">
        Phone:
      </label>
      <input
        className="form-input"
        type="tel"
        id="phone"
        value={phone}
        onChange={(event) => setPhone(event.target.value)}
      />

      <button className="submit-button" type="submit">
        Create a new customer
      </button>
    </form>
  );
};

UserForm.propTypes = {
    onCreate: PropTypes.func.isRequired,
};

export default UserForm;