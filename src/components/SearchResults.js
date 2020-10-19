import React from 'react';

// REDUX
import { connect } from 'react-redux';
import {
    searchStrain
} from '../actions/searchStrainsActions.js'

const SearchResults = (props) => {
    console.log("Search Results Props",props)
    return(
      <div>
          {props.searchResults.map( searchResult => {
              return(
                  <div>
                      <h1>{searchResult.name}</h1>
                      <p>{searchResult.desc}</p>

                  </div>
              )
          })}
      </div>

    )
}

const mapStateToProps = (state) => {
    console.log(state)
    return{
        searchResults: state.searchStrainsReducer.searchResults
    }
}

export default connect(
    mapStateToProps,
    {
        searchStrain
    }
)(SearchResults);