const user = `---
apiVersion: backstage.io/v1alpha1
kind: User
metadata:
  name: [value]
spec:
  profile:
    displayName: [value]
    email: [value]
    picture: [url of image]
  memberOf: [array of teams]
`;
export default user;
