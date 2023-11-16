import React from 'react';
import { fireEvent, render } from '@testing-library/react-native';
import LoanContractingOrganism from '../LoanContractingOrganism';

const mockNavigate = jest.fn((str) => str);

jest.mock('@react-navigation/native', () => ({
  ...jest.requireActual('@react-navigation/native'),
  useNavigation: () => {
    return {
      navigate: mockNavigate,
    };
  },
}));

describe('Given <LoanContractingOrganism/>', () => {
  const setup = () => render(<LoanContractingOrganism />);

  describe('When the component is renderer', () => {
    it('Then a View should appear', () => {
      const { getByTestId } = setup();
      getByTestId('LoanContractingOrganism-View');
    });

    it('Then a <LoanContractingMolecule/> should appear', () => {
      const { getByTestId } = setup();
      getByTestId('LoanContractingMolecule-View');
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
