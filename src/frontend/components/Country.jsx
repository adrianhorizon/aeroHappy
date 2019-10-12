import React, { Component } from 'react';
import { connect } from 'react-redux';

class Country extends Component {

  countryFlag = (value) => {
    switch (value) {
      case 'CO':
        return 'https://firebasestorage.googleapis.com/v0/b/aero-happy.appspot.com/o/flags%2Fcolombia.png?alt=media&token=0527ce06-7301-472d-a24a-ccbc914fd509';

      case 'BR':
        return 'https://firebasestorage.googleapis.com/v0/b/aero-happy.appspot.com/o/flags%2Fbrasil.png?alt=media&token=060de182-d2dd-4035-b853-bb5b4c8174e8';

      case 'MX':
        return 'https://firebasestorage.googleapis.com/v0/b/aero-happy.appspot.com/o/flags%2Fmexico.png?alt=media&token=821d107a-b5a2-4089-8d90-72890b3ef934';

      case 'US':
        return 'https://firebasestorage.googleapis.com/v0/b/aero-happy.appspot.com/o/flags%2Festados-unidos-de-america.png?alt=media&token=1db500c8-f92d-47d4-a78c-5c67fd8e773d';

      default:
        return 'https://firebasestorage.googleapis.com/v0/b/aero-happy.appspot.com/o/flags%2Fcolombia.png?alt=media&token=0527ce06-7301-472d-a24a-ccbc914fd509';
    }
  };

  render() {
    const { country } = this.props;

    return (
      <img
        className="image-country"
        src={this.countryFlag(country)}
        alt="country"
      />
    );
  }
}

const stateToProps = ({ countryReducer }) => ({
  country: countryReducer.country,
  countryData: countryReducer.countryData,
});

export default connect(stateToProps, {})(Country);
