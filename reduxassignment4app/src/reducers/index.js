import { combineReducers} from 'redux';
import courseList from './course_reducers';
import Form from './formdata_reducers'



const rootReducer = combineReducers({
    courseList,
    Form
})

export default rootReducer;
