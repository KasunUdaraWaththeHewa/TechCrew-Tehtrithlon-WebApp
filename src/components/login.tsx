"use client";

import React from 'react';
import { Button, Input, Checkbox } from 'antd';
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';
import Image from 'next/image';

const Login: React.FC = () => {
  return (
    <div className="flex flex-col justify-center items-center h-screen bg-cover bg-center" style={{ backgroundImage: "url('/assets/images/background.png')" }}>
      <div className="flex-grow flex flex-col justify-center items-center">
        <div className="bg-white rounded-xl shadow-lg p-10 max-w-sm w-full text-center">
          <div className="mb-5">
            <Image src="/assets/images/sltdaLogo.png" alt="Logo" width={50} height={50} className="mx-auto" />
          </div>
          <h2 className="text-2xl font-semibold mb-2">Welcome Back!</h2>
          <p className="text-gray-600 mb-5">Let's get you back on track,</p>

          <Input
            placeholder="Username"
            size="large"
            className="mb-4"
            defaultValue=""
          />

          <Input.Password
            placeholder="Password"
            size="large"
            className="mb-4"
            
          />

          <div className="flex justify-between items-center mb-4">
            <Checkbox>Remember me</Checkbox>
            <a href="#" className="text-sm text-gray-600">Forgot Password?</a>
          </div>

          <Button type="primary" className="w-full bg-yellow-500 border-none hover:bg-yellow-600" size="large">
            Login
          </Button>
        </div>
      </div>

      <footer className="text-center text-sm text-white p-5">
        Copyright © 2024 All Rights Reserved by Sri Lanka Tourism Development Authority.
      </footer>

    </div>
  );
};

export default Login;
