import React from 'react';
import { Menu } from 'antd';
import Image from 'next/image';
import { DashboardOutlined, UnorderedListOutlined, UserOutlined, SettingOutlined, LogoutOutlined } from '@ant-design/icons';

interface AdminSidebarProps {
    activeKey: string;
  }

  const AdminSidebar: React.FC<AdminSidebarProps> = ({ activeKey }) => {
  return (
    <div className="h-screen w-60 bg-black text-white flex flex-col p-4">
      <div className="flex items-center space-x-3 max-h-10 mb-8">
        <Image src="/assets/images/sltdaLogo.png" alt="Logo" width={40} height={40} />
        <div className="text-sm font-semibold">
          Sri Lanka Tourism Development Authority
        </div>
      </div>
      <Menu
        theme="dark"
        mode="vertical"
        defaultSelectedKeys={[activeKey]}
        className="bg-black text-white"
      >
        <Menu.Item
          key="dashboard"
          icon={<DashboardOutlined />}
          onClick={() => window.location.href = '/api/admin/dashboard'}
        >
          Dashboard
        </Menu.Item>
        <Menu.Item
          key="applications"
          icon={<UnorderedListOutlined />}
          onClick={() => window.location.href = '/api/admin/applications'}
        >
          Applications List
        </Menu.Item>
        <Menu.Item
          key="account"
          icon={<UserOutlined />}
          onClick={() => window.location.href = '/account'}
        >
          Account
        </Menu.Item>
        <Menu.Item
          key="account"
          icon={<UserOutlined />}
          onClick={() => window.location.href = '/visa'}
        >
          Application
        </Menu.Item>
        <Menu.Item
          key="settings"
          icon={<SettingOutlined />}
          onClick={() => window.location.href = '/settings'}
        >
          Settings
        </Menu.Item>
        <Menu.Item
          key="logout"
          icon={<LogoutOutlined />}
          onClick={() => console.log('Logout')}
        >
          Logout
        </Menu.Item>
      </Menu>
    </div>
  );
};

export default AdminSidebar;
