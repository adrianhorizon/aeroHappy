import React from 'react';
import { renderToString } from 'react-dom/server';
import { Provider } from 'react-redux';
import { StaticRouter } from 'react-router';
import { renderRoutes } from 'react-router-config';
import { I18nextProvider } from 'react-i18next';
import Routes from '../../frontend/routes/serverRoutes';
import Layout from '../../frontend/components/Layout';
import store from '../../frontend/redux/store';
import render from '../render';

const main = (req, res, next) => {
  try {
    const html = renderToString(
      <I18nextProvider i18n={req.i18n}>
        <Provider store={store}>
          <StaticRouter
            location={req.url}
            context={{}}
          >
            <Layout>
              {renderRoutes(Routes)}
            </Layout>
          </StaticRouter>
        </Provider>
      </I18nextProvider>,
    );
    const preloadedState = store.getState();
    res.send(render(html, preloadedState, req));
  } catch (err) {
    next(err);
  }
};

export default main;
