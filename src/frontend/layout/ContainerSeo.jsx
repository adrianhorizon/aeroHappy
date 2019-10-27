import React from 'react';
import { Helmet } from 'react-helmet';

const ContainerSeo = ({ link, title, subTitle }) => (
  <>
    <Helmet>
      <meta charSet="utf-8" />
      {title && <title> {title} </title>}
      {subTitle && <meta name="description" content={subTitle} />}
      {link && <link rel="canonical" href={link} />}
    </Helmet>
  </>
);

export default ContainerSeo;
