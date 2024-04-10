import { BackstageUserIdentity, ProfileInfo } from '@backstage/core-plugin-api';
import { UserIdentity } from './UserIdentity';

describe('UserIdentity', () => {
  it('should cache a successful response from the AuthApi for getProfile', async () => {
    const mockIdentity: BackstageUserIdentity = {
      type: 'user',
      userEntityRef: 'user:default/blam',
      ownershipEntityRefs: [],
    };

    const mockProfileInfo: ProfileInfo = {
      displayName: 'Blam',
      email: 'blob@boop.com',
    };

    const mockAuthApi: any = {
      getProfile: jest.fn().mockResolvedValue(mockProfileInfo),
    };

    const userIdentity = UserIdentity.create({
      authApi: mockAuthApi,
      identity: mockIdentity,
    });

    await userIdentity.getProfileInfo();
    await userIdentity.getProfileInfo();

    const response = await userIdentity.getProfileInfo();

    expect(mockAuthApi.getProfile).toHaveBeenCalledTimes(1);

    expect(response).toEqual(mockProfileInfo);
  });

  it('should not cache failures for the AuthApi for getProfile', async () => {
    const mockIdentity: BackstageUserIdentity = {
      type: 'user',
      userEntityRef: 'user:default/blam',
      ownershipEntityRefs: [],
    };

    const mockProfileInfo: ProfileInfo = {
      displayName: 'Blam',
      email: 'blob@boop.com',
    };

    const mockAuthApi: any = {
      getProfile: jest
        .fn()
        .mockRejectedValueOnce(new Error('boop'))
        .mockResolvedValueOnce(mockProfileInfo),
    };

    const userIdentity = UserIdentity.create({
      authApi: mockAuthApi,
      identity: mockIdentity,
    });

    await expect(() => userIdentity.getProfileInfo()).rejects.toThrow('boop');
    const response = await userIdentity.getProfileInfo();

    expect(mockAuthApi.getProfile).toHaveBeenCalledTimes(2);

    expect(response).toEqual(mockProfileInfo);
  });
});
