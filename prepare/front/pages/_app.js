import React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import 'antd/dist/antd.css'

const AvoCode = ({ Component }) => {
  return (
    <>
      <Head>
        <meta charSet='utf-8' />
        <title>Avocode</title>
      </Head>
      <Component />
    </>
  )
};

AvoCode.propTypes = {
  Component: PropTypes.elementType.isRequired,
}

export default AvoCode;