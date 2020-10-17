import React from 'react';

// COMPONENTS
import CreateAccountForm from './CreateAccountForm.js'

import {
    Container
} from 'reactstrap';

// STYLES
import '../styles/formStyles.scss'

const CreateAccount = () => {
    return(
        <Container fluid className="form-page">
            <CreateAccountForm />
        </Container>
    )
}

export default CreateAccount