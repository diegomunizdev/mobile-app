import React from 'react';

import { render } from '@testing-library/react-native';
import HomeView from './HomeView';

const setup = () => render(<HomeView />);

describe('Given <HomeView/>', () => {
  describe('When the component is renderer', () => {
    it('Then a text should appear', () => {
      const { getByTestId } = setup();
      getByTestId('HomeView-Text');
    });
  });
});
