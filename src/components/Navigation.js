import React, { useState } from 'react';
import axios from 'axios'
import { useHistory  } from 'react-router-dom';

// IMAGES
import headerLogo from '../images/mc-logo.svg';

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
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,
  Form,
  Input,
  Button
} from 'reactstrap';

const Navigation = ({
    values,
    onKeywordChange,
    searchStrain
}) => {
    const [isOpen, setIsOpen] = useState(false);

    const handleSearch = (e) => {
        e.preventDefault();
        console.log(values);
        searchStrain(values);
        history.push('/search-results')
    }
    //   const [keyword, setKeyword] = useState({keyword: ''})
    //   const [searchData, setSearchData] = useState([])
    //   const handleKeywordChange = (e) => {
    //       setKeyword({
    //           [e.target.name]: e.target.value
    //       })
    //   }

    //   const handleSubmit = (e) => {
    //       e.preventDefault();
    //           axios.get(`https://med-cab-bw.herokuapp.com/api/strains/strain/${keyword.keyword}`)
    //               .then((res) => {
    //                     console.log(res.data)
    //                     setSearchData(res.data)
    //                     history.push('/search-results')
    //               })
    //               .catch((err) => {
    //                   console.log(err)
    //               })
    //   }

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
                <Nav className="mr-auto" navbar>
                <NavItem>
                    <Form inline onSubmit={ handleSearch }>
                        <Input 
                            type="text"
                            name="keyword"
                            placeholder="Search Strains"
                            value={ values.keyword }
                            onChange = { onKeywordChange }
                        />
                        <Button>Search</Button>
                    </Form>
                </NavItem>
                <NavItem>
                    <NavLink href="https://github.com/reactstrap/reactstrap">GitHub</NavLink>
                </NavItem>
                <UncontrolledDropdown nav inNavbar>
                    <DropdownToggle nav caret>
                    Options
                    </DropdownToggle>
                    <DropdownMenu right>
                    <DropdownItem>
                        Option 1
                    </DropdownItem>
                    <DropdownItem>
                        Option 2
                    </DropdownItem>
                    <DropdownItem divider />
                    <DropdownItem>
                        Reset
                    </DropdownItem>
                    </DropdownMenu>
                </UncontrolledDropdown>
                </Nav>
                <NavbarText>Simple Text</NavbarText>
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