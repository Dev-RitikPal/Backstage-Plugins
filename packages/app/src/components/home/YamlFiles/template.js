let template = `---
apiVersion: scaffolder.backstage.io/v1beta3
kind: Template

metadata:
  name: [name]
  title: [Display Title]
  description: [value]
  tags:
    - [tag]
    - [tag]
    - [tag]
spec:
  owner: [value]
  type: [value]

# Sample Questions going forward, don't re-use as is!
  parameters:
    - title: Pfft! Sorry we don't Scaffold without knowing a little bit more about your needs
      description: Please help us with some information for the repository to Scaffold
      required:
        - component_id
        - owner
        - tags
        - default_branch
      properties:
        component_id:
          title: Name
          type: string
          description: Unique name of the component
        component_type:
          title: Type
          type: string
          description: Specification Type of Component
          enum:
            - "website"
            - "library"
            - "service"
        default_branch:
          title: default_branch
          type: string
          description: Git Branch for the Scaffolded template. Defaults to "main"
          default: main
        commit_message:
          title: Commit Message
          type: string
          description: First commit Message for repository creation
          default: 'Initial commit'
        commit_author_name:
          title: Commit Author
          type: string
          description: GitLab Handle for Author
          default: 'Scaffolder'
        commit_author_email:
          title: Commit Author Email
          type: string
          description: Outlook mail for Author
          default: 'scaffolder@backstage.io'
        component_lifecycle:
          title: LifeCycle
          type: string
          description: LifeCycle of Component
          enum:
            - "playground"
            - "experimental"
            - "production"
        tags:
          type: array
          items:
            type: string
          ui:options:
            orderable: false
        description:
          title: Description
          default: "Lorem ipsum dolor sit amet..."
          type: string
          description: Help others understand what this website is for.
        owner:
          title: Owner
          type: string
          description: Owner of the component
          ui:field: OwnerPicker
          ui:options:
            allowedKinds:
              - Group

    - title: Where should we create your Repository?
      required:
        - repoUrl
      properties:
        repoUrl:
          title: Repository Location
          type: string
          ui:field: RepoUrlPicker
          ui:options:
            allowedHosts:
              - gitlab.com
            requestUserCredentials:
              secretsKey: USER_OAUTH_TOKEN

  steps:
    - id: fetch-base
      name: Fetching Skeleton Repository to Scaffold
      action: fetch:template
      input:
        url: ./hw-sample
        values:
          component_id: \${{ parameters.component_id }}
          component_type: \${{ parameters.component_type }}
          component_lifecycle: \${{ parameters.component_lifecycle }}
          tags: \${{ parameters.tags }}
          description: \${{ parameters.description }}
          owner: \${{ parameters.owner }}
          destination: \${{ parameters.repoUrl | parseRepoUrl }}
          http_port: 8080

    - id: publish
      name: Scaffolding Your Repository and Publishing it to GitLab
      action: publish:gitlab
      input:
        allowedHosts: ['gitlab.com']
        description: This is \${{ parameters.component_id }}
        repoUrl: \${{ parameters.repoUrl }}
        token: \${{ secrets.USER_OAUTH_TOKEN }}
        defaultBranch: \${{ parameters.default_branch }}
        gitCommitMessage: \${{ parameters.commit_message }}
        gitAuthorName: \${{ parameters.commit_author_name }}
        gitAuthorEmail: \${{ parameters.commit_author_email }}

    - id: register
      name: Registering your Scaffolded Repository
      action: catalog:register
      input:
        repoContentsUrl: \${{ steps.publish.output.repoContentsUrl }}
        catalogInfoPath: '/catalog-info.yaml'

  output:
    remoteUrl: \${{ steps.publish.output.remoteUrl }}
    entityRef: \${{ steps.register.output.entityRef }}`;

export default template;
