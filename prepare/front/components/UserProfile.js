import { Card, Avatar, Button } from 'antd'
import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logoutRequestAction } from '../reducers/user';

const UserProfile = () => {
    const dispatch = useDispatch();
    const { me, isLoggingOut } = useSelector((state) => state.user);

    const onLogOut = useCallback(() => {
        dispatch(logoutRequestAction());
    }, []);

    return (
        <Card
            actions={[
                <div key='twit'>트윗<br />0</div>, // jsx에서 배열 쓸 때는 때문에 key 붙여줘야 함.
                <div key='followings'>팔로잉<br />0</div>,
                <div key='followers'>팔로워<br />0</div>
            ]}
        >
            <Card.Meta 
                avatar={<Avatar>{me.nickname[0]}</Avatar>}
                title={me.nickname}
            />
            <Button onClick={onLogOut} loading={isLoggingOut}>로그아웃</Button>
        </Card>
    )
}

export default UserProfile;