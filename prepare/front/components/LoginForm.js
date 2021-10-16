import React, { useState, useCallback, useMemo } from 'react';
import { Form, Input, Button} from 'antd';
import Link from 'next/link';
import styled from 'styled-components';

//useMemo => 값을 캐싱하는것
//useCallback => 함수를 캐싱하는것 

// const style = useMemo(() => ({marginTop : 10}), []);
const ButtonWrapper = styled.div`
    margin-top : 10px;
`

const LoginForm = ({setIsLoggined}) => {
    const [id, setId] = useState('');
    const [password, setPassword] = useState('');

    const onChangeId = useCallback((e) => {  // 컴포넌트에 props로 넘겨주는 함수는 usecallback을 써주는게 좋다. 그래야 최적화가 됨
        setId(e.target.value);
    }, []);

    const onChangePassword = useCallback((e) => {
        setPassword(e.target.value);
    }, []); // 이런 과정들이 너무 많아서 라이브러리 쓰는걸 추천함 (react form 같은 경우)


    const onSubmitForm = useCallback(() => {
        console.log(id, password);
        setIsLoggined(true);
    }, [id, password])
    return (
        <Form onFinish ={onSubmitForm}>  
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
            <ButtonWrapper>
                <Button type = "primary" htmlType="submit" loading = {false}>로그인</Button>
                <Link href= "/signup"><a><Button>회원가입</Button></a></Link>
            </ButtonWrapper>
        

            <div>

            </div>

        </Form>
    );
}

export default LoginForm;