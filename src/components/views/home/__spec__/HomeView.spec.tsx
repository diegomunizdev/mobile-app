import React from 'react';
import { fireEvent, render } from '@testing-library/react-native';
import HomeView from '../HomeView';

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
  const setup = () => render(<HomeView />);

  describe('When the component is renderer', () => {
    it('Then a text should appear', () => {
      const { getByTestId } = setup();
      getByTestId('HomeView-View');
    });

    it('Then a <HomeTemplate/> should appear', () => {
      const { getByTestId } = setup();
      getByTestId('HomeTemplate-View');
    });
  });

  describe('When there is a click on the UserMolecule TouchableOpacity', () => {
    it('Then you should call', () => {
      const { getByTestId } = setup();

      const touchableOpacity = getByTestId('UserMolecule-TouchableOpacity');

      fireEvent.press(touchableOpacity);
    });
  });

  describe('When there is a click on the ActionsMolecule TouchableOpacity eye', () => {
    it('Then you should call', () => {
      const { getByTestId } = setup();

      const touchableOpacity = getByTestId('ActionsMolecule-TouchableOpacity_icon');

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

  describe('When there is a click on the AccountActionsMolecule TouchableOpacity', () => {
    it('Then you should call', () => {
      const { getAllByTestId } = setup();

      const touchableOpacity = getAllByTestId('AccountActionsMolecule-TouchableOpacity');
      touchableOpacity.forEach((item) => {
        fireEvent.press(item);
      });
    });
  });

  describe('When there is a click on the TitleRedirectorAtom TouchableOpacity', () => {
    it('Then you should call navigate', () => {
      const { getAllByTestId } = setup();

      const touchableOpacity = getAllByTestId('TitleRedirectorAtom-TouchableOpacity');
      touchableOpacity.forEach((item) => {
        fireEvent.press(item);
        expect(mockNavigate).toHaveBeenCalled();
      });
    });
  });

  describe('When there is a click on the MyCreditCardsAtom TouchableOpacity', () => {
    it('Then you should call navigate', () => {
      const { getByTestId } = setup();

      const touchableOpacity = getByTestId('MyCreditCardsAtom-TouchableOpacity');

      fireEvent.press(touchableOpacity);
    });
  });
});
