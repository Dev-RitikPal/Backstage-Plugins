import { Progress, Table, TableColumn } from '@backstage/core-components';
import { useApi } from '@backstage/core-plugin-api';
import { scmAuthApiRef } from '@backstage/integration-react';
import Alert from '@material-ui/lab/Alert';
import React from 'react';
import { useAsync } from 'react-use';
import { GitlabCIApiRef } from '../../../api';
import { MergeRequest } from '../../types';
import { getDuration, getElapsedTime } from '../../utils';
import { createNameColumn, createTitleColumn } from './columns';

export const DenseTable = ({ mergeRequests }: any) => {
  const columns: TableColumn[] = [createNameColumn(), createTitleColumn()];
  const title = 'Recent Merge Requests';
  const data = mergeRequests?.data?.map((mergeRequest: MergeRequest) => {
    return {
      project_name: mergeRequest.project_name,
      id: mergeRequest.id,
      state: mergeRequest.state,
      author: mergeRequest.author.username,
      title: mergeRequest.title,
      web_url: mergeRequest.web_url,
      created_date: getElapsedTime(mergeRequest.created_at),
      duration: getDuration(mergeRequest.created_at, mergeRequest.updated_at),
    };
  });

  return (
    <Table
      title={title}
      options={{ search: false, paging: true, padding: 'dense' }}
      columns={columns}
      data={data}
    />
  );
};

export const UserMergeRequestsTable = ({}) => {
  const GitlabCIAPI = useApi(GitlabCIApiRef);
  const scmAuthApi = useApi(scmAuthApiRef);

  const { value, loading, error } = useAsync(async (): Promise<
    MergeRequest[]
  > => {
    const { token } = await scmAuthApi.getCredentials({
      url: `https://gitlab.com/api/v4`,
    });

    const gitlabObj = await GitlabCIAPI.getUserAllMergeRequest({
      token,
    });
    const data = gitlabObj?.getMergeRequestsData;
    let renderData: any = { data };
    return renderData;
  }, []);

  if (loading) {
    return <Progress />;
  } else if (error) {
    return <Alert severity="error">{error.message}</Alert>;
  }

  return <DenseTable mergeRequests={value || []} />;
};
