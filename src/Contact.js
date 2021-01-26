import React, { useState } from 'react';
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



    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [comments, setComments] = useState('')


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
      <Input type="text" value={firstName} placeholder={'First Name'} onChange={updateTextField}/>
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
      <Input type="text" value={lastName} placeholder={'Last Name'} onChange={updateTextField}/>
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
      <Input type="text" value={email} placeholder={'Email'} onChange={updateTextField} />
    </Form.Item>
    <Form.Item name={['user', 'comments']} label="Comments">
      <Input.TextArea type="text" value={comments} placeholder={'What would you like to say?'} onChange={updateTextField}/>
    </Form.Item>
    <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
      <Button type="primary" htmlType="submit">
        Submit
      </Button>
    </Form.Item>
  </Form>
    
  );

  function updateTextField(event) {
    setFirstName(event.target.value)
    setLastName(event.target.value)
    setEmail(event.target.value)
    setComments(event.target.value)
  }
};

export default Contact;
//ReactDOM.render(<Contact />, document.getElementById('container'));
