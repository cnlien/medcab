import React, { useState } from 'react';
import { useHistory, Link } from 'react-router-dom';
import axiosWithAuth from '../utils/axiosWithAuth.js';

// COMPONENTS
import {
    Card,
    Form,
    FormGroup,
    Input,
    Label,
    Button,
    Container,
    Row,
    Col
} from 'reactstrap'

// IMAGES
import mcLogo from '../images/mc-logo.svg';

const LoginForm = () => {

    const [login, setLogin] = useState({
        username: '',
        password: ''
    })

    const handleChanges = (e) => {
        setLogin({
            ...login,
            [e.target.name]: e.target.value
        })
    }

    const handleLogin = (e) => {
        e.preventDefault();
        axiosWithAuth()
            .post('/api/auth/login', login)
            .then((res) => {
                localStorage.setItem('token', res.data.token)
                localStorage.setItem('user', res.data.user.username)
                localStorage.setItem('userLocation', res.data.user.currentCity)
                localStorage.setItem('userState', res.data.user.state)
                history.push('/dashboard')
                window.location.reload()
            })
            .catch((err) => {
                console.error('There was an error logging in', err.message)
            })

            setLogin({
                username: '',
                password: ''
            })
    }

    let history = useHistory();

    return(
        <Container className="form-container">
            <Card className="form-card">
                <Row>
                    <Col className="form-logo">
                        <img src={mcLogo} alt="Med Cabinet Icon" />
                    </Col>
                </Row>

                <Form onSubmit={ handleLogin } >
                    <FormGroup>
                        <Label for="email">Username</Label>
                        <Input
                            type="text"
                            name="username"
                            className="form-input"
                            placeholder="example@example.com"
                            value={ login.username }
                            onChange={ handleChanges}
                            required
                        />
                    </FormGroup>

                    <FormGroup>
                        <Label for="password">Password</Label>
                        <Input
                            type="password"
                            name="password"
                            className="form-input"
                            placeholder="8 or more characters"
                            value={ login.password }
                            onChange={ handleChanges }
                            required
                        />
                    </FormGroup>
                    <Row>
                        <Col>
                            <FormGroup check>
                                <Label check className="form-checkbox">
                                    <Input type="checkbox" />{' '}
                                    Keep me signed in
                                </Label>
                            </FormGroup>
                        </Col>
                        <Col>
                            <FormGroup className="form-footerLink">
                                <p>Forgot Password?</p>
                            </FormGroup>
                        </Col>
                    </Row>
                    <FormGroup className="form-button-container">
                        <Button className="form-centered-button">Sign in</Button>
                    </FormGroup>
                </Form>
                <hr />
                <Row className="form-links">
                    <Link to="/create-account">
                        <p>Don’t have an account? <strong>Sign up</strong></p>
                    </Link>
                </Row>
            </Card>
        </Container>
    )
}

export default LoginForm;