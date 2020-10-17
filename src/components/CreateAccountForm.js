import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useHistory, Link } from 'react-router-dom';

// REDUX
import { connect } from 'react-redux'
import {
    onFirstNameChange,
    onLastNameChange,
    onUserNameChange,
    onPasswordChange,
    onEmailChange,
    onCityChange,
    onStateChange,
    createUser
} from '../actions/createUserActions.js'

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

// STYLES

const CreateAccountForm = ({
    values,
    onFirstNameChange,
    onLastNameChange,
    onUserNameChange,
    onPasswordChange,
    onEmailChange,
    onCityChange,
    onStateChange,
    createUser
}) => {
    const [states, setStates] = useState([]);
    
    let history = useHistory();

    useEffect(() => {
        axios
            .get("https://med-cab-bw.herokuapp.com/api/states")
            .then(res => {
                console.log(res.data)
                setStates(res.data)
            })
            .catch(err => {
                console.log(err)
            });
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        createUser(values);
        history.push('/')
    }

    return(
        <Container className="form-container">
            <Card className="form-card">
                <Row>
                    <Col className="form-logo">
                        <img src={mcLogo} alt="Med Cabinet Icon" />
                    </Col>
                </Row>
                <Form onSubmit={handleSubmit}>
                    <FormGroup>
                        <Label for="firstName">First Name</Label>
                        <Input
                            required
                            type="text"
                            name="firstName"
                            className="form-input"
                            placeholder="Enter Your First Name"
                            value={ values.firstName }
                            onChange={ onFirstNameChange }
                        />
                    </FormGroup>

                    <FormGroup>
                        <Label for="lastName">Last Name</Label>
                        <Input
                            required
                            type="text"
                            name="lastName"
                            className="form-input"
                            placeholder="Enter Your Last Name"
                            value={ values.lastName }
                            onChange={ onLastNameChange }
                        />
                    </FormGroup>

                    <FormGroup>
                        <Label for="email">Email Address</Label>
                        <Input
                            required
                            type="text"
                            name="email"
                            className="form-input"
                            placeholder="Enter Your Email Name"
                            value={ values.email } 
                            onChange={ onEmailChange }
                        />
                    </FormGroup>
                    <hr />
                    <FormGroup>
                        <Label for="username">Username</Label>
                        <Input
                            required
                            type="text"
                            name="username"
                            className="form-input"
                            placeholder="Select a username"
                            value={ values.username }
                            onChange={ onUserNameChange }
                        />
                    </FormGroup>

                    <FormGroup>
                        <Label for="password">Password</Label>
                        <Input
                            required
                            type="password"
                            name="password"
                            className="form-input"
                            placeholder="Enter a password"
                            value={ values.password }
                            onChange={ onPasswordChange }
                        />
                    </FormGroup>

                    <FormGroup>
                        <Label for="city">City</Label>
                        <Input
                            type="text"
                            name="city"
                            className="form-input"
                            placeholder="Enter you current city"
                            value={ values.city }
                            onChange={ onCityChange }
                        />
                    </FormGroup>

                    <FormGroup>
                        <Label for="city">State</Label>
                        <Input
                            type="select"
                            name="state"
                            id="state"
                            value={ values.state }
                            onChange={ onStateChange }
                        >
                            <option></option>
                            {states.map( state => {
                                return(
                                    <option>{state.abbreviation}</option>
                                )
                            })}
                        </Input>
                    </FormGroup>

                    <FormGroup className="form-button-container">
                        <Button className="form-centered-button">Sign Up</Button>
                    </FormGroup>
                </Form>
            </Card>
        </Container>
    )
}

const mapStateToProps = (state) => {
    console.log("state form mapStateToProps", state)
    return {
        values: state.createUserReducer.newUserFormValues
    }
}

export default connect(
    mapStateToProps,
    {
        onFirstNameChange,
        onLastNameChange,
        onUserNameChange,
        onPasswordChange,
        onEmailChange,
        onCityChange,
        onStateChange,
        createUser
    }
)(CreateAccountForm)