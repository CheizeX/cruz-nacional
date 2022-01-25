/* eslint-disable react/jsx-props-no-spreading */
import '../styles/global.css';
import { AppProps } from 'next/app';
import { QueryClient, QueryClientProvider } from 'react-query';
import React from 'react';
import { ThemeProvider } from 'styled-components';
import { Provider } from 'react-redux';
import { ToastContextProvider } from '../components/shared/molecules/Toast/ToastContext';
import { ShowToast } from '../components/shared/molecules/Toast/ToastContainer';
import { WebsocketProvider } from '../chat';
import { mainTheme } from '../themes/main.theme';
import { GlobalStyles } from '../components/shared/global/GlobalStyles';
import { useAuth } from '../hooks/auth';
import { store } from '../redux';

const queryClient = new QueryClient();

const MyApp = ({ Component, pageProps }: AppProps) => {
  useAuth();

  return (
    <>
      <WebsocketProvider>
        <QueryClientProvider client={queryClient}>
          <Provider store={store}>
            <ThemeProvider theme={mainTheme}>
              <ToastContextProvider>
                <ShowToast />
                <GlobalStyles />
                <Component {...pageProps} />
              </ToastContextProvider>
            </ThemeProvider>
          </Provider>
        </QueryClientProvider>
      </WebsocketProvider>
    </>
  );
};

export default MyApp;
