import React from 'react'
import { Card, Row, Col } from 'reactstrap'
import { Link } from 'react-router-dom'

const SearchResultCard = (props) => {
    // const searchResults = Object.keys(props).length
    return(
        <Card className="search-result-card" name={props.name}>
            <Row>
                <Col sm="3">
                    <img style={{width:"100%"}} src="https://via.placeholder.com/300x300" />
                </Col>

                <Col>
                    <Link to={`/strain/${props.id}`}><h4>{props.name}</h4></Link>
                    <span>Strain ID: {props.id}</span>
                    <p>{props.race}</p>
                    <hr />
                    <p>{props.desc}</p>
                </Col>
            </Row>
        </Card>
    )
}

export default SearchResultCard