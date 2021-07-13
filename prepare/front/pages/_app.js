import React from 'react';
import 'antd/dist/antd.css';
import Proptypes from 'prop-types';
import Head from 'next/head';

import wrapper from '../store/configureStore';

const NodeBird = ({ Component }) => (
  <>
    <Head>
      <meta charSet="utf-8" />
      <title>NodeBird</title>
    </Head>
    <Component />
  </>
);

NodeBird.propTypes = {
  Component: Proptypes.elementType.isRequired,
};

export default wrapper.withRedux(NodeBird);
