import React from 'react';
import { fireEvent, render } from '@testing-library/react-native';
import ActionsMolecule from '../ActionsMolecule';
import { HomeContext, HomeContextProps } from '../../../../contexts/home/homeContext';

describe('Given <ActionsMolecule/>', () => {
  const setup = (contextProps: HomeContextProps) =>
    render(
      <HomeContext.Provider value={contextProps}>
        <ActionsMolecule />
      </HomeContext.Provider>,
    );

  const mockSetHideValues = jest.fn();
  const mockContextProps = { hideValues: false, setHideValues: mockSetHideValues };

  describe('When the component is renderer', () => {
    it('Then a View should appear', () => {
      const { getByTestId } = setup(mockContextProps);
      getByTestId('ActionsMolecule-View');
    });

    it('Then a TouchableOpacity eye should appear', () => {
      const { getByTestId } = setup(mockContextProps);
      getByTestId('ActionsMolecule-TouchableOpacity_icon');
    });

    describe('When the user changes the view of the values', () => {
      it('Then when it is true the eye should appear', () => {
        const { getByTestId } = setup({ ...mockContextProps, hideValues: true });
        getByTestId('ActionsMolecule-MaterialCommunityIcons_icon-eye');
      });

      it('Then when it is false the eye shouldn`t appear', () => {
        const { getByTestId } = setup(mockContextProps);
        getByTestId('ActionsMolecule-MaterialCommunityIcons_icon-eye-off');
      });
    });

    it('Then a TouchableOpacity bell should appear', () => {
      const { getByTestId } = setup(mockContextProps);
      getByTestId('ActionsMolecule-TouchableOpacity_icon-bell');
    });

    it('Then a MaterialCommunityIcons bell should appear', () => {
      const { getByTestId } = setup(mockContextProps);
      getByTestId('ActionsMolecule-MaterialCommunityIcons_icon-bell');
    });
  });

  describe('When there is a click on the TouchableOpacity', () => {
    it('Then you should call', () => {
      const { getByTestId } = setup({ ...mockContextProps, hideValues: true });

      const touchableOpacity = getByTestId('ActionsMolecule-TouchableOpacity_icon');

      fireEvent.press(touchableOpacity);
      expect(mockSetHideValues).toHaveBeenCalled();
    });
  });

  describe('When there is a click on the TouchableOpacity bell', () => {
    it('Then you should call', () => {
      const { getByTestId } = setup(mockContextProps);

      const touchableOpacity = getByTestId('ActionsMolecule-TouchableOpacity_icon-bell');

      fireEvent.press(touchableOpacity);
    });
  });
});
