import React, {PureComponent} from 'react'
import {BrowserRouter, Route} from 'react-router-dom';

import Home from '@pages/home';
import Detail from '@pages/detail';
import Login from '@pages/login';
import Header from '@common/header';
import {Provider} from 'react-redux'
import store from '@store'

class App extends PureComponent {
    render() {
        return (
            <Provider store={store}>
              <>
                  <Header></Header>
                  <BrowserRouter>
                      <Route path='/' exact component={Home}></Route>
                      <Route path='/login' exact component={Login}></Route>
                      <Route path='/detail/:id' exact component={Detail}></Route>
                  </BrowserRouter>
                  </>
            </Provider>
        )
    }
}

export default App;
