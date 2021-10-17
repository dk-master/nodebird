import React from 'react';
import AppLayout from '../components/AppLayout';
import NicknameEditForm from '../components/NicknameEditForm';
import FollowList from '../components/FollowList';
import Head from 'next/head';
const Profile = () => {
    
    const followrList = [{nickname : '제로초'},{nickname : '김동관'},{nickname : '디케이'},];
    const followingList = [{nickname : '디케이'},{nickname : '마스터'},{nickname : '딬마'},];

    return (
        <>
        <Head>
            <title>내 프로필 | NodeBird</title>
        </Head>
    <AppLayout>
        <NicknameEditForm/>
        <FollowList header = "팔로잉 목록" data={followingList}/>
        <FollowList header = "팔로워 목록" data={followrList}/>
    </AppLayout>
    </>
    );
};

export default Profile;