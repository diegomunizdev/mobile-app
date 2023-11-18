import React from 'react';
import { fireEvent, render } from '@testing-library/react-native';
import MyCreditCardsAtom from '../MyCreditCardsAtom';

const mockNavigate = jest.fn((str) => str);

jest.mock('@react-navigation/native', () => ({
  ...jest.requireActual('@react-navigation/native'),
  useNavigation: () => {
    return {
      navigate: mockNavigate,
    };
  },
}));

describe('Given <MyCreditCardsAtom/>', () => {
  const setup = () => render(<MyCreditCardsAtom />);

  describe('When the component is renderer', () => {
    it('Then a TouchableOpacity should appear', () => {
      const { getByTestId } = setup();
      getByTestId('MyCreditCardsAtom-TouchableOpacity');
    });

    it('Then a View should appear', () => {
      const { getByTestId } = setup();
      getByTestId('MyCreditCardsAtom-View');
    });

    it('Then a MaterialCommunityIcons should appear', () => {
      const { getByTestId } = setup();
      getByTestId('MyCreditCardsAtom-MaterialCommunityIcons');
    });

    it('Then a Text should appear', () => {
      const { getByTestId } = setup();
      getByTestId('MyCreditCardsAtom-Text');
    });
  });

  describe('When there is a click on the TouchableOpacity', () => {
    it('Then you should call navigate', () => {
      const { getByTestId } = setup();
      const touchableOpacity = getByTestId('MyCreditCardsAtom-TouchableOpacity');
      fireEvent.press(touchableOpacity);
      expect(mockNavigate).toHaveBeenCalled();
    });
  });
});
