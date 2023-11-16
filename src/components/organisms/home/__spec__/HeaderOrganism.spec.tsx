import React from 'react';
import { fireEvent, render } from '@testing-library/react-native';
import HeaderOrganism from '../HeaderOrganism';

const mockNavigate = jest.fn((str) => str);

jest.mock('@react-navigation/native', () => ({
  ...jest.requireActual('@react-navigation/native'),
  useNavigation: () => {
    return {
      navigate: mockNavigate,
    };
  },
}));

describe('Given <HeaderOrganism/>', () => {
  const setup = () => render(<HeaderOrganism />);

  describe('When the component is renderer', () => {
    it('Then a View should appear', () => {
      const { getByTestId } = setup();
      getByTestId('HeaderOrganism-View');
    });

    it('Then a <UserMolecule/> should appear', () => {
      const { getByTestId } = setup();
      getByTestId('UserMolecule-TouchableOpacity');
    });

    it('Then a <ActionsMolecule/> should appear', () => {
      const { getByTestId } = setup();
      getByTestId('ActionsMolecule-View');
    });
  });

  describe('When there is a click on the UserMolecule TouchableOpacity', () => {
    it('Then you should call', () => {
      const { getByTestId } = setup();

      const touchableOpacity = getByTestId('UserMolecule-TouchableOpacity');

      fireEvent.press(touchableOpacity);
    });
  });

  describe('Given <ActionsMolecule/>', () => {
    describe('When there is a click on the ActionsMolecule TouchableOpacity eye', () => {
      it('Then you should call', () => {
        const { getByTestId } = setup();

        const touchableOpacity = getByTestId('ActionsMolecule-TouchableOpacity_icon-eye');

        fireEvent.press(touchableOpacity);
      });
    });

    describe('When there is a click on the ActionsMolecule TouchableOpacity bell', () => {
      it('Then you should call', () => {
        const { getByTestId } = setup();

        const touchableOpacity = getByTestId('ActionsMolecule-TouchableOpacity_icon-bell');

        fireEvent.press(touchableOpacity);
      });
    });
  });
});
