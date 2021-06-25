export default function (state, action) {
    switch(action.type) {
        case "setLoggedInUser": {
            return {
                ...state,
                loggedInUser: action.data,
                role: action.role
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
        default: 
            return state
    }
}