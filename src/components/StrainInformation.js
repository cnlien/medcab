import React, { useState, useEffect } from 'react'
import axios from 'axios'

//COMPONENTS
import { 
    Col,
    Collapse,
    Container,
    Row,
    Spinner
} from 'reactstrap'

// STYLES
import '../styles/strainInformation.scss';

// IMAGES
import strainPlaceholder from '../images/strain_placeholder.jpg'
import ChevronDown from '../images/icons/ChevronDown.svg'
import ChevronUp from '../images/icons/ChevronUp.svg'

const StrainInformation = (props) => {

    const [data, setData] = useState({
        fetching: true,
        description: null,
        effects: null,
        flavors: null,
        indica: null,
        sativa: null,
        hybrid: null,
    })
    const [effectIsOpen, setEffectIsOpen] = useState(false)
    const [flavorIsOpen, setFlavorIsOpen] = useState(false)
    const toggleEffects = () => setEffectIsOpen(!effectIsOpen)
    const toggleFlavors = () => setFlavorIsOpen(!flavorIsOpen)
    

    useEffect(() => {
        const fetchData = async () => {
            const id = props.match.params.id
            const description = await axios(
                `https://med-cab-bw.herokuapp.com/api/strains/${id}/desc`
            );
            const effects = await axios(
                `https://med-cab-bw.herokuapp.com/api/strains/${id}/effects`
            );
            const flavors = await axios(
                `https://med-cab-bw.herokuapp.com/api/strains/${id}/flavors`
            );
            const indica = await axios(
                `https://med-cab-bw.herokuapp.com/api/strains/indica/`
            );
            const sativa = await axios(
                `https://med-cab-bw.herokuapp.com/api/strains/sativa/`
            );
            const hybrid = await axios(
                `https://med-cab-bw.herokuapp.com/api/strains/hybrid/`
            );

            setData({
                fetching: false,
                description: description.data,
                effects: effects.data,
                flavors: flavors.data,
                indica: indica.data,
                sativa: sativa.data,
                hybrid: hybrid.data
            })
        }
        fetchData();
    }, []);

    const strainId = parseInt(props.match.params.id)
    
    const StrainName = () => {

        if(!data.fetching) {
            const isHybrid = data.hybrid.filter(hybrid => hybrid.id === strainId)
            const isSativa = data.sativa.filter(sativa => sativa.id === strainId)
            const isIndica = data.indica.filter(indica => indica.id === strainId)
            return(
                <h1 className="strain-name">
                    {isIndica.map((indica) => {return(indica.name)})}
                    {isSativa.map((sativa) => {return(sativa.name)})}
                    {isHybrid.map((hybrid) => {return(hybrid.name)})}
                </h1>
            )
        }
    }

    return(
        <Container fluid className="strain-information-container">
            {data.fetching ? (
                <Spinner />
            ) : (
                <Row>
                    <Col md="6" className="strain-image">
                        <img src={strainPlaceholder} alt={`strain placeholder ${strainId}`} style={{ width: '100%' }} />
                    </Col>
                    <Col md="6" className="strain-information">
                        <StrainName />
                        {/* STRAIN DESCRIPTION */}
                        <h3 className="strain-information-title">Details</h3>
                        <p className="strain-information-description">{data.description.desc}</p>
                        
                        {/* STRAIN EFFECTS */}
                        {effectIsOpen ? (
                            <h3 className="strain-information-title" onClick={toggleEffects}>Common Effects <img src={ChevronUp} /></h3>
                        ) : (
                            <h3 className="strain-information-title" onClick={toggleEffects}>Common Effects <img src={ChevronDown} /></h3>
                        )}
                        <Collapse isOpen={effectIsOpen}>
                            <Row className="strain-effects">
                                <Col className="positive-effects">
                                    <h6 className="strain-effects-title">Positive Effects</h6>
                                    {data.effects.positive.map(medicalEffect => {
                                        return(
                                            <p className="strain-effect">{medicalEffect}</p>
                                        )
                                    })}
                                </Col>
                                <Col className="negative-effects">
                                    <h6 className="strain-effects-title">Negative Effects</h6>
                                    {data.effects.negative.map(medicalEffect => {
                                        return(
                                            <p className="strain-effect">{medicalEffect}</p>
                                        )
                                    })}
                                </Col>
                                <Col className="medical-effects">
                                    <h6 className="strain-effects-title">Medical Effects</h6>
                                    {data.effects.medical.map(medicalEffect => {
                                        return(
                                            <p className="strain-effect">{medicalEffect}</p>
                                        )
                                    })}
                                </Col>
                            </Row>
                        </Collapse>
                        
                        {/* STRAIN FLAVORS */}
                        {flavorIsOpen ? (
                            <h3 className="strain-information-title" onClick={toggleFlavors}>Tastes &amp; Flavors <img src={ChevronUp} /></h3>
                        ) : (
                            <h3 className="strain-information-title" onClick={toggleFlavors}>Tastes &amp; Flavors <img src={ChevronDown} /></h3>
                        )}
                        <Collapse isOpen={flavorIsOpen}>
                            <Row className="strain-flavors">
                                <Col>
                                    {data.flavors.map(flavor => {
                                        return(
                                            <p className="strain-flavor">{flavor}</p>
                                        )
                                    })}
                                </Col>
                            </Row>
                        </Collapse>
                    </Col>
                </Row>
            )}
        </Container>
    )
}

export default StrainInformation