import React from 'react';
import { fireEvent, render } from '@testing-library/react-native';
import CreditCardOrganism from '../CreditCardOrganism';

const mockNavigate = jest.fn((str) => str);

jest.mock('@react-navigation/native', () => ({
  ...jest.requireActual('@react-navigation/native'),
  useNavigation: () => {
    return {
      navigate: mockNavigate,
    };
  },
}));

describe('Given <CreditCardOrganism/>', () => {
  const setup = () => render(<CreditCardOrganism />);

  describe('When the component is renderer', () => {
    it('Then a View should appear', () => {
      const { getByTestId } = setup();
      getByTestId('CreditCardOrganism-View');
    });

    it('Then a <CreditCardMolecule/> should appear', () => {
      const { getByTestId } = setup();
      getByTestId('CreditCardMolecule-View');
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

  describe('When there is a click on the MyCreditCardsAtom TouchableOpacity', () => {
    it('Then you should call navigate', () => {
      const { getByTestId } = setup();

      const touchableOpacity = getByTestId('MyCreditCardsAtom-TouchableOpacity');

      fireEvent.press(touchableOpacity);
    });
  });
});
