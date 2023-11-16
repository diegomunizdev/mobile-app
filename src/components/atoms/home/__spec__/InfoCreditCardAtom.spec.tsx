import React from 'react';
import { render } from '@testing-library/react-native';
import InfoCreditCardAtom from '../InfoCreditCardAtom';

describe('Given <InfoCreditCardAtom/>', () => {
  const setup = () => render(<InfoCreditCardAtom />);

  describe('When the component is renderer', () => {
    it('Then a View should appear', () => {
      const { getByTestId } = setup();
      getByTestId('InfoCreditCard-View');
    });

    it('Then a current invoice text should appear', () => {
      const { getByTestId } = setup();
      getByTestId('InfoCreditCard-Text_current-invoice');
    });

    it('Then a value should appear', () => {
      const { getByTestId } = setup();
      getByTestId('InfoCreditCard-Text_value');
    });

    it('Then a available value should appear', () => {
      const { getByTestId } = setup();
      getByTestId('InfoCreditCard-Text_available-value');
    });
  });
});
