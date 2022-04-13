import React from 'react';
import { Container } from 'reactstrap';

const Footer = () => {
    return (
        <Container
            fluid
            tag="footer"
            className='text-center bg-warning text-black text-uppercase fixed-bottom p-3'
        >
            nishek github app. All rights reserved ©️
        </Container>
    )
}

export default Footer;