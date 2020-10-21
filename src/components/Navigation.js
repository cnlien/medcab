import React, { useState, useEffect } from 'react';
import { useHistory, Link } from 'react-router-dom';

// IMAGES
import headerLogo from '../images/mc-logo.svg';
import { Search } from 'react-bootstrap-icons'

// REDUX
import { connect } from 'react-redux'
import {
    onKeywordChange,
    searchStrain
} from '../actions/searchStrainsActions.js';

// COMOPNENTS
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Form,
  Input,
  Button,
  InputGroup,
  InputGroupAddon,
  InputGroupText
} from 'reactstrap';

// STYLES
import '../styles/navigation.scss';

const Navigation = ({
    values,
    onKeywordChange,
    searchStrain
}) => {

    const [isOpen, setIsOpen] = useState(false);
    const [loggedIn, setLoggedIn] = useState(false);

    const handleSearch = (e) => {
        e.preventDefault();
        console.log(values);
        searchStrain(values);
        history.push('/search-results')
    }
    useEffect(()=>{
        if (localStorage.getItem('token')) {
          setLoggedIn(true);
        }
      }, []);
    
    const handleLogout = () => {
        localStorage.removeItem('token')
        localStorage.removeItem('user')
        localStorage.removeItem('userLocation')
        localStorage.removeItem('userState')
        setLoggedIn(false);
    }

    let history = useHistory();
    const toggle = () => setIsOpen(!isOpen);

    return (
        <div>
            <Navbar color="light" light expand="md">
            <NavbarBrand href="/">
                <img src={ headerLogo } />
            </NavbarBrand>

            <NavbarToggler onClick={toggle} />

            <Collapse isOpen={isOpen} navbar>
                <nav className="mr-auto main-navigation" navbar>
                    <div className="navigation-items">
                        <div className='search-container'>
                            <Form
                                className="search-form"
                                inline
                                onSubmit={ handleSearch }
                            >  
                                <InputGroup>
                                <InputGroupAddon addonType="prepend">
                                    <InputGroupText><Search /></InputGroupText>
                                </InputGroupAddon>
                                    <Input 
                                        type="text"
                                        name="keyword"
                                        placeholder="Search Strains"
                                        className="search-input"
                                        value={ values.keyword }
                                        onChange = { onKeywordChange }
                                    />
                                    <InputGroupAddon addonType="append">
                                        <Button className="search-button">
                                            Search
                                        </Button>

                                    </InputGroupAddon>
                                </InputGroup>
                            </Form>
                            <Link className="navLink" to="/">Strains</Link>
                            <Link className="navLink" to="/">Dispensaries</Link>

                        </div>
                        <div className='user-links-container'>
                            {loggedIn
                                ?
                                <div className="user-links">
                                    <Link className="navLink signout" to='/login'><Button onClick={ handleLogout }>Sign Out</Button></Link>
                                </div>
                                :
                                <div className="user-links">
                                    <Link className="navLink login" to='/login'><Button>Sign In</Button></Link>
                                    <Link className="navLink createAccount" to='/create-account'><Button>Sign Up</Button></Link>
                                 </div>
                            }
                        </div>
                        <div className='hamburger-links-container'>
                            {loggedIn
                                ?
                                <div className="hamburger-links">
                                    <Link className="navLink signout" to='/login'>
                                        <Button block onClick={ handleLogout }>
                                            Sign Out
                                        </Button>
                                    </Link>
                                </div>
                                :
                                <div className="hamburger-links">
                                    <Link className="navLink login" to='/login'>
                                        <Button block>
                                        Sign In
                                        </Button>
                                    </Link>
                                    <Link className="navLink createAccount" to='/create-account'>
                                        <Button block>
                                            Sign Up
                                        </Button>
                                    </Link>
                                 </div>
                            }
                        </div>
                    </div>
                </nav>
            </Collapse>
            </Navbar>
        </div>
    );
}

const mapStateToProps = (state) => {
    console.log('state from Nav Map State to Props:', state)
    return{
        values: state.searchStrainsReducer.searchFormValue
    }
}

export default connect(
    mapStateToProps,
    {   
        onKeywordChange,
        searchStrain
    }
)(Navigation);