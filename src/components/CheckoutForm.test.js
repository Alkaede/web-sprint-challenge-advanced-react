import React from "react";
import { render, screen } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";
import userEvent from '@testing-library/user-event';

// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => {
  render(<CheckoutForm/>);
  const header = screen.getByText('Checkout Form');
  expect(header).toBeTruthy();
});

test("form shows success message on submit with form details", () => {
  render(<CheckoutForm/>)
  const firstName = screen.getByLabelText('First Name:');
  userEvent.type(firstName, 'First');

  const lastName = screen.getByLabelText('Last Name:');
  userEvent.type(lastName, 'Last');

  const address = screen.getByLabelText('Address:');
  userEvent.type(address, '1234 Street');
  
  const city = screen.getByLabelText('City:');
  userEvent.type(city, 'City');

  const state = screen.getByLabelText('State:');
  userEvent.type(state, 'California');

  const zip = screen.getByLabelText('Zip:');
  userEvent.type(zip, '11111');

  const checkout = screen.getByText('Checkout');
  userEvent.click(checkout);

  const success = screen.getByText('You have ordered some plants! Woo-hoo!');
  expect(success).toBeDefined();
  expect(success).toBeTruthy();

  const name = screen.getByText('First Last');
  expect(name).toBeDefined();
  expect(name).toBeTruthy();

  const add = screen.getByText('1234 Street');
  expect(add).toBeDefined();
  expect(add).toBeTruthy();

  const csz = screen.getByText('City, California 11111');
  expect(csz).toBeDefined();
  expect(csz).toBeTruthy();
  
});
