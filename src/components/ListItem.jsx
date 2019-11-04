import React from 'react';
import { Card, Avatar, Col } from 'antd';

const ListItem = ({item}) => {


    return (
        <>
        <Col span={6}>
            <Card
                style={{width:240}}
                hoverable
                key= {+item.createdAt}
                cover={item.img && <img width="10%"  height="10%" alt="example" src={item.img}/>}
            >
                <Card.Meta
                    avatar={<Avatar>{item.objective}</Avatar>}
                    title={item.title}
                    description={item.description}
                />
            </Card>
        </Col>
        </>
    );
}

export default ListItem;