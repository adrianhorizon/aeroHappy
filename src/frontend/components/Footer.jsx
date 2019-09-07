import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { withNamespaces } from 'react-i18next';
import i18n from 'i18next';
import '../assets/styles/components/Footer.scss';

class Footer extends Component {
  changeLang = (lang) => {
    return i18n.changeLanguage(lang);
  };

  render() {
    const { t } = this.props;

    return (
      <footer className="footer">
        <Link to="/">{t('FOOTER.TERMS_OF_USE')}</Link>
        <Link to="/">{t('FOOTER.PRIVACY_STATEMENT')}</Link>
        <div>
          <select onChange={e => this.changeLang(e.target.value)}>
            <option value="es_co">{t('LANGUAGE.SPANISH')}</option>
            <option value="es_en">{t('LANGUAGE.ENGLISH')}</option>
            <option value="pt_br">{t('LANGUAGE.PORTUGUESE')}</option>
          </select>
        </div>
      </footer>
    );
  }
}

export default (withNamespaces()(Footer));
