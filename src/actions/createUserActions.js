import axios from 'axios'

// ACTION CREATORS
export const ADD_NEW_USER = "ADD_NEW_USER"
export const ADD_NEW_USER_SUCCESS = "ADD_NEW_USER_SUCCESS"
export const ADD_USER_FAILED = "ADD_USER_FAILED"

export const ON_FIRST_NAME_CHANGE = "ON_FIRST_NAME_CHANGE"
export const ON_LAST_NAME_CHANGE = "ON_LAST_NAME_CHANGE"
export const ON_USERNAME_CHANGE = "ON_USERNAME_CHANGE"
export const ON_PASSWORD_CHANGE = "ON_PASSWORD_CHANGE"
export const ON_EMAIL_CHANGE = "ON_EMAIL_CHANGE"
export const ON_CITY_CHANGE = "ON_CITY_CHANGE"
export const ON_STATE_CHANGE = "ON_STATE_CHANGE"

export const createUser = (newUser) => dispatch => {
    dispatch({ type: ADD_NEW_USER })

    axios
        .post('https://med-cab-bw.herokuapp.com/api/auth/register', newUser)
        .then((res) => {
            dispatch({
                type: ADD_NEW_USER_SUCCESS,
                payload: res.data
            })
        })
        .catch((err) => {
            dispatch({
                type: ADD_USER_FAILED,
                payload: err
            })
        })
}

export const onFirstNameChange = (e) => {
    e.preventDefault()
    return {
        type: ON_FIRST_NAME_CHANGE,
        payload: e
    }
}

export const onLastNameChange = (e) => {
    e.preventDefault()
    return {
        type: ON_LAST_NAME_CHANGE,
        payload: e
    }
}

export const onUserNameChange = (e) => {
    e.preventDefault()
    return {
        type: ON_USERNAME_CHANGE,
        payload: e
    }
}

export const onPasswordChange = (e) => {
    e.preventDefault()
    return {
        type: ON_PASSWORD_CHANGE,
        payload: e
    }
}

export const onEmailChange = (e) => {
    e.preventDefault()
    return {
        type: ON_EMAIL_CHANGE,
        payload: e
    }
}

export const onCityChange = (e) => {
    e.preventDefault()
    return {
        type: ON_CITY_CHANGE,
        payload: e
    }
}

export const onStateChange = (e) => {
    e.preventDefault()
    return {
        type: ON_STATE_CHANGE,
        payload: e
    }
}
