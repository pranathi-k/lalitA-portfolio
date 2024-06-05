import React from 'react';
import { Form, Input, Button, Card, Row, Col } from "antd";
import { GithubOutlined, MailOutlined, TwitterOutlined, LinkedinOutlined, PhoneOutlined, EnvironmentOutlined } from '@ant-design/icons';
import './css/navbar.css';

const ContactMe = () => {
    const onFinish = (values) => {
        console.log('Submitted:', values);
        // Here you can add code to handle form submission, like sending an email
      };
    
      const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
      };

    return (
        <div id="contact" class="transition-swipe" style={{ maxWidth: 1800, margin: 'auto', paddingTop:'50px',backgroundColor: 'black' }}>
          <Card 
        style={{
            height: '650px',
            left:'10%',
            width: '80%',
            borderRadius:'5px',
            // boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.4), 0 6px 20px 0 rgba(0, 0, 0, 0.4)',
            // backgroundColor:'black',
        }}
        >   
      <h1 style={{textAlign:'center'}}>Contact Me</h1>
      <Form
        name="basic"
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        layout="vertical"
        action="mailto:kpranathi48@gmail.com"
        // style={{backgroundColor:'black', color:'white'}}
      >
        <Form.Item
          label="Name"
          name="name"
          rules={[{ required: true, message: 'Please input your name!' }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Email"
          name="email"
          rules={[
            { required: true, message: 'Please input your email!' },
            { type: 'email', message: 'Please enter a valid email address!' },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Message"
          name="message"
          rules={[{ required: true, message: 'Please input your message!' }]}
        >
          <Input.TextArea />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>

</Card>
<br/>
<div style={{ background: '#001529', color: '#fff', borderTop:'solid', height:'200px', position:'relative', width:'140%', paddingTop:'50px', right:'20%' }}>
      <Row justify="center" align="middle">
        <Col span={24} md={8} style={{ textAlign: 'center' }}>
          <div>
            <h3>&emsp; Contact Info</h3>
            <p><PhoneOutlined /> &emsp; +1 (763)-913-1259</p>
            <p><MailOutlined /> &emsp; divak014@umn.edu</p>
          </div>
        </Col>
        <Col span={24} md={8} style={{ textAlign: 'center' }}>
          <div>
            <h3>Address</h3>
            <p><EnvironmentOutlined /> St.Paul, Minnesota</p>
          </div>
        </Col>
        <Col span={24} md={8} style={{ left:'10%', display:'inline-flex' }}>
        <Col>
          <a href="https://github.com/lalit" target="_blank" rel="noopener noreferrer">
            <GithubOutlined style={{ fontSize: '24px', marginRight: '10px', color:'white' }} />
          </a>
        </Col>
        <Col>
          <a href="https://linkedin.com/in/lalit" target="_blank" rel="noopener noreferrer">
            <LinkedinOutlined style={{ fontSize: '24px', marginRight: '10px', color:'white' }} />
          </a>
        </Col>
        {/* <Col>
          <a href="https://twitter.com/yourtwitter" target="_blank" rel="noopener noreferrer">
            <TwitterOutlined style={{ fontSize: '24px', marginRight: '10px', color:'white' }} />
          </a>
        </Col> */}
        <Col>
          <a href="mailto:divak014@umn.edu" target="_blank" rel="noopener noreferrer">
            <MailOutlined style={{ fontSize: '24px', color:'white' }} />
          </a>
        </Col>
        </Col>

      </Row>
    </div>
    </div>
    );
}

export default ContactMe;