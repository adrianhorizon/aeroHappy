import React, { Component } from 'react';
import { withNamespaces } from 'react-i18next';
import { connect } from 'react-redux';
import ContainerSeo from '../layout/ContainerSeo';
import Search from '../components/Search';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../assets/styles/components/Home.scss';

class Home extends Component {
  render() {
    const { t } = this.props;

    return (
      <>
        <Header />
        <section className="container-section">
          <ContainerSeo
            title={t('TITLE_HELMET')}
            subTitle={t('SUB_TITLE_HELMET')}
            link=""
          />
          <Search />
        </section>
        <Footer />
      </>
    );
  }
}

const mapStateToProps = ({ reducer }) => {
  return {
    country: reducer.country,
  };
};

export default connect(
  mapStateToProps,
  {},
)(withNamespaces()(Home));
