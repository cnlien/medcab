import React, { useState, useEffect } from 'react'
import axios from 'axios'

// REDUX
import { connect } from 'react-redux'

//COMPONENTS
import { 
    Container,
    Row,
    Col
} from 'reactstrap'

const StrainInformation = (props) => {

    const [description, setDescription] = useState({})
    const [effects, setEffects] = useState([])
    const [flavors, setFlavors] = useState([])

    console.log(effects, flavors, description)

    console.log(props.match.params.id)

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

    }, []);

    return(
        <Container>
            <h1>{description.desc}</h1>

        </Container>
    )
}

export default connect()(StrainInformation)