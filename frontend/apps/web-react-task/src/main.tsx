import { ThemeProvider } from '@material-ui/core';
import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';
import { Provider } from "react-redux";

import App from './app/app';
import { responsiveTheme } from './configs/network/theme/material';
import store  from './configs/redux/store';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
	<StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={responsiveTheme}>
		<App />
      </ThemeProvider>
		</Provider>
	</StrictMode>
);
