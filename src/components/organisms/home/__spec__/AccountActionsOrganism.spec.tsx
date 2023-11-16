import React from 'react';
import { fireEvent, render } from '@testing-library/react-native';
import AccountActionsOrganism from '../AccountActionsOrganism';

describe('Given <AccountActionsOrganism/>', () => {
  const setup = () => render(<AccountActionsOrganism />);

  describe('When the component is renderer', () => {
    it('Then a View should appear', () => {
      const { getByTestId } = setup();
      getByTestId('AccountActionsOrganism-View');
    });

    it('Then a ScrollView should appear', () => {
      const { getByTestId } = setup();
      getByTestId('AccountActionsOrganism-ScrollView');
    });

    it('Then a <AccountActionsMolecule/> should appear', () => {
      const { getAllByTestId } = setup();
      getAllByTestId('AccountActionsMolecule-TouchableOpacity');
    });
  });

  describe('When there is a click on the AccountActionsMolecule TouchableOpacity', () => {
    it('Then you should call navigate', () => {
      const { getAllByTestId } = setup();

      const touchableOpacity = getAllByTestId('AccountActionsMolecule-TouchableOpacity');
      touchableOpacity.forEach((item) => {
        fireEvent.press(item);
      });
    });
  });
});
