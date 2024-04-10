import { Result, SearchDocument } from '@backstage/plugin-search-common';

export function prioritize(a: Result<SearchDocument>) {
  if (
    a.document.title == 'Product-EKS' ||
    a.document.title == 'Product-ECR' ||
    a.document.title == 'Product-OpenSearch' ||
    a.document.title == 'Product-Cloudfront' ||
    a.document.title == 'Product-RDS' ||
    a.document.title == 'Product-GitLab-Runner'
    )
    {
    return -1;
    }
  return 0;
}
