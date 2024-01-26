import React from 'react';
import { render } from '@testing-library/react-native';
import HeaderRightAtom from '../HeaderRightAtom';

const mockNavigate = jest.fn((str) => str);

jest.mock('@react-navigation/native', () => ({
  ...jest.requireActual('@react-navigation/native'),
  useNavigation: () => {
    return {
      navigate: mockNavigate,
    };
  },
}));

describe('Given <HeaderRightAtom/>', () => {
  const setup = () => render(<HeaderRightAtom />);

  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe('When the component is renderer', () => {
    it('Then a View should appear', () => {
      const { getByTestId } = setup();
      getByTestId('HeaderRightAtom-TouchableOpacity');
    });
  });
});
