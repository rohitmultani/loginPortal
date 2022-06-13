import React, { Fragment,useState,useEffect} from 'react';
import 'antd/dist/antd.css';
import classes from './Style.module.css'
import { Button, Checkbox, Form, Input } from 'antd';

const LoginForm= () => {
  const onFinish = (values) => {
    setAuth({
        isAuth:true
        })
    setPass(false)
    
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo) => {
      if(errorInfo.values.password===undefined||errorInfo.values.password===""){
        setPass(true)
      }
    console.log('Failed:', errorInfo.values);
  };
  const [auth,setAuth]=useState({
      isAuth:false,
      resData:''
  })
  const [click,setClick] =useState(false);
  const [pass,setPass] =useState(false);
useEffect(()=>{
    const payload={
        email:"eve.holt@reqres.in",
        password:"5cityslicka"
    }
    fetch('https://reqres.in/api/login',({
        method:'POST',
        headers:{
            'Accept':'application/json',
            'Content-type':'application/json'
        },
        body:JSON.stringify(payload)
    }))
    .then((data)=>{
        console.log(data);
        console.log(auth.isAuth)
        setAuth({resData:data.token,
        
        })
    })
    // (error) =()=> {
    //         console.log(error);
    //         setAuth({
    //             isAuth: false,
    //             resData: 'NO Data from Server'
    //         });
    //     }
},[click])
  return (
      <Fragment>
        
      <Form.Item
        wrapperCol={{
          offset: 1,
          span: 20,
        }}
      >
          <div style={{color:"darkblue",fontSize:'30px',fontWeight:'800',marginLeft:'2%'}}>
        Welcome Back
        </div>
      </Form.Item>
      <Form.Item
        wrapperCol={{
          offset: 2,
          span: 15,
        }}
      >
          <div style={{fontSize:'15px',margin:'0px'}}>
        Sub-title goes here
        </div>
      </Form.Item>
    <Form
      name="basic"
      labelCol={{
        span: 2,
      }}
      wrapperCol={{
        span: 6,
      }}
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Form.Item
       wrapperCol={{
        offset: 1,
        span: 5,
      }}
        name="username"
        rules={[
          {
            required: true,
            message: 'Please input your username!',
          },
        ]}
      >
        <Input  placeholder='User Name'/>
      </Form.Item>

      <Form.Item
       wrapperCol={{
        offset: 1,
        span: 5,
      }}
        name="password"
        rules={[
          {
            required: true,
            message: 'Please input your password!',
          },
        ]}
      >
        <Input.Password placeholder='Password' />
      </Form.Item>
        <Form.Item
          wrapperCol={{
            offset: 1,
          span:100,
          }}
        >
          <Button type="primary" htmlType="submit" style={{backgroundColor:'darkblue',color:"white",borderRadius:'4px',width:'22%'}}
          onClick={()=>{setClick(prevstate=>!prevstate)}}
          >
            Login
          </Button>
        </Form.Item>
      </Form>

      <Form.Item
        name="remember"
        valuePropName="checked"
        wrapperCol={{
          offset: 1,
          span: 20,
        }}
      >
          <div style={{display:'flex',color:'darkblue'}}>
        <Checkbox style={{marginTop:'0.51%'}}>Remember me</Checkbox>
        <Form.Item  style={{marginLeft:'3.1%'}}> Forgot Password</Form.Item>
        </div>
      </Form.Item>
      {auth.isAuth?<span>success</span>:<span></span>}
      {pass?<span>Missing Password</span>:<span></span>}
        
      </Fragment>

  );
};

export default LoginForm;