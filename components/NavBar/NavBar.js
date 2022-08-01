import React, { useState } from 'react'
import { Menu } from 'antd';
import { EyeOutlined, HomeOutlined, LoginOutlined, LogoutOutlined } from '@ant-design/icons';
import { useRouter } from 'next/router';

function NavBar({ user, logout }) {
   const router = useRouter()
    const items = [
        { "label":"Home" , key: "home", icon: <HomeOutlined />, link: "/" },
        { "label":"About" , key: "about", icon: <EyeOutlined />, link: "/about" },
        { "label":"Login" , key: "login", icon: <LoginOutlined />, link: "/login" },
        { "label":"Register" , key: "register", icon: <LogoutOutlined />, link: "/login" },
    ]
    const getFirstLetterName = () => {
        return user ? user.name.substr(0, 1) : false;
    };

    const [current, setCurrent] = useState("home");
    const onClick = (e) => {

        console.log(router.asPath);
        setCurrent(e.key);
    };

    return (
        <Menu 
        onClick={onClick} 
        mode='horizontal' 
        selectedKeys={[current]} 
        style={{ fontSize: "20px" }} 
        items={items} />
    )
}

export default NavBar