import React, { useState, useCallback } from 'react';
import { Form, Input, Button} from 'antd';
import Link from 'next/link';
const LoginForm = () => {
    const [id, setId] = useState('');
    const [password, setPassword] = useState('');

    const onChangeId = useCallback((e) => {
        setId(e.target.value);
    }, []);

    const onChangePassword = useCallback((e) => {
        setPassword(e.target.value);
    }, []); // 이런 과정들이 너무 많아서 라이브러리 쓰는걸 추천함
    return (
        <Form>  
            <div>
                <label htmlFor="user-id">아이디</label>
                <br/>
                <Input name ="user-id" value={id} onChange={onChangeId} required></Input>

                <label htmlFor="user-password">비밀번호</label>
                <br/>
                <Input 
                name ="user-password"
                type = "password" 
                value={password} 
                onChange={onChangePassword} 
                required></Input>
            </div>

            <div>
                <Button type = "primary" htmlType="submit" loading = {false}>로그인</Button>
                <Link href= "/signup"> <a><Button>회원가입</Button></a></Link>
            </div>

            <div>

            </div>

        </Form>
    );
}

export default LoginForm;