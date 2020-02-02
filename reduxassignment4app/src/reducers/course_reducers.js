export default function(state=[], action){
    switch(action.type){
        case 'COURSE_LIST':
            return action.payload
        default:
            return state
    }
}