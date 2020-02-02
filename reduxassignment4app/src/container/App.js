import React,{Component} from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import ListView from '../component/ListView'

class App extends Component {
    
    componentDidMount(){
        this.props.courseListdata()
    }

    render(){
        console.log('in render')
        return(
            <div>
                <h1>Redux App</h1>
                <ListView list={this.props.data}></ListView>
            </div>
        )
    }
}


function mapStateToProps(state){
    console.log(state)
    return {
        data:state.courseList
    }
}

export default connect(mapStateToProps,actions)(App);