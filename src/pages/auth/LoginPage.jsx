import { Button, Checkbox, Form, Input } from 'antd';


export const LoginPage = () => {
    const onFinish = (values) => {
        console.log('Success:', values);
    };
    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };
    return (
        <div className="w-screen h-screen overflow-hidden bg-blue-200 grid grid-cols-1 md:grid-cols-2 p-4 gap-2 items-center justify-center">
            {/* Dibujo */}
            <section className='hidden md:flex'>
                Aqui va un dibujo
            </section>
            {/* Seccion formulario */}
            <section className='flex items-center justify-center'>
                <Form
                    name="basic"
                    wrapperCol={{
                        span: 16,
                    }}
                    style={{
                        maxWidth: 600,
                    }}
                    initialValues={{
                        remember: true,
                    }}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    autoComplete="off"
                >
                    <Form.Item
                        label="Username"
                        name="username"
                        rules={[
                            {
                            required: true,
                            message: 'Please input your username!',
                            },
                        ]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        label="Password"
                        name="password"
                        rules={[
                            {
                            required: true,
                            message: 'Please input your password!',
                            },
                        ]}
                    >
                        <Input.Password />
                    </Form.Item>
                    <Form.Item
                        name="remember"
                        valuePropName="checked"
                        wrapperCol={{
                            offset: 8,
                            span: 16,
                        }}
                    >
                        <Checkbox>Remember me</Checkbox>
                    </Form.Item>
                    <Form.Item
                        className='flex flex-col gap-2'
                        wrapperCol={{
                            offset: 8,
                            span: 16,
                        }}
                    >
                        <Button className='bg-blue-600' type="primary" htmlType="submit">
                            Login
                        </Button>
                        <Button className='bg-blue-600' type="primary">
                            Login
                        </Button>
                    </Form.Item>
                </Form>
            </section>
        </div>
    )
}

