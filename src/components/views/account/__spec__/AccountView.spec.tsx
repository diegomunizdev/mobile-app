import React from 'react';
import { render } from '@testing-library/react-native';
import AccountView from '../AccountView';

describe('Given <AccountView/>', () => {
  const setup = () => render(<AccountView />);

  describe('When the component is renderer', () => {
    it('Then a <View/> should appear', () => {
      const { getByTestId } = setup();
      getByTestId('AccountView-View');
    });

    it('Then a <AccountTemplate/> should appear', () => {
      const { getByTestId } = setup();
      getByTestId('AccountTemplate-container');
    });
  });
});
