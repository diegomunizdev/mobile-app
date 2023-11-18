import React from 'react';
import { fireEvent, render } from '@testing-library/react-native';
import AccountView from '../AccountView';

const mockGoBack = jest.fn();

jest.mock('@react-navigation/native', () => ({
  ...jest.requireActual('@react-navigation/native'),
  useNavigation: () => {
    return {
      goBack: mockGoBack,
    };
  },
}));

describe('Given <AccountView/>', () => {
  const setup = () => render(<AccountView />);

  describe('When the component is renderer', () => {
    it('Then a <View/> should appear', () => {
      const { getByTestId } = setup();
      getByTestId('AccountView-View');
    });

    it('Then a <AccountTemplate/> should appear', () => {
      const { getByTestId } = setup();
      getByTestId('AccountTemplate-View');
    });
  });

  describe('When you click the back button', () => {
    it('Then you should trigger the call to come back', () => {
      const { getByTestId } = setup();
      const goBackButton = getByTestId('AccountTemplate-TouchableOpacity');
      fireEvent.press(goBackButton);
      expect(mockGoBack).toHaveBeenCalled();
    });
  });
});
