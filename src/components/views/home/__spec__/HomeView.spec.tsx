import React from 'react';
import { fireEvent, render } from '@testing-library/react-native';
import HomeView from '../HomeView';
import { HomeContext, HomeContextProps } from '../../../../contexts/home/homeContext';

jest.mock('react-i18next', () => ({
  ...jest.requireActual('react-i18next'),
  useTranslation: () => {
    return {
      t: jest.fn((str) => str),
    };
  },
}));

const mockNavigate = jest.fn((str) => str);

jest.mock('@react-navigation/native', () => ({
  ...jest.requireActual('@react-navigation/native'),
  useNavigation: () => {
    return {
      navigate: mockNavigate,
    };
  },
}));

describe('Given <HomeView/>', () => {
  const setup = (contextProps: HomeContextProps) =>
    render(
      <HomeContext.Provider value={contextProps}>
        <HomeView />
      </HomeContext.Provider>,
    );

  const mockSetHideValues = jest.fn((state) => state);
  const mockContextProps: HomeContextProps = {
    hideValues: false,
    setHideValues: mockSetHideValues,
  };

  describe('When the component is renderer', () => {
    it('Then a text should appear', () => {
      const { getByTestId } = setup(mockContextProps);
      getByTestId('HomeView-container');
    });

    it('Then a <HomeTemplate/> should appear', () => {
      const { getByTestId } = setup(mockContextProps);
      getByTestId('HomeTemplate-View');
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

  describe('When there is a click on the AccountActionsMolecule TouchableOpacity', () => {
    it('Then you should call', () => {
      const { getAllByTestId } = setup(mockContextProps);
      const touchableOpacity = getAllByTestId('AccountActionsMolecule-TouchableOpacity');
      touchableOpacity.forEach((item) => {
        fireEvent.press(item);
      });
    });
  });

  describe('When there is a click on the TitleRedirectorAtom TouchableOpacity', () => {
    it('Then you should call navigate', () => {
      const { getAllByTestId } = setup(mockContextProps);
      const touchableOpacity = getAllByTestId('TitleRedirectorAtom-TouchableOpacity');
      touchableOpacity.forEach((item) => {
        fireEvent.press(item);
        expect(mockNavigate).toHaveBeenCalled();
      });
    });
  });

  describe('When there is a click on the MyCreditCardsAtom TouchableOpacity', () => {
    it('Then you should call navigate', () => {
      const { getByTestId } = setup(mockContextProps);
      const touchableOpacity = getByTestId('MyCreditCardsAtom-TouchableOpacity');
      fireEvent.press(touchableOpacity);
      expect(mockNavigate).toHaveBeenCalled();
    });
  });
});
