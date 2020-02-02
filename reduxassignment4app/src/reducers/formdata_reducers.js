export default function(state=[], action){
    switch(action.type){
        case 'FORM_LIST':
            return action.payload
        default:
            return state
    }
}