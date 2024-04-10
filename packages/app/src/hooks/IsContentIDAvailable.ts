import { useApi, configApiRef } from '@backstage/core-plugin-api';

const CONFLUENCE_CONTENT_ID = "app.newsConfluenceContentID";
const IsContentIDAvailable = () => {
  const configApi = useApi(configApiRef);
  const contentID = configApi.getOptionalString(CONFLUENCE_CONTENT_ID) || '';
  return contentID;
};

export default IsContentIDAvailable;
