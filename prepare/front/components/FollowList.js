import React from 'react';
import {List, Button, Card} from 'antd';
import PropTypes from 'prop-types'; // 이거 쓰는이유 그냥 prop으로 넘어오는것들 뭔지 파악하는거랑 타입 알기위해서 이거 사용 안하려면 타입스크립트 사용하면 됨.
const FollowList = ({header, data}) => {
    return (
        <List
            style = {{marginBottom: 20}}
            grid = {{gutter: 4, xs: 2, md : 3}}
            size="small"
            header={<div>{header}</div>}
            loadMore={<div style = {{ textAlign: 'center', margin: '10px 0'}}><Button>더 보기</Button></div>}
            bordered
            dataSource={data}
            renderItem={(item)=> (
                <List.Item style = {{marginTop : 20}}>
                    <Card actions={[<StopOutlined key = "stop"/>]}>
                        <Card.Meta description={item.nickname}/>
                    </Card>


                </List.Item>
            )}

        />
    )
};

FollowList.propTypes= {
    header : PropTypes.string.isRequired,
    data : PropTypes.array.isRequired,
};

export default FollowList;