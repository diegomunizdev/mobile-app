import React from 'react';
import { fireEvent, render } from '@testing-library/react-native';
import HeaderOrganism from '../HeaderOrganism';
import { HomeContext, HomeContextProps } from '../../../../contexts/home/homeContext';

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
  const setup = (contextProps: HomeContextProps) =>
    render(
      <HomeContext.Provider value={contextProps}>
        <HeaderOrganism />
      </HomeContext.Provider>,
    );

  const mockSetHideValues = jest.fn();
  const mockContextProps = { hideValues: false, setHideValues: mockSetHideValues };

  describe('When the component is renderer', () => {
    it('Then a View should appear', () => {
      const { getByTestId } = setup(mockContextProps);
      getByTestId('HeaderOrganism-View');
    });

    it('Then a <UserMolecule/> should appear', () => {
      const { getByTestId } = setup(mockContextProps);
      getByTestId('UserMolecule-TouchableOpacity');
    });

    it('Then a <ActionsMolecule/> should appear', () => {
      const { getByTestId } = setup(mockContextProps);
      getByTestId('ActionsMolecule-View');
    });
  });

  describe('When there is a click on the UserMolecule TouchableOpacity', () => {
    it('Then you should call', () => {
      const { getByTestId } = setup(mockContextProps);
      const touchableOpacity = getByTestId('UserMolecule-TouchableOpacity');
      fireEvent.press(touchableOpacity);
      expect(mockNavigate).toHaveBeenCalled();
    });
  });

  describe('Given <ActionsMolecule/>', () => {
    describe('When the user changes the view of the values', () => {
      it('Then when it is true the eye should appear', () => {
        const { getByTestId } = setup({ ...mockContextProps, hideValues: true });
        getByTestId('ActionsMolecule-MaterialCommunityIcons_icon-eye');
      });
    });

    describe('When there is a click on the ActionsMolecule TouchableOpacity eye', () => {
      it('Then you should call', () => {
        const { getByTestId } = setup(mockContextProps);
        const touchableOpacity = getByTestId('ActionsMolecule-TouchableOpacity_icon');
        fireEvent.press(touchableOpacity);
        expect(mockSetHideValues).toHaveBeenCalled();
      });
    });

    describe('When there is a click on the ActionsMolecule TouchableOpacity bell', () => {
      it('Then you should call', () => {
        const { getByTestId } = setup(mockContextProps);
        const touchableOpacity = getByTestId('ActionsMolecule-TouchableOpacity_icon-bell');
        fireEvent.press(touchableOpacity);
      });
    });
  });
});
