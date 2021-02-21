import {combineReducers} from 'redux';
import {reducers as headerReducers} from '@common/header/store'
import {reducers as loginReducers} from '@pages/login/store'
import {reducers as homeReducers} from '@pages/home/store'


export default combineReducers({
    header:headerReducers,
    login:loginReducers,
    home:homeReducers,
})