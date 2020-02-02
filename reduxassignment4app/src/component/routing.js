import React, {Component } from 'react';
import { BrowserRouter, Route,Link} from 'react-router-dom';
import App from '../container/App';
import Form from '../container/form'
class Routing extends Component{
    render(){
        return(
            <BrowserRouter>
                <div>
                <ul>
                    <li>
                    <Link to="/">Home</Link>
                    </li>
                    <li>
                    <Link to="/form">Enquiry</Link>
                    </li>
                </ul>
                    <Route exact path="/" component={App}></Route>
                    <Route exact path="/form" component={Form}></Route>
                </div>
            </BrowserRouter>
        )
    }
}

export default Routing