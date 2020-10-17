import {
    ADD_NEW_USER,
    ADD_NEW_USER_SUCCESS,
    ADD_USER_FAILED,
    ON_FIRST_NAME_CHANGE,
    ON_LAST_NAME_CHANGE,
    ON_USERNAME_CHANGE,
    ON_PASSWORD_CHANGE,
    ON_EMAIL_CHANGE,
    ON_CITY_CHANGE,
    ON_STATE_CHANGE
} from '../actions/createUserActions.js'

const initialState = {
    newUserFormValues: {
        "firstName": "",
        "lastName":"",
        "username": "",
        "password": "",
        "email": "",
        "currentCity": "",
        "state_abbreviation": ""
    },
    users: [],
    postSuccess: null,
    error: ""
}

export const createUserReducer = (state = initialState, action) => {
    switch (action.type) {
        
        case ADD_NEW_USER:
            return {
                ...state,
                users: [
                    ...state.users,
                    state.newUserFormValues
                ]
            }

        case ADD_NEW_USER_SUCCESS:
            return {
                ...state,
                postSuccess: action.payload
            }

        case ADD_USER_FAILED:
            return {
                ...state,
                error: action.payload
            }

        case ON_FIRST_NAME_CHANGE:
            return {
                ...state,
                newUserFormValues: {
                    ...state.newUserFormValues,
                    firstName: action.payload.target.value
                }
            }
        
        case ON_LAST_NAME_CHANGE:
            return {
                ...state,
                newUserFormValues: {
                    ...state.newUserFormValues,
                    lastName: action.payload.target.value
                }
            }
        
        case ON_USERNAME_CHANGE:
            return {
                ...state,
                newUserFormValues: {
                    ...state.newUserFormValues,
                    username: action.payload.target.value
                }
            }
        
        case ON_PASSWORD_CHANGE:
            return {
                ...state,
                newUserFormValues: {
                    ...state.newUserFormValues,
                    password: action.payload.target.value
                }
            }

        case ON_EMAIL_CHANGE:
            return {
                ...state,
                newUserFormValues: {
                    ...state.newUserFormValues,
                    email: action.payload.target.value
                }
            }
        
        case ON_CITY_CHANGE:
            return {
                ...state,
                newUserFormValues: {
                    ...state.newUserFormValues,
                    currentCity: action.payload.target.value
                }
            }

        case ON_STATE_CHANGE:
            return {
                ...state,
                newUserFormValues: {
                    ...state.newUserFormValues,
                    state_abbreviation: action.payload.target.value
                }
            }
        
        default: return state;

    }
}