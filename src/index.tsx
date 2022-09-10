/**
 * Created by: Andrey Polyakov (andrey@polyakov.im)
 */

import '@styles/fonts.css';

import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import App from '@src/containers/App';
import RestoreScrollPosition from '@src/hooks/RestoreScrollPosition';

import Cookies from '@components/Cookies';

import store from './Redux/index';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <RestoreScrollPosition />
        <Cookies />
        <App />
      </BrowserRouter>
    </Provider>
  </StrictMode>,
);
