import React from 'react';
import { fireEvent, render } from '@testing-library/react-native';
import AccountBalanceMolecule from '../AccountBalanceMolecule';
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

describe('Given <AccountBalanceMolecule/>', () => {
  const setup = (contextProps: HomeContextProps) =>
    render(
      <HomeContext.Provider value={contextProps}>
        <AccountBalanceMolecule />
      </HomeContext.Provider>,
    );

  const mockSetHideValues = jest.fn((state) => state);
  const mockContextProps: HomeContextProps = {
    hideValues: false,
    setHideValues: mockSetHideValues,
  };

  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe('When the component is renderer', () => {
    it('Then a View should appear', () => {
      const { getByTestId } = setup(mockContextProps);
      getByTestId('AccountBalanceMolecule-View');
    });

    it('Then a account balance text should appear', () => {
      const { getByTestId } = setup({ ...mockContextProps });
      getByTestId('AccountBalanceMolecule-Text');
    });

    it('Then the account balance should appear when hideValues is true', () => {
      const { getByTestId } = setup({ ...mockContextProps, hideValues: true });
      const value = getByTestId('AccountBalanceMolecule-Text');
      expect(value.props.children).toEqual('R$ 1.356,90');
    });

    it('Then the account balance should not appear when hideValues is false', () => {
      const { getByTestId } = setup(mockContextProps);
      const value = getByTestId('AccountBalanceMolecule-Text');
      expect(value.props.children).toEqual('R$ ***,**');
    });
  });

  describe('When the <TitleRedirectorAtom/> is renderer', () => {
    it('Then a TouchableOpacity should appear', () => {
      const { getByTestId } = setup(mockContextProps);
      getByTestId('TitleRedirectorAtom-TouchableOpacity');
    });

    it('Then you should call navigate when it is clicked', () => {
      const { getByTestId } = setup(mockContextProps);
      const touchableOpacity = getByTestId('TitleRedirectorAtom-TouchableOpacity');
      fireEvent.press(touchableOpacity);
      expect(mockNavigate).toHaveBeenCalled();
    });
  });
});
