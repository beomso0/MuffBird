import { Card, Avatar, Button } from 'antd'
import { useCallback } from 'react';

const UserProfile = ({ setIsLoggedIn }) => {
    const onLogOut = useCallback(() => {
        setIsLoggedIn(false);
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
                avatar={<Avatar>BS</Avatar>}
                title="beomso0"
            />
            <Button onClick={onLogOut}>로그아웃</Button>
        </Card>
    )
}

export default UserProfile;