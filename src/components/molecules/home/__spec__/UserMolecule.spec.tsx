import React from 'react';
import { fireEvent, render } from '@testing-library/react-native';
import UserMolecule from '../UserMolecule';

describe('Given <TitleRedirectorAtom/>', () => {
  const setup = () => render(<UserMolecule />);

  describe('When the component is renderer', () => {
    it('Then a TouchableOpacity should appear', () => {
      const { getByTestId } = setup();
      getByTestId('UserMolecule-TouchableOpacity');
    });

    it('Then a View should appear', () => {
      const { getByTestId } = setup();
      getByTestId('UserMolecule-View');
    });

    it('Then a Avatar should appear', () => {
      const { getByTestId } = setup();
      getByTestId('UserMolecule-Avatar');
    });

    it('Then a View user should appear', () => {
      const { getByTestId } = setup();
      getByTestId('UserMolecule-View-user');
    });

    it('Then a View Text hello should appear', () => {
      const { getByTestId } = setup();
      getByTestId('UserMolecule-Text-hello');
    });

    it('Then a View Text username should appear', () => {
      const { getByTestId } = setup();
      getByTestId('UserMolecule-Text-username');
    });
  });

  describe('When there is a click on the TouchableOpacity', () => {
    it('Then you should call', () => {
      const { getByTestId } = setup();

      const touchableOpacity = getByTestId('UserMolecule-TouchableOpacity');

      fireEvent.press(touchableOpacity);
    });
  });
});
