const mkdocs = `site_name: [value]
site_description: [value]
site_author: [value]

repo_name: [project slug]
repo_url: [project url]
edit_uri: [edit/{{branch name}}/{{relative path}}/{{docs_dir}}/] or [blob/{{branch name}}/{{relative path}}/{{docs_dir}}/]

docs_dir: [directory name]
nav:
  - H1:
      - Sub Heading: [file name].md
      ...
  - H2:
      - File Title: 'f1.md'
      - 'f2.md'
      - External Link: 'https://example.com'

plugins:
  - techdocs-core
  - search
  ...

copyright: [value]
extra:
  analytics:
    provider: google
    property: [value]
  social:
    - icon: [icon]
      link: [url]`

export default mkdocs
