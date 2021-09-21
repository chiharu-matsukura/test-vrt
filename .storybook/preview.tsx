import React from 'react';
import { withScreenshot } from 'storycap';

const decorators = [
  (Story: any) => <div style={{ margin: '3em' }}>{Story()}</div>,
  withScreenshot,
];

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

export default decorators;
