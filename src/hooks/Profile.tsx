import React, { useEffect, useState } from 'react';

const Profile = () => {
  const [user_id, setUserId] = useState();
  const [nickName, setNickName] = useState();
  const [profileImage, setProfileImage] = useState();
  const [email, setEmail] = useState();
  const [ageRange, setAgeRange] = useState();
  const [gender, setGender] = useState();

  const getProfile = async () => {
    try {
      // Kakao SDK API를 이용해 사용자 정보 획득
      const data = await window.Kakao.API.request({
        url: '/v2/user/me'
      });
      console.log(data.properties);

      // 사용자 정보 변수에 저장
      setUserId(data.id);
      setNickName(data.properties.nickname);
      setProfileImage(data.properties.profile_image);
      setAgeRange(data.properties.age_range);
      setEmail(data.properties.account_email);
      setGender(data.properties.gender);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getProfile();
  }, []);
  return (
    <div>
      <h2>{user_id}</h2>
      <h2>{nickName}</h2>
      <img src={profileImage}></img>
      <h2>{gender}</h2>
      <h2>{ageRange}</h2>
      <h2>{email}</h2>
    </div>
  );
};

export default Profile;
