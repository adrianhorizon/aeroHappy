import React, { Component } from 'react';
import { withNamespaces } from 'react-i18next';
import i18n from 'i18next';
import Country from './Country';
import '../assets/styles/components/Footer.scss';

class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      flagLang: '',
    };
  }

  changeLang = (lang) => {
    this.setState({
      flagLang: lang
    });

    return i18n.changeLanguage(lang);
  };

  render() {
    const { t } = this.props;

    return (
      <div className="footer-view">
        <footer className="footer-distributed">
          <div className="footer-left">
            <h4 className="center-text">{t('FOOTER.CATEGORY')}</h4>
            <div className="m-linkitem">
              <ul>
                <li><a href="/#">{t('FOOTER.COMMUNITY')}</a></li>
                <li><a href="/#">{t('FOOTER.BLOG')}</a></li>
                <li><a href="/#">{t('FOOTER.DOUBTS')}</a></li>
              </ul>
            </div>
          </div>

          <div className="footer-center">
            <h4 className="center-text">{t('FOOTER.ABOUT')}</h4>
            <div className="m-linkitem">
              <ul>
                <li><a href="/#">{t('FOOTER.TERMS_OF_USE')} </a></li>
                <li><a href="/#">{t('FOOTER.PRIVACY_STATEMENT')}</a></li>
              </ul>
            </div>
          </div>

          <div className="footer-right">
            <h4 className="center-text">{t('FOOTER.DOWNLOAD')}</h4>
            <div className="separate-button">
              <button type="button" className="button-store">
                <i className="space-icon fab fa-google-play fa-lg" />
                {t('FOOTER.PLAY_STORE')}
              </button>
            </div>
            <div>
              <button type="button" className="button-store">
                <i className="space-icon fab fa-apple fa-lg" />
                {t('FOOTER.APP_STORE')}
              </button>
            </div>

            <div className="footer-icons">
              <h4>{t('FOOTER.FOLLOW')}</h4>
              <a href="/#" className="instagram"><i className="fab fa-instagram fa-lg" /></a>
              <a href="/#" className="facebook"><i className="fab fa-facebook-f fa-lg" /></a>
              <a href="/#" className="twitter"><i className="fab fa-twitter fa-lg" /></a>
              <a href="/#" className="linkedin"><i className="fab fa-linkedin-in fa-lg" /></a>
            </div>

            <div className="footer-country">
              <Country />
              <select onChange={e => this.changeLang(e.target.value)}>
                <option value="es_co">{t('LANGUAGE.SPANISH')}</option>
                <option value="es_en">{t('LANGUAGE.ENGLISH')}</option>
                <option value="pt_br">{t('LANGUAGE.PORTUGUESE')}</option>
              </select>
            </div>

          </div>
          <div className="aero-center">
            <h5>{t('FOOTER.LATAM')} <i className="fas fa-heart fa-lg heart" /> {t('FOOTER.WORLD')}</h5>
            <h5>{t('AERO_HAPPY')} <i className="fas fa-copyright fa-lg copy-rigth" /> {t('FOOTER.YEAR')}</h5>
          </div>
        </footer>
      </div>
    );
  }
}

export default (withNamespaces()(Footer));
