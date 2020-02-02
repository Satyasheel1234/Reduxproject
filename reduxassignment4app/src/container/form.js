import React,{Component} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { SendFormDetails } from '../actions';
//import ListView from '../component/ListView'
class Form extends Component {
    constructor() {
      super();
      this.state = {
        userName:'',
        details:''
      };
  
     this.handleChangeUsername= this.handleChangeUsername.bind(this)
     this.handleChangeDetails = this.handleChangeDetails.bind(this)
     this.handleSubmit=this.handleSubmit.bind(this)
    }
  
    handleChangeUsername(event) {
      this.setState({userName:event.target.value});
    }
    handleChangeDetails(event){
      this.setState({details:event.target.value});
    }
    // handleSubmit(event) {
    //     this.state.userName,
    //     this.state.details
    // }
    handleSubmit(event){
        this.props.SendFormDetails(
            this.state.userName,
            this.state.details
        );
        alert('Submitted')
    }
  
    render() {
      return (
        <div className="container">
          <div className="form-group">
         <label>UserName</label>
            <input type="text" className="form-control" id="userName"  placeholder="UserName" value={this.state.userName} onChange={this.handleChangeUsername}></input>
        </div>
      <div className="form-group">
      <label>Details</label>
      <input type="text" className="form-control" id="details" placeholder="Details of cource" value={this.state.details} onChange={this.handleChangeDetails}></input>
     </div>
          <button className="btn btn-sucess" type="submit" value="Submit" onClick={this.handleSubmit}>Submit</button>
          </div>
      );
    }
  }

function mapDispatchToProps(dispatch){
    return bindActionCreators({SendFormDetails},dispatch)
}

export default connect(null,mapDispatchToProps)(Form);