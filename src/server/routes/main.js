import React from 'react';
import { renderToString } from 'react-dom/server';
import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';
import { StaticRouter } from 'react-router';
import { renderRoutes } from 'react-router-config';
import { I18nextProvider } from 'react-i18next';
import axios from 'axios';
import Routes from '../../frontend/routes/serverRoutes';
import Layout from '../../frontend/components/Layout';
import reducer from '../../frontend/redux/reducers';
import render from '../render';

const reducers = combineReducers({
  reducer,
});

require('dotenv').config();

const main = async (req, res, next) => {
  try {
    let initialState;
    try {
      const movieList = await axios.get('http://localhost:3001/api/offers');

      initialState = {
        pending: true,
        country: '',
        cityId: 1,
        countryData: {},
        user: {},
        trends: movieList.data.data,
      };

    } catch (error) {
      initialState = {
        pending: true,
        country: '',
        cityId: 1,
        countryData: {},
        user: {},
        trends: [],
      };
    }

    const store = createStore(reducers, initialState);
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
