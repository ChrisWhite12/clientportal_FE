export default function (state, action) {
    switch(action.type) {
        case "setLoggedInUser": {
            return {
                loggedInUser: action.data
            }
        }
        default: 
            return state
    }
}