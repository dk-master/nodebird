import React from 'react';
import { Avatar, Card, Button} from 'antd';
const UserProfile = () => {

    return (
        <Card
            actions= {[
                <div key = 'twit'>트윗</div>,
                <div key = 'following'>팔로잉</div>,
                <div key = 'follower'>팔로워</div>,
            ]}
        >
            <Card.Meta 
            avatar = {<Avatar>ZC</Avatar>}
            title = "ZeroCho"/>
        <Button>로그아웃</Button>
        </Card>
    );

};
export default UserProfile;