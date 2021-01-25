import React from 'react';
//import 'antd/dist/antd.css';
//import './index.css';
import { Form, Input, Button } from 'antd';
const layout = {
  labelCol: {
    span: 6,
  },
  wrapperCol: {
    span: 12,
  },
};
const validateMessages = {
  required: '${label} is required!',
  types: {
    email: '${label} is not a valid email!'
  }
};

const Contact = () => {
  const onFinish = (values) => {
    console.log(values);
  };

  return (
    <Form {...layout} name="nest-messages" onFinish={onFinish} validateMessages={validateMessages}>
    <Form.Item
      name={['user', 'first']}
      label="First Name"
      rules={[
        {
          required: true,
        },
      ]}
    >
      <Input placeholder={'First Name'}/>
    </Form.Item>
    <Form.Item
      name={['user', 'last']}
      label="Last Name"
      rules={[
        {
          required: true,
        },
      ]}
    >
      <Input placeholder={'First Name'}/>
    </Form.Item>
    <Form.Item
      name={['user', 'email']}
      label="Email"
      rules={[
        {
          type: 'email',
        },
      ]}
    >
      <Input />
    </Form.Item>
    <Form.Item name={['user', 'comments']} label="Comments">
      <Input.TextArea />
    </Form.Item>
    <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
      <Button type="primary" htmlType="submit">
        Submit
      </Button>
    </Form.Item>
  </Form>
    
  );
};

export default Contact;
//ReactDOM.render(<Contact />, document.getElementById('container'));
