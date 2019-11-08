/* eslint-disable global-require */
import express from 'express';
import dotenv from 'dotenv';
import webpack from 'webpack';
import helmet from 'helmet';
import mongoose from 'mongoose';
import passport from 'passport';
import cookieParser from 'cookie-parser';
import main from './routes/main';
import i18n from '../frontend/utils/i18n';

const i18nextMiddleware = require('i18next-express-middleware');
const Backend = require('i18next-node-fs-backend');
const moviesApi = require('./routes/travel.js');

require('./models/user');
require('./passport/passport')(passport);

const { logErrors, wrapErrors, errorHandler } = require('./utils/middleware/errorHandlers.js');
// const notFoundHandler = require('./utils/middleware/notFoundHandler');

dotenv.config();

const ENV = process.env.NODE_ENV;
const PORT = process.env.PORT || 3000;
const MONGO = process.env.MONGODB_URI;

const app = express();

i18n
  .use(Backend)
  .use(i18nextMiddleware.LanguageDetector)
  .init({
    lng: 'es_mx',
    fallbackLng: 'es_mx',
    preload: ['es_co', 'es_mx', 'es_en', 'pt_br'],
    backend: {
      loadPath: `${__dirname}/locales/{{lng}}/{{ns}}.json`,
      addPath: `${__dirname}/locales/{{lng}}/{{ns}}.missing.json`,
    },
  });

app.use(express.json());
app.use(cookieParser());

// app.use(notFoundHandler);
app.use(logErrors);
app.use(wrapErrors);
app.use(errorHandler);

app.use(passport.initialize());
app.use(passport.session({ secret: 'lollllo' }));
app.use(express.static(`${__dirname}/public`));

app.use('/locales', express.static(`${__dirname}/locales/`));
app.use(i18nextMiddleware.handle(i18n));

if (ENV === 'development') {
  const webpackConfig = require('../../webpack.config');
  const webpackDevMiddleware = require('webpack-dev-middleware');
  const webpackHotMiddleware = require('webpack-hot-middleware');
  const compiler = webpack(webpackConfig);
  const serverConfig = {
    contentBase: `http://localhost${PORT}`,
    port: PORT,
    publicPath: webpackConfig.output.publicPath,
    hot: true,
    historyApiFallback: true,
    stats: { colors: true },
  };
  app.use(webpackDevMiddleware(compiler, serverConfig));
  app.use(webpackHotMiddleware(compiler));
} else {
  console.log(`Loading ${ENV} config`);
  app.use(helmet());
  app.use(helmet.permittedCrossDomainPolicies());
  app.disable('x-powered-by');
}

app.get('/logout', (req, res) => {
  req.logout();
  res.redirect('/');
});

app.get('/auth/twitter', passport.authenticate('twitter'));

app.get('/auth/facebook', passport.authenticate('facebook'));

app.get('/auth/twitter/callback', passport.authenticate('twitter',
  { successRedirect: '/', failureRedirect: '/login' }));

app.get('/auth/facebook/callback', passport.authenticate('facebook',
  { successRedirect: '/', failureRedirect: '/login' }));

moviesApi(app);

app.get('*', main);

const start = async () => {

  mongoose.Promise = global.Promise;
  await mongoose.connect(MONGO, { useNewUrlParser: true });
  mongoose.set('useFindAndModify', false);

  app.listen(PORT, (err) => {
    if (err) console.log(err);
    console.log(`Server runding on ${PORT}`);
  });

};

start();

