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

    const [description, setDescription] = useState({})
    const [effects, setEffects] = useState([])
    const [flavors, setFlavors] = useState([])
    const [indica, setIndica] = useState([])
    const [sativa, setSativa] = useState([])
    const [hybrid, setHybrid] = useState([])

    useEffect(() => {
        const id = props.match.params.id
        axios
            .get(`https://med-cab-bw.herokuapp.com/api/strains/${id}/effects`)
            .then((res) => {
                setEffects(res.data)
            })
            .catch((err)=> {
                console.log(err)
            })

        axios
            .get(`https://med-cab-bw.herokuapp.com/api/strains/${id}/flavors`)
            .then((res) => {
                setFlavors(res.data)
            })
            .catch((err)=> {
                console.log(err)
            })
        axios
            .get(`https://med-cab-bw.herokuapp.com/api/strains/${id}/desc`)
            .then((res) => {
                setDescription(res.data)
            })
            .catch((err)=> {
                console.log(err)
            })
        axios
            .get(`https://med-cab-bw.herokuapp.com/api/strains/indica/`)
            .then((res) => {
                setIndica(res.data)
            })
            .catch((err)=> {
                console.log(err)
            })

        axios
            .get(`https://med-cab-bw.herokuapp.com/api/strains/sativa/`)
            .then((res) => {
                setSativa(res.data)
            })
            .catch((err)=> {
                console.log(err)
            })
        axios
            .get(`https://med-cab-bw.herokuapp.com/api/strains/hybrid/`)
            .then((res) => {
                setHybrid(res.data)
            })
            .catch((err)=> {
                console.log(err)
            })
            
        
    }, []);

    const strainId = parseInt(props.match.params.id)
    // console.log("Strain ID", parseInt(strainId))

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
                <p>{effects.positive}</p>
                <h3>Details</h3>
                <p>{description.desc}</p>
                </Col>
            </Row>
        </Container>
    )
}

export default connect()(StrainInformation)