import React, { Fragment } from 'react';
import { Helmet } from 'react-helmet';

const Layout = ({ link, title, subTitle }) => {
  return (
    <Fragment>
      <Helmet>
        <meta charSet="utf-8" />
        { title && <title> {title} </title> }
        { subTitle && <meta name="description" content={subTitle} /> }
        { link && <link rel="canonical" href={link} /> }
      </Helmet>
    </Fragment>
  );
};

export default Layout;
