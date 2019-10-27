import React from 'react';
import { connect } from 'react-redux';

export const countryFlag = (value) => {
  const url = 'https://firebasestorage.googleapis.com/v0/b/aero-happy.appspot.com/o';

  switch (value) {
    case 'CO':
      return `${url}/flags%2Fcolombia.png?alt=media`;

    case 'BR':
      return `${url}/flags%2Fbrasil.png?alt=media`;

    case 'MX':
      return `${url}/flags%2Fmexico.png?alt=media`;

    case 'US':
      return `${url}/flags%2Festados-unidos-de-america.png?alt=media`;

    default:
      return `${url}/flags%2Fcolombia.png?alt=media`;
  }
};

const Country = ({ countryData }) => (
  <>
    <img
      className="image-country"
      src={countryFlag(countryData)}
      alt="country"
    />
  </>
);

const stateToProps = ({ reducer }) => ({
  countryData: reducer.countryData,
});

export default connect(stateToProps, {})(Country);
