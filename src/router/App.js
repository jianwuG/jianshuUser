import React, {Component} from 'react'
import { BrowserRouter, Route } from 'react-router-dom';

import Home from '@pages/home';
import Detail from '@pages/detail';
import Login from '@pages/login';

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <Route path='/' exact component={Home}></Route>
                <Route path='/login' exact component={Login}></Route>
                <Route path='/detail/:id' exact component={Detail}></Route>
            </BrowserRouter>
        )
    }
}
export default App;
