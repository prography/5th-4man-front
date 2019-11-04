import React from 'react';
import 'antd/dist/antd.css'; 
import Menu from 'antd/lib/menu';
import Header from 'antd/lib/layout';

const Applayout = () => {

    
    return (
        <>
         <Header style={{ position: 'fixed', width: '100%' }}>
            <Menu
                mode="horizontal"
                style={{ lineHeight: '64px', backgroundColor: '#5F76F3', color:"white", display:"flex"}}
            >
                <Menu.Item key="1"
                style={{ marginRight:"auto"}}>개발은같이하자</Menu.Item>
                <Menu.Item key="2"
                style={{ marginLeft:"auto"}}>팀만들기</Menu.Item>
                <Menu.Item key="3"
                >로그인</Menu.Item>
                <Menu.Item key="4"
                >회원가입</Menu.Item>
            </Menu>
        </Header>
        
        </>
    );
};

export default Applayout;