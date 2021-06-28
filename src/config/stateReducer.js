const reducer = (state, action) => {
    switch(action.type) {
        case "setLoggedInUser": {
            return {
                ...state,
                loggedInUser: action.data,
                role: action.role,
                pracId: action.pracId
            }
        }
        case "setTicket": {
            return {
                ...state,
                ticket: action.data
            }
        }
        case "setProfile": {
            return {
                ...state,
                profile: action.data
            }
        }
        case "setPatientInfo": {
            return {
                ...state,
                patientInfo: action.data
            }
        }
        case "setPracInfo": {
            return {
                ...state,
                pracInfo: action.data
            }
        }
        default: 
            return state
    }
}

export default reducer