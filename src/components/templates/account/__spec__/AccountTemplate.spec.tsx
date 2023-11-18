import React from 'react';
import { fireEvent, render } from '@testing-library/react-native';
import AccountTemplate from '../AccountTemplate';

const mockGoBack = jest.fn();

jest.mock('@react-navigation/native', () => ({
  ...jest.requireActual('@react-navigation/native'),
  useNavigation: () => {
    return {
      goBack: mockGoBack,
    };
  },
}));

describe('Given <AccountTemplate/>', () => {
  const setup = () => render(<AccountTemplate />);

  describe('When the component is renderer', () => {
    it('Then a <View/> should appear', () => {
      const { getByTestId } = setup();
      getByTestId('AccountTemplate-View');
    });

    it('Then a <TouchableOpacity/> should appear', () => {
      const { getByTestId } = setup();
      getByTestId('AccountTemplate-TouchableOpacity');
    });

    it('Then a <MaterialCommunityIcons/> should appear', () => {
      const { getByTestId } = setup();
      getByTestId('AccountTemplate-MaterialCommunityIcons');
    });

    it('Then a <HeaderAccountOrganism/> should appear', () => {
      const { getByTestId } = setup();
      getByTestId('HeaderAccountOrganism-View');
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
