import React from 'react';
import { fireEvent, render } from '@testing-library/react-native';
import ActionsMolecule from '../ActionsMolecule';

describe('Given <ActionsMolecule/>', () => {
  const setup = () => render(<ActionsMolecule />);

  describe('When the component is renderer', () => {
    it('Then a View should appear', () => {
      const { getByTestId } = setup();
      getByTestId('ActionsMolecule-View');
    });

    it('Then a TouchableOpacity eye should appear', () => {
      const { getByTestId } = setup();
      getByTestId('ActionsMolecule-TouchableOpacity_icon-eye');
    });

    it('Then a MaterialCommunityIcons eye should appear', () => {
      const { getByTestId } = setup();
      getByTestId('ActionsMolecule-MaterialCommunityIcons_icon-eye');
    });

    it('Then a TouchableOpacity bell should appear', () => {
      const { getByTestId } = setup();
      getByTestId('ActionsMolecule-TouchableOpacity_icon-bell');
    });

    it('Then a MaterialCommunityIcons bell should appear', () => {
      const { getByTestId } = setup();
      getByTestId('ActionsMolecule-MaterialCommunityIcons_icon-bell');
    });
  });

  describe('When there is a click on the TouchableOpacity eye', () => {
    it('Then you should call', () => {
      const { getByTestId } = setup();

      const touchableOpacity = getByTestId('ActionsMolecule-TouchableOpacity_icon-eye');

      fireEvent.press(touchableOpacity);
    });
  });

  describe('When there is a click on the TouchableOpacity bell', () => {
    it('Then you should call', () => {
      const { getByTestId } = setup();

      const touchableOpacity = getByTestId('ActionsMolecule-TouchableOpacity_icon-bell');

      fireEvent.press(touchableOpacity);
    });
  });
});
