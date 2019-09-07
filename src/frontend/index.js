import React from 'react';
import { hydrate } from 'react-dom';
import { Provider } from 'react-redux';
import { Router } from 'react-router';
import { I18nextProvider } from 'react-i18next';
import { createBrowserHistory } from 'history';
import store from './redux/store';
import Routes from './routes/App';
import i18n from './i18n';

if (typeof window !== 'undefined') {
  const history = createBrowserHistory();

  hydrate(
    <I18nextProvider
      i18n={i18n}
      initialI18nStore={window.initialI18nStore}
      initialLanguage={window.initialLanguage}
    >
      <Provider store={store}>
        <Router history={history}>
          <Routes />
        </Router>
      </Provider>
    </I18nextProvider>,
    document.getElementById('app'),
  );
}
