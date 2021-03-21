import React, { useState } from "react";
import {useForm} from '../hooks/useForm';


const initialValue = {
  firstName: "",
  lastName: "",
  address: "",
  city: "",
  state: "",
  zip: "",
};

// This form should be handled by a "useForm" custom hook
// Build out the logic needed for a form custom hook (see the useForm.js file)
// and replace the necessary stateful logic from CheckoutForm with the hook

const CheckoutForm = ({errors}) => {
  // moved all states into useForm.js
  // including success
  const [values, handleChanges, handleSubmit, success] = useForm(initialValue);

  // setting our values to the value state from custom hook
  const {firstName, lastName, address, city, state, zip} = values;

  return (
    <>
      <form onSubmit={handleSubmit}>
        {errors.length > 0 && <div>THERE ARE ERRORS</div>}
        <h2>Checkout Form</h2>
        <label>
          First Name:
          <input
            name="firstName"
            value={firstName}
            onChange={handleChanges}
          />
        </label>
        <label>
          Last Name:
          <input
            name="lastName"
            value={lastName}
            onChange={handleChanges}
          />
        </label>
        <label>
          Address:
          <input
            name="address"
            value={address}
            onChange={handleChanges}
          />
        </label>
        <label>
          City:
          <input name="city" value={city} onChange={handleChanges} />
        </label>
        <label>
          State:
          <input name="state" value={state} onChange={handleChanges} />
        </label>
        <label>
          Zip:
          <input name="zip" value={zip} onChange={handleChanges} />
        </label>
        <button>Checkout</button>
      </form>

      {success && (
        <div className="success-message" data-testid="successMessage">
          <p>
            You have ordered some plants! Woo-hoo! <span role="img">🎉</span>
          </p>
          <p>Your new green friends will be shipped to:</p>
          <br />
          <br />
          <p>
            {firstName} {lastName}
          </p>
          <p>{address}</p>
          <p>
            {city}, {state} {zip}
          </p>
        </div>
      )}
    </>
  );
};

export default CheckoutForm;
