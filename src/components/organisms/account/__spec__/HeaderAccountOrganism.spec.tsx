import React from 'react';
import { render } from '@testing-library/react-native';
import HeaderAccountOrganism from '../HeaderAccountOrganism';

describe('Given <HeaderAccountOrganism/>', () => {
  const setup = () => render(<HeaderAccountOrganism />);

  describe('When the component is renderer', () => {
    it('Then a View should appear', () => {
      const { getByTestId } = setup();
      getByTestId('HeaderAccountOrganism-View');
    });

    it('Then a <UserMolecule/> should appear', () => {
      const { getByTestId } = setup();
      getByTestId('UserMolecule-TouchableOpacity');
    });
  });
});
