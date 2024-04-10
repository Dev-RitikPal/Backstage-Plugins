import {
  useApi,
  identityApiRef,
  ProfileInfo,
} from '@backstage/core-plugin-api';
import React, { useEffect, useState } from 'react';
import NewRelicBrowser from 'new-relic-browser';
import { useAnalytics } from '@backstage/core-plugin-api';

// import newrelic from 'newrelic'
declare global {
  interface Window {
    newrelic: typeof NewRelicBrowser;
    gtag: Function;
  }
}
// type GTagEvent = {
//   action: string;
//   category: string;
//   label: string;
//   value: object;
// };

// export const event = ({ action, category, label, value }: GTagEvent) => {
//   gtag('event', action, {
//     event_category: category,
//     event_label: label,
//     value: value,
//   });
// };
const getUserDetails = () => {
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

export const UserDetails = () => {
  let userDetails = getUserDetails();
  const analytics = useAnalytics();
  useEffect(() => {
    analytics.captureEvent('userLogin', 'UserDetails', {
      value: 1,
      attributes: {
        userName: userDetails?.profile?.email ? userDetails.profile.email : '',
        profilePhoto: userDetails?.profile?.picture
          ? userDetails.profile.picture
          : '',
        fullName: userDetails?.profile?.displayName
          ? userDetails.profile.displayName
          : '',
        name: 'User Log from userSession',
      },
    });
  }, [analytics, userDetails]);
  useEffect(() => {
    if (window && window.newrelic) {
      window.newrelic.addPageAction('userSession', {
        userName: userDetails?.profile?.email ? userDetails.profile.email : '',
        profilePhoto: userDetails?.profile?.picture
          ? userDetails.profile.picture
          : '',
        fullName: userDetails?.profile?.displayName
          ? userDetails.profile.displayName
          : '',
        name: 'User Log from userSession',
      });
    }
  }, [window, window.newrelic]);
  try {
    // const gt: GTagEvent = {
    //   action: 'USER_INFORMATION',
    //   category: '',
    //   label: '',
    //   value: {
    //     userName: userDetails?.profile?.email ? userDetails.profile.email : '',
    //     profilePhoto: userDetails?.profile?.picture
    //       ? userDetails.profile.picture
    //       : '',
    //     fullName: userDetails?.profile?.displayName
    //       ? userDetails.profile.displayName
    //       : '',
    //     name: 'User Log from userSession',
    //   },
    // };
    if (window && window.newrelic) {
      window.newrelic.addPageAction('userSession', {
        userName: userDetails?.profile?.email ? userDetails.profile.email : '',
        profilePhoto: userDetails?.profile?.picture
          ? userDetails.profile.picture
          : '',
        fullName: userDetails?.profile?.displayName
          ? userDetails?.profile?.displayName
          : '',
        name: 'User Log from userSession',
      });
    }
  } catch (er) {
    console.log(er);
  }
  return <></>;
};

export default UserDetails;
