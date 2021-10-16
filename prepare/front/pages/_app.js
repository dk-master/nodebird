import 'antd/dist/antd.css';
import PropTypes from 'prop-types';
import React from 'react';
import Head from 'next/head';
const NodeBird = ({Component}) => {

    return(
        <>
        <Head>
            <meta charSet='utf-8' />
            <title>NodeBird</title>
        </Head>
        <Component/>
        </>
    )
    

};

NodeBird.propTypes = {
    Component: PropTypes.elementType.isRequired, // 서비스의 안정성을 위해
}

export default NodeBird;