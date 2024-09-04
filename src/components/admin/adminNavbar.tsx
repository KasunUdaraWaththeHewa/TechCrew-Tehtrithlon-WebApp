"use client";

import React from 'react';
import { Input, Avatar, Dropdown, Menu } from 'antd';
import { BellOutlined, SettingOutlined } from '@ant-design/icons';
import Image from 'next/image';

const { Search } = Input;

interface AdminNavBarProps{
    page:string;
}

const AdminNavBar: React.FC<AdminNavBarProps> = ({page}) => {
  const userMenu = (
    <Menu>
      <Menu.Item key="0">
        <a href="/profile">Profile</a>
      </Menu.Item>
      <Menu.Item key="1">
        <a href="/logout">Logout</a>
      </Menu.Item>
    </Menu>
  );

  return (
    <div className="flex items-center justify-between px-6 py-2 bg-black text-white h-16">

    <h1 className="text-3xl font-bold mb-3 mt-3 my-text text-green-50 ml-5">{page}</h1>
      {/* Search Bar */}
      <div className="flex-grow px-6 max-w-[60%]">
        <Search placeholder="Search" enterButton={false} size="large" />
      </div>

      {/* Icons and Profile */}
      <div className="flex items-center space-x-4">
        <BellOutlined className="text-2xl cursor-pointer" />
        <SettingOutlined className="text-2xl cursor-pointer" />
        <Dropdown overlay={userMenu} trigger={['click']}>
          <div className="flex items-center space-x-2 cursor-pointer">
            <Avatar src="/assets/images/adminProfile.png" />
            <div className="text-sm">
              <div>Samudi Perera</div>
              <div className="text-gray-400 text-xs">Review Officer</div>
            </div>
          </div>
        </Dropdown>
      </div>
    </div>
  );
};

export default AdminNavBar;
