import React from 'react'
import {Card,Form, Input, Button, Checkbox} from 'antd'
import {useDispatch, useSelector} from 'react-redux'
import {Redirect} from 'react-router-dom'
import * as actionCreators from './store/actionCreators'
import style from './login.module.less'

const Login = () => {
    const {hasToken}=useSelector(state=>(
        {
            hasToken:state.getIn(['login','hasToken'])
        }
    ));
    const disPath=useDispatch();
    const goLogin=()=>{
        disPath(actionCreators.goLogin())
    };
    const tailLayout = {
        wrapperCol: {offset: 8, span: 16},
    };
    return (
        <>
            {
                hasToken?<Redirect to='/'/>:<div className={style.login_div}>

                    <Card title="登录" style={{width: 400}}>
                        <Form
                            name="basic"
                            initialValues={{remember: true}}
                        >
                            <Form.Item
                                label="Username"
                                name="username"
                                rules={[{required: true, message: 'Please input your username!'}]}
                            >
                                <Input/>
                            </Form.Item>

                            <Form.Item
                                label="Password"
                                name="password"
                                rules={[{required: true, message: 'Please input your password!'}]}
                            >
                                <Input.Password/>
                            </Form.Item>
                            <Form.Item {...tailLayout} name="remember" valuePropName="checked">
                                <Checkbox>Remember me</Checkbox>
                            </Form.Item>

                            <Form.Item {...tailLayout}>
                                <Button type="primary" htmlType="submit" onClick={goLogin}>
                                    Submit
                                </Button>
                            </Form.Item>
                        </Form>
                    </Card>
                </div>
            }
        </>
    )
};
export default Login;
