import React from 'react';

// REDUX
import { connect } from 'react-redux';
import { searchStrain } from '../actions/searchStrainsActions.js'

// COMPONENTS 
import SearchResultCard from '../components/SearchResultCard'
import { Container, Spinner } from 'reactstrap'

// STYLES
import '../styles/searchResults.scss';

const SearchResults = (props) => {

    return(
        <Container fluid>
            {props.searching ? (
                <Spinner style={{ width: '3rem', height: '3rem' }} />
            ) : (
                <Container fluid>
                    <span>Results: {props.searchResults.length}</span>
                    <div className="search-results">
                        {props.searchResults.map((searchResult) => {
                            return(
                                <SearchResultCard
                                    id={searchResult.id}
                                    name={searchResult.name}
                                    race={searchResult.race}
                                    desc={searchResult.desc}
                                />
                            )
                        })}
                    </div>
                </Container>
            )}
        </Container>
    )
}

const mapStateToProps = (state) => {
    console.log(state)
    return{
        searchResults: state.searchStrainsReducer.searchResults,
        searching: state.searchStrainsReducer.searching
    }
}

export default connect(
    mapStateToProps,
    {
        searchStrain
    }
)(SearchResults);