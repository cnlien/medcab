import React, { useState } from 'react';
import axios from 'axios'

// COMPONENTS
import {
    Row,
    Col,
    Container,
    Form,
    Input,
    Button
} from 'reactstrap';

// IMAGES
import headerLogo from '../images/mcStrainLogoIcon.svg';
import findYourStrain from '../images/findYourStrain.svg';
import locateYourStrain from '../images/locateYourStrain.svg';
import newWayToLearn from '../images/newWayToLearn.svg';
import mainImage from '../images/main-image.jpg'

// STYLES
import '../styles/landingPage.scss';

const LandingPage = () => {
    
    const [keyword, setKeyword] = useState({keyword: ''})
    const [searchData, setSearchData] = useState([])
    console.log(keyword.keyword)
    console.log(searchData)

    const handleKeywordChange = (e) => {
        setKeyword({
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
            axios.get(`https://med-cab-bw.herokuapp.com/api/strains/strain/${keyword.keyword}`)
                .then((res) => {
                    console.log(res.data)
                    setSearchData(res.data)
                })
                .catch((err) => {
                    console.log(err)
                })
    }

   

    return(
        <Container fluid className="landingPage">
            <Row>
                <Col className="landingPage-header">
                    <h2>Med Cabinet</h2>
                    <img src={headerLogo} alt="Med Cabinet Icon"/>
                </Col>
            </Row>

            <Row className="landingPage-main">
                <Col className="landingPage-image-container">
                    <img src={mainImage} alt="main disepesory" className="landingPage-image" />
                </Col>

                <Col className="landingPage-find">
                    <div>

                    <h1>Find the strain that you need</h1>
                    <Form inline onSubmit={ handleSubmit }>
                        <Input 
                            type="text"
                            name="keyword"
                            onChange={ handleKeywordChange }
                        />
                        <Button>Search</Button>
                    </Form>
                    </div>
                </Col>
            </Row>

            <Row>
                <Col>
                    <img src={findYourStrain} alt="Find Your Strain Icon" />
                    <h3>Find Your Strain</h3>
                    <p>Find strains based on their effects and taste in a database of thousands</p>
                </Col>
                <Col>
                    <img src={locateYourStrain} alt="Locate Your Strain Icon" />
                    <h3>Locate Your Strain</h3>
                    <p> Locate nearby dispensaries or medical practitioners that can give expert insight.</p>
                </Col>
                <Col>
                    <img src={newWayToLearn} alt="A New Way to Learn Icon" />
                    <h3>A New Way To Learn</h3>
                    <p>Explore what Med Cabinet has to offer</p>
                </Col>
            </Row>
        </Container>
    )
}

export default LandingPage;