import React from 'react';

// COMPONENTS
import LoginForm from './LoginForm.js';

import {
    Container,
} from 'reactstrap'

// STYLES
import '../styles/formStyles.scss'

const LoginPage = () => {
    return(
        <Container fluid className="form-page">
            <LoginForm />
        </Container>
    )
}

export default LoginPage;