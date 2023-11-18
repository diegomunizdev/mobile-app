import React from 'react';
import { fireEvent, render } from '@testing-library/react-native';
import LoanContractingMolecule from '../LoanContractingMolecule';

const mockNavigate = jest.fn((str) => str);

jest.mock('@react-navigation/native', () => ({
  ...jest.requireActual('@react-navigation/native'),
  useNavigation: () => {
    return {
      navigate: mockNavigate,
    };
  },
}));

describe('Given <LoanContractingMolecule/>', () => {
  const setup = () => render(<LoanContractingMolecule />);

  describe('When the component is renderer', () => {
    it('Then a View should appear', () => {
      const { getByTestId } = setup();
      getByTestId('LoanContractingMolecule-View');
    });

    it('Then a <TitleRedirectorAtom/> should appear', () => {
      const { getByTestId } = setup();
      getByTestId('TitleRedirectorAtom-TouchableOpacity');
    });

    it('Then a text available value eye should appear', () => {
      const { getByTestId } = setup();
      getByTestId('LoanContractingMolecule-Text_available-value');
    });

    it('Then a text value eye should appear', () => {
      const { getByTestId } = setup();
      getByTestId('LoanContractingMolecule-Text_value');
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
