import React from 'react';
import { fireEvent, render } from '@testing-library/react-native';
import AccountActionsMolecule from '../AccountActionsMolecule';

type AccountActionsMoleculeProps = {
  name: string;
  icon: string;
};

describe('Given <AccountActionsMolecule/>', () => {
  const setup = (props: AccountActionsMoleculeProps) =>
    render(<AccountActionsMolecule {...props} />);

  const mockProps = { name: 'name', icon: 'bell-outline' };

  describe('When the component is renderer', () => {
    it('Then a TouchableOpacity eye should appear', () => {
      const { getByTestId } = setup(mockProps);
      getByTestId('AccountActionsMolecule-TouchableOpacity');
    });

    it('Then a View should appear', () => {
      const { getByTestId } = setup(mockProps);
      getByTestId('AccountActionsMolecule-View');
    });

    it('Then a View icon should appear', () => {
      const { getByTestId } = setup(mockProps);
      getByTestId('AccountActionsMolecule-View_icon');
    });

    it('Then a MaterialCommunityIcons should appear', () => {
      const { getByTestId } = setup(mockProps);
      getByTestId('AccountActionsMolecule-MaterialCommunityIcons_icon');
    });

    it('Then a Text should appear', () => {
      const { getByTestId } = setup(mockProps);
      getByTestId('AccountActionsMolecule-Text');
    });
  });

  describe('When there is a click on the TouchableOpacity', () => {
    it('Then you should call', () => {
      const { getByTestId } = setup(mockProps);

      const touchableOpacity = getByTestId('AccountActionsMolecule-TouchableOpacity');

      fireEvent.press(touchableOpacity);
    });
  });
});
