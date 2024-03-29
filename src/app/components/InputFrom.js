"use client"
import { Button, Checkbox, Form, Input } from 'antd';


const InputFrom = () => {
    const onFinish = (values) => {
        console.log('Success:', values);
      };
      const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
      };
  return (
    <div>
          <Form
    name="basic"
    labelCol={{
      span: 8,
    }}
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
      label="Name"
      name="name"
      rules={[
        {
          required: true,
          message: 'Please input your Name!',
        },
      ]}
    >
      <Input />
    </Form.Item>

    <Form.Item
      label="Desigantion"
      name="desigantion"
      rules={[
        {
          required: true,
          message: 'Please input your Desigantion!',
        },
      ]}
    >
      <Input />
    </Form.Item>


    <Form.Item
      label="City"
      name="city"
      rules={[
        {
          required: true,
          message: 'Please input your City!',
        },
      ]}
    >
      <Input />
    </Form.Item>

    <Form.Item
      label="Salary"
      name="salary"
      rules={[
        {
          required: true,
          message: 'Please input your City!',
        },
      ]}
    >
      <Input />
    </Form.Item>

   

    <Form.Item
      wrapperCol={{
        offset: 8,
        span: 16,
      }}
    >
      <Button className=' bg-blue-500' type="primary" htmlType="submit">
        Submit
      </Button>
    </Form.Item>
  </Form>
    </div>
  )
}

export default InputFrom