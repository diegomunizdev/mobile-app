import React from 'react';
import { fireEvent, render } from '@testing-library/react-native';
import AccountBalanceMolecule from '../AccountBalanceMolecule';

const mockNavigate = jest.fn((str) => str);

jest.mock('@react-navigation/native', () => ({
  ...jest.requireActual('@react-navigation/native'),
  useNavigation: () => {
    return {
      navigate: mockNavigate,
    };
  },
}));

describe('Given <AccountBalanceMolecule/>', () => {
  const setup = () => render(<AccountBalanceMolecule />);

  describe('When the component is renderer', () => {
    it('Then a View should appear', () => {
      const { getByTestId } = setup();
      getByTestId('AccountBalanceMolecule-View');
    });

    it('Then a Text should appear', () => {
      const { getByTestId } = setup();
      getByTestId('AccountBalanceMolecule-Text');
    });
  });

  describe('When the <TitleRedirectorAtom/> is renderer', () => {
    it('Then a TouchableOpacity should appear', () => {
      const { getByTestId } = setup();
      getByTestId('TitleRedirectorAtom-TouchableOpacity');
    });

    describe('When there is a click on the TouchableOpacity', () => {
      it('Then you should call navigate', () => {
        const { getByTestId } = setup();

        const touchableOpacity = getByTestId('TitleRedirectorAtom-TouchableOpacity');

        fireEvent.press(touchableOpacity);

        expect(mockNavigate).toHaveBeenCalled();
      });
    });
  });
});
