export default function (state, action) {
    switch(action.type) {
        case "setLoggedInUser": {
            return {
                loggedInUser: action.data
            }
        }
        case "setTicket": {
            return {
                ticket: action.data
            }
        }
        case "setProfile": {
            return {
                profile: action.data
            }
        }
        default: 
            return state
    }
}