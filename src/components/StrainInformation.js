import React, { useState, useEffect } from 'react'
import axios from 'axios'

// REDUX
import { connect } from 'react-redux'

//COMPONENTS
import { 
    Col,
    Container, Row,
} from 'reactstrap'

// IMAGES
import strainPlaceholder from '../images/strain_placeholder.jpg'

const StrainInformation = (props) => {

    const [data, setData] = useState({
        fetching: true,
        description: null,
        effects: null,
        flavors: null,
        indica: null,
        sativa: null,
        hybrid: null
    })

    console.log("data from state", data)

    const [fetching, setFetching] = useState(false)
    const [description, setDescription] = useState({})
    const [effects, setEffects] = useState(["Loading..."])
    const [flavors, setFlavors] = useState(["Loading..."])
    const [indica, setIndica] = useState(["Loading..."])
    const [sativa, setSativa] = useState(["Loading..."])
    const [hybrid, setHybrid] = useState(["Loading..."])

    console.log("Medical Effects",effects.medical)
    console.log(fetching)

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
    const isHybrid = hybrid.filter(hybrid => hybrid.id === strainId)
    const isSativa = sativa.filter(sativa => sativa.id === strainId)
    const isIndica = indica.filter(indica => indica.id === strainId)

    return(
        <Container>
            <Row>
                <Col>
                    <img src={strainPlaceholder} alt={`strain placeholder ${strainId}`} />
                </Col>
                <Col>
                <h1>
                    {isIndica.map((sativa) => {return(sativa.name)})}
                    {isSativa.map((sativa) => {return(sativa.name)})}
                    {isHybrid.map((hybrid) => {return(hybrid.name)})}
                </h1>
                <h3>Common Effects</h3>
                <h4>Positive Effects</h4>
                {/* {effects.medical.map(medicalEffect => {
                    return(medicalEffect)
                })} */}
                <p>{effects.positive}</p>
                <h3>Details</h3>
                <p>{description.desc}</p>
                </Col>
            </Row>
        </Container>
    )
}

export default connect()(StrainInformation)