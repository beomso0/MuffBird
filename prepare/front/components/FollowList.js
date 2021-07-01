import { List, Button, Card } from 'antd';
import PropTypes from 'prop-types';
import { StopOutlined } from '@ant-design/icons';

const FollowList = ({header, data}) => {
    return (
        <List 
            style={{marginBottom: 20}}
            grid={{gutter:4, xs:2, md:3}}
            size='small'
            header={<div>{header}</div>}
            loadMore={<div style={{textAlign: "center", margin: '10px 0'}}><Button>더 보기</Button></div>} //실제로는 이 style 값들 최적화해줘야 함. styled or useMemo.
            bordered
            dataSource={data} // --> 배열임.
            renderItem={(item) => ( //여기에서 배열 data의 객체들이 반복되며 그려짐
                <List.Item style={{ marginTop: 20 }}>
                    <Card actions={[<StopOutlined key='stop' />]}>
                        <Card.Meta description={item.nickname}/>
                    </Card>
                </List.Item>
            )}
        />
    );
};

FollowList.propTypes = {
    header: PropTypes.string.isRequired,
    data: PropTypes.array.isRequired
}

export default FollowList;