const i18n = require('i18next');
const XHR = require('i18next-xhr-backend');
const LanguageDetector = require('i18next-browser-languagedetector');

const options = {
  fallbackLng: 'es_mx',
  load: 'languageOnly',
  ns: ['translations'],
  defaultNS: 'translations',
  saveMissing: true,
  debug: true,
  interpolation: {
    escapeValue: false,
    formatSeparator: ',',
    format: (value, format) => {
      if (format === 'uppercase') return value.toUpperCase();
      return value;
    },
  },
  wait: process && !process.release,
};
if (process && !process.release) {
  i18n
    .use(XHR)
    .use(LanguageDetector);
}

if (!i18n.isInitialized) i18n.init(options);

module.exports = i18n;
