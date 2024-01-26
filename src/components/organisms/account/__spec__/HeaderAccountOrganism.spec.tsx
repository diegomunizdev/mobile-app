import React from 'react';
import { render } from '@testing-library/react-native';
import HeaderAccountOrganism from '../HeaderAccountOrganism';

describe('Given <HeaderAccountOrganism/>', () => {
  const setup = () => render(<HeaderAccountOrganism />);

  describe('When the component is renderer', () => {
    it('Then a View should appear', () => {
      const { getByTestId } = setup();
      getByTestId('HeaderAccountOrganism-container');
    });

    it('Then a <AccountMolecule/> should appear', () => {
      const { getByTestId } = setup();
      getByTestId('AccountMolecule-TouchableOpacity');
    });
  });
});
