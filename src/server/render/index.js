import dotenv from 'dotenv';
import { Helmet } from 'react-helmet';
import getManifest from '../getManifest';

dotenv.config();

const isProd = process.env.NODE_ENV === 'production';

const srcs = {
  mainCss: 'assets/app.css',
  mainJs: 'assets/app.js',
  vendorJs: 'assets/vendor.js',
};

if (isProd) {
  const files = getManifest();
  srcs.mainCss = files['main.css'];
  srcs.mainJs = files['main.js'];
  srcs.vendorJs = files['vendor.js'];
}

const render = (html, preloadedState, req) => {
  const helmet = Helmet.renderStatic();

  const initialI18nStore = {};
  req.i18n.languages.forEach((res) => {
    initialI18nStore[res] = req.i18n.services.resourceStore.data[res];
  });

  const initialLanguage = 'es_mx';

  return (`
  <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1">
        ${helmet.title.toString()}
        ${helmet.meta.toString()}
        ${helmet.link.toString()}
        <link rel="stylesheet" href="${srcs.mainCss}" type="text/css"></link>
        <script src="https://kit.fontawesome.com/20759baef5.js" crossorigin="anonymous"></script>
      </head>
      <body class="page">
        <div id="app">${html}</div>
        <script type="text/javascript">
          window.__PRELOADED_STATE__ = ${JSON.stringify(preloadedState).replace(/</g, '\\u003c')}
          window.initialI18nStore = JSON.parse('${JSON.stringify(initialI18nStore)}');
          window.initialLanguage = '${initialLanguage}';
        </script>
        <script src="${srcs.mainJs}" type="text/javascript"></script>
        <script src="${srcs.vendorJs}" type="text/javascript"></script>
      </body>
    </html>
  `);
};

export default render;
