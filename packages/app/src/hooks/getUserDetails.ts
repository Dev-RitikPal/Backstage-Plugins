import {
  useApi,
  identityApiRef,
  ProfileInfo,
} from '@backstage/core-plugin-api';
import { useState, useEffect } from 'react';

// const getUserDetails = () => {
//   var userId;
//   var profile;
//   const identityApi = useApi(identityApiRef);
//   identityApi.getProfileInfo().then(r => {
//     profile = r;
//     alert(JSON.stringify(profile));
//   });
//   identityApi.getCredentials().then(s => (userId = s.token));
//   const displayName = profile?.displayName ?? userId;
//   //   alert(profile)
//   return { profile, displayName };
// };

const getUserDetails1 = () => {
  const [profile, setProfile] = useState<ProfileInfo>();
  const [userId, setUserId] = useState<string | undefined>();
  const identityApi = useApi(identityApiRef);
  useEffect(() => {
    identityApi.getProfileInfo().then(r => setProfile(r));
    identityApi.getCredentials().then(s => setUserId(s.token));
  }, []);
  const displayName = profile?.displayName ?? userId;
  return { profile, displayName };
};

export default getUserDetails1;
