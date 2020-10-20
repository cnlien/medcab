import axios from 'axios'

// ACTION CREATORS
export const SEARCH_STRAIN_START = 'SEARCH_STRAIN_START'
export const SEARCH_STRAIN_SUCCESS = 'SEARCH_STRAIN_SUCCESS'
export const SEARCH_STRAIN_FAILED = 'SEARCH_STRAIN_FAILED'
export const ON_KEYWORD_CHANGE = 'ON_KEYWORD_CHANGE'

export const searchStrain = (keyword) => dispatch => {

    dispatch({ type: SEARCH_STRAIN_START })

    axios
        .get(`https://med-cab-bw.herokuapp.com/api/strains/strain/${keyword.keyword}`, keyword)
        .then((res) => {
            console.log("res from SEARCH_STRINS_SUCCESS:", res)
            dispatch({
                type: SEARCH_STRAIN_SUCCESS,
                payload: res.data
            })
        })
        .catch((err) => {
            dispatch({
                type: SEARCH_STRAIN_FAILED,
                payload: err
            })
        })
}

export const onKeywordChange = (e) => {
    e.preventDefault()
    return{
        type: ON_KEYWORD_CHANGE,
        payload: e        
    }
}