import React, {PureComponent, lazy, Suspense} from 'react'
import {HashRouter as Router, Route, Switch} from 'react-router-dom';
import {Provider} from 'react-redux'
import store from '@store'
import Loading from '@common/loading';
const Home = lazy(() => import('@pages/home'))
const Detail = lazy(() => import('@pages/detail'))
const Login = lazy(() => import('@pages/login'))


class App extends PureComponent {
    render() {
        return (
                <Provider store={store}>
                    <Router>
                        <Suspense fallback={<Loading></Loading>}>
                            <Switch>
                                <Route path='/' exact component={Home}></Route>
                                <Route path='/login' exact component={Login}></Route>
                                <Route path='/detail/:id' exact component={Detail}></Route>
                            </Switch>
                        </Suspense>
                    </Router>
                </Provider>
        )
    }
}

export default App;
