import React from 'react';
import { shallow } from 'enzyme';
import LoginForm from '../components/login-form/login-form';

describe('Login Form', () => {
  it('Renders without crashing', () => {
    shallow(<LoginForm />);
  });
});
