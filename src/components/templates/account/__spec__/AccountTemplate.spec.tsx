import React from 'react';
import { render } from '@testing-library/react-native';
import AccountTemplate from '../AccountTemplate';

describe('Given <AccountTemplate/>', () => {
  const setup = () => render(<AccountTemplate />);

  describe('When the component is renderer', () => {
    it('Then a <View/> should appear', () => {
      const { getByTestId } = setup();
      getByTestId('AccountTemplate-container');
    });
  });
});
