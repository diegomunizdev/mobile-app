import React from 'react';
import { fireEvent, render } from '@testing-library/react-native';
import TitleRedirectorAtom from '../TitleRedirectorAtom';

const mockNavigate = jest.fn((str) => str);

jest.mock('@react-navigation/native', () => ({
  ...jest.requireActual('@react-navigation/native'),
  useNavigation: () => {
    return {
      navigate: mockNavigate,
    };
  },
}));

type TitleRedirectorAtomProps = {
  title: string;
  navigateName: string;
};

describe('Given <TitleRedirectorAtom/>', () => {
  const setup = (props: TitleRedirectorAtomProps) => render(<TitleRedirectorAtom {...props} />);

  describe('When the component is renderer', () => {
    it('Then a TouchableOpacity should appear', () => {
      const { getByTestId } = setup({ title: 'title', navigateName: 'navigateName' });
      getByTestId('TitleRedirectorAtom-TouchableOpacity');
    });

    it('Then a Text should appear', () => {
      const { getByText } = setup({ title: 'action title', navigateName: 'navigateName' });
      getByText('action title');
    });

    it('Then a MaterialCommunityIcons should appear', () => {
      const { getByTestId } = setup({ title: 'title', navigateName: 'navigateName' });
      getByTestId('TitleRedirectorAtom-MaterialCommunityIcons');
    });
  });

  describe('When there is a click on the TouchableOpacity', () => {
    it('Then you should call navigate', () => {
      const { getByTestId } = setup({ title: 'title', navigateName: 'navigateName' });

      const touchableOpacity = getByTestId('TitleRedirectorAtom-TouchableOpacity');

      fireEvent.press(touchableOpacity);

      expect(mockNavigate).toHaveBeenCalled();
    });
  });
});
