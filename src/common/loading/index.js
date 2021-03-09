import React from 'react';
import {Spin} from 'antd'
import style from './loading.module.less'


 const Loading=()=>(<div className={style.loading}><Spin tip="Loading..." size="large"/></div>);

export default Loading;
