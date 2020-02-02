import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
//import App from './container/App';
import store from './store';
import Routing from './component/routing'

ReactDOM.render(
    <Provider store={store}>
        <Routing/>
    </Provider>, document.getElementById('root')
)
