import {
    SEARCH_STRAIN_START,
    SEARCH_STRAIN_SUCCESS,
    SEARCH_STRAIN_FAILED,
    ON_KEYWORD_CHANGE
} from '../actions/searchStrainsActions.js'

const initialState = {
    searchFormValue: {
        "keyword": ""
    },
    searching: false,
    searchResults: [],
    error: ""
}

export const searchStrainsReducer =(state = initialState, action) => {
    switch (action.type) {

        case SEARCH_STRAIN_START:
            return {
                ...state,
                searching: true,
            }

        case SEARCH_STRAIN_SUCCESS:
            return {
                ...state,
                searching: false,
                searchResults: action.payload
            }

        case SEARCH_STRAIN_FAILED:
            return {
                ...state,
                searching: false,
                error: action.payload
            }

        case ON_KEYWORD_CHANGE:
            return {
                ...state,
                searchFormValue: {
                    ...state.searchStrainFormValue,
                    keyword: action.payload.target.value
                }
            }

        default: return state
    }
}
