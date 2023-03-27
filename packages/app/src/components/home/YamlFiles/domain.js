const domain = `---
apiVersion: backstage.io/v1alpha1
kind: Domain
metadata:
  name: [name]
  description: [value]
  tags:
    - [value]
    - [value]
    - [value]
  annotations:
    architecture/image-url: https://example.com/image.png
    architecture/web-url: https://example.com
spec:
  owner: [team name]`

export default domain
