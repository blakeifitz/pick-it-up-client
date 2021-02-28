import React from 'react';
import { shallow } from 'enzyme';
import FormInputs from '../components/form-inputs';

describe('Form Inputs', () => {
  it('Renders without crashing', () => {
    shallow(<FormInputs />);
  });
});
