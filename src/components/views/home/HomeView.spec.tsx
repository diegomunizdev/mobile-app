import React from 'react';
import { render } from '@testing-library/react-native';
import HomeView from './HomeView';

jest.mock('react-i18next', () => ({
  ...jest.requireActual('react-i18next'),
  useTranslation: () => {
    return {
      t: jest.fn((str) => str),
    };
  },
}));

describe('Given <HomeView/>', () => {
  const setup = () => render(<HomeView />);

  describe('When the component is renderer', () => {
    it('Then a text should appear', () => {
      const { getByTestId } = setup();
      getByTestId('HomeView-Text');
    });
  });
});
