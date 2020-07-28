import React from "react";
import { Card, Form, Input, Button, message, Icon, Checkbox } from "antd";
const FormItem = Form.Item;


    const onFinish = values => {
        console.log('Success:', values);
    };

    const onFinishFailed = errorInfo => {
        console.log('Failed:', errorInfo);
    };
    class FormLogin extends React.Component {



        render() {

            return (
                <div>
                    <Card title="登录行内表单">
                        <Form layout="inline">
                            <FormItem>
                                <Input placeholder="请输入用户名" />
                            </FormItem>
                            <FormItem>
                                <Input placeholder="请输入密码" />
                            </FormItem>
                            <FormItem>
                                <Button type="primary">登录</Button>
                            </FormItem>
                        </Form>
                    </Card>
                    <Card title="登录水平表单" style={{ marginTop: 10 }}>
                        <Form
                          
                            name="basic"
                            initialValues={{ remember: true }}
                            onFinish={onFinish}
                            onFinishFailed={onFinishFailed}
                        >
                            <Form.Item
                                label="Username"
                                name="username"
                                rules={[{ required: true, message: 'Please input your username!' }]}
                            >
                                <Input />
                            </Form.Item>

                            <Form.Item
                                label="Password"
                                name="password"
                                rules={[{ required: true, message: 'Please input your password!' }]}
                            >
                                <Input.Password />
                            </Form.Item>

                            <Form.Item name="remember" valuePropName="checked">
                                <Checkbox>Remember me</Checkbox>
                            </Form.Item>

                            <Form.Item >
                                <Button type="primary" htmlType="submit">
                                    Submit
                                 </Button>
                            </Form.Item>
                        </Form>
                    </Card>
                </div>
            );
        }
    }
    export default FormLogin