import React from 'react';
import { GlobalStyles } from '../src/components/shared/global/GlobalStyles';
import { ThemeProvider } from 'styled-components';
import { mainTheme } from '../src/themes/main.theme';
import { ToastContextProvider } from '../src/components/shared/molecules/Toast/ToastContext'
import { ShowToast } from '../src/components/shared/molecules/Toast/ToastContainer';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

export const decorators = [
  (Story) => (
    <>
      <ThemeProvider theme={mainTheme}>
      <ToastContextProvider>
      <ShowToast />
        <GlobalStyles/>
        <Story/>
      </ToastContextProvider>
      </ThemeProvider>
    </>
  ),
];
