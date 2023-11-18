import React from 'react';
import { fireEvent, render } from '@testing-library/react-native';
import UserMolecule from '../UserMolecule';

type UserMoleculeProps = {
  action?: () => void;
};

describe('Given <TitleRedirectorAtom/>', () => {
  const setup = (props: UserMoleculeProps) => render(<UserMolecule {...props} />);

  const actionMock = jest.fn();
  const mockProps: UserMoleculeProps = {
    action: actionMock,
  };

  describe('When the component is renderer', () => {
    it('Then a TouchableOpacity should appear', () => {
      const { getByTestId } = setup(mockProps);
      getByTestId('UserMolecule-TouchableOpacity');
    });

    it('Then a View should appear', () => {
      const { getByTestId } = setup(mockProps);
      getByTestId('UserMolecule-View');
    });

    it('Then a Avatar should appear', () => {
      const { getByTestId } = setup(mockProps);
      getByTestId('UserMolecule-Avatar');
    });

    it('Then a View user should appear', () => {
      const { getByTestId } = setup(mockProps);
      getByTestId('UserMolecule-View-user');
    });

    it('Then a View Text hello should appear', () => {
      const { getByTestId } = setup(mockProps);
      getByTestId('UserMolecule-Text-hello');
    });

    it('Then a View Text username should appear', () => {
      const { getByTestId } = setup(mockProps);
      getByTestId('UserMolecule-Text-username');
    });
  });

  describe('When there is a click on the TouchableOpacity', () => {
    it('Then you should call', () => {
      const { getByTestId } = setup(mockProps);

      const touchableOpacity = getByTestId('UserMolecule-TouchableOpacity');

      fireEvent.press(touchableOpacity);
      expect(actionMock).toHaveBeenCalled();
    });
  });
});
