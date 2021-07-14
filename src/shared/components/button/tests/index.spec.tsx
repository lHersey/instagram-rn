import { render } from '@testing-library/react-native';
import React from 'react';
import Providers from 'shared/providers/test-providers';

import Button from '../index';

describe('<Button />', () => {
  describe('snapshots', () => {
    it('should match snapshot on base state', () => {
      expect.hasAssertions();
      const rendered = render(
        <Providers>
          <Button text="Hello Button" />
        </Providers>,
      ).toJSON();

      expect(rendered).toMatchSnapshot();
    });

    it('should match snapshot dense modifier', () => {
      expect.hasAssertions();
      const rendered = render(
        <Providers>
          <Button text="Hello Button" dense />
        </Providers>,
      ).toJSON();

      expect(rendered).toMatchSnapshot();
    });
  });

  describe('unit', () => {
    it('should render the text', () => {
      expect.hasAssertions();
      const { getByText } = render(
        <Providers>
          <Button text="Hello Button" />
        </Providers>,
      );

      expect(getByText('Hello Button')).toBeTruthy();
    });
  });
});
