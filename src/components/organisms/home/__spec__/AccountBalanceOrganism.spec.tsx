import React from 'react';
import { fireEvent, render } from '@testing-library/react-native';
import AccountBalanceOrganism from '../AccountBalanceOrganism';

const mockNavigate = jest.fn((str) => str);

jest.mock('@react-navigation/native', () => ({
  ...jest.requireActual('@react-navigation/native'),
  useNavigation: () => {
    return {
      navigate: mockNavigate,
    };
  },
}));

describe('Given <AccountBalanceOrganism/>', () => {
  const setup = () => render(<AccountBalanceOrganism />);

  describe('When the component is renderer', () => {
    it('Then a View should appear', () => {
      const { getByTestId } = setup();
      getByTestId('AccountBalanceOrganism-View');
    });

    it('Then a <AccountBalanceMolecule/> should appear', () => {
      const { getByTestId } = setup();
      getByTestId('AccountBalanceMolecule-View');
    });
  });

  describe('When there is a click on the TitleRedirectorAtom TouchableOpacity', () => {
    it('Then you should call navigate', () => {
      const { getByTestId } = setup();

      const touchableOpacity = getByTestId('TitleRedirectorAtom-TouchableOpacity');

      fireEvent.press(touchableOpacity);

      expect(mockNavigate).toHaveBeenCalled();
    });
  });
});
