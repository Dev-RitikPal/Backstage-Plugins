let component = `---
apiVersion: backstage.io/v1alpha1
kind: Component
metadata:
  name: [value]
  description: |
    [value]
  tags:
    - [tag 1]
    - [tag 2]
    - [tag 3]
  links:
    - title: [Title]
      url: [Link]
      icon: [icon]
  annotations:
    gitlab.com/project-slug: williamhillplc/[gitlab project slug]
    backstage.io/techdocs-ref: dir:[relative path to mkdocs descriptor]
    gitlab.com/project-id: [value]
    newrelic.com/dashboard-guid: [value]
    backstage.io/kubernetes-id: [value]
    architecture/image-url: https://example.com/image.png
    architecture/web-url: https://example.com
spec:
  type: [value]
  lifecycle: [value]
  owner: [value]
  system: [value]
  providesApis:
    - [api 1]
    - [api 2]
    - [api 3]
  consumesApis:
    - [api 1]
    - [api 2]
    - [api 3]
  dependsOn:
    - Component:[value]
    - Resource:[value]
`;

export default component;
