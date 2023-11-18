import React from 'react';
import { fireEvent, render } from '@testing-library/react-native';
import CreditCardMolecule from '../CreditCardMolecule';

const mockNavigate = jest.fn((str) => str);

jest.mock('@react-navigation/native', () => ({
  ...jest.requireActual('@react-navigation/native'),
  useNavigation: () => {
    return {
      navigate: mockNavigate,
    };
  },
}));

describe('Given <CreditCardMolecule/>', () => {
  const setup = () => render(<CreditCardMolecule />);

  describe('When the component is renderer', () => {
    it('Then a View should appear', () => {
      const { getByTestId } = setup();
      getByTestId('CreditCardMolecule-View');
    });

    it('Then a <TitleRedirectorAtom/> should appear', () => {
      const { getByTestId } = setup();
      getByTestId('TitleRedirectorAtom-TouchableOpacity');
    });

    it('Then a <InfoCreditCard/> should appear', () => {
      const { getByTestId } = setup();
      getByTestId('InfoCreditCard-View');
    });

    it('Then a <MyCreditCardsAtom/> should appear', () => {
      const { getByTestId } = setup();
      getByTestId('MyCreditCardsAtom-TouchableOpacity');
    });
  });

  describe('When there is a click on the MyCreditCardsAtom TouchableOpacity', () => {
    it('Then you should call navigate', () => {
      const { getByTestId } = setup();
      const touchableOpacity = getByTestId('MyCreditCardsAtom-TouchableOpacity');
      fireEvent.press(touchableOpacity);
      expect(mockNavigate).toHaveBeenCalled();
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
