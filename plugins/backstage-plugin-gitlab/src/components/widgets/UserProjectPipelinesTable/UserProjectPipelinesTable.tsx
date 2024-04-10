import { Progress, TableColumn } from '@backstage/core-components';
import { useApi } from '@backstage/core-plugin-api';
import { scmAuthApiRef } from '@backstage/integration-react';
import { Table as WhTable } from '@internal/core-components';
import Alert from '@material-ui/lab/Alert';
import React, { useEffect, useState } from 'react';
import { useAsync } from 'react-use';
import { GitlabCIApiRef } from '../../../api';
import { PipelineObject, ProjectData } from '../../types';
import { createStatusColumn, createWebURLColumn } from './columns';

type SelectMenu = {
  value: string;
  label: string;
};

interface Props {
  pipelineData: PipelineObject[];
  selectMenuList: SelectMenu[];
  selectedMenuItem: string;
  onSelectChange: (e: any) => void;
}

export const DenseTable = ({
  pipelineData,
  selectMenuList,
  selectedMenuItem,
  onSelectChange,
}: Props) => {
  const columns: TableColumn[] = [createStatusColumn(), createWebURLColumn()];
  const title = 'Pipelines';
  const data: any = pipelineData?.map((pipeline: PipelineObject) => {
    return {
      id: pipeline.id,
      project_id: pipeline.project_id,
      ref: pipeline.ref,
      status: pipeline.status,
      web_url: pipeline.web_url,
      project_name: pipeline.project_name,
      created_at: pipeline.created_at,
      updated_at: pipeline.updated_at,
    };
  });

  return (
    <WhTable
      title={title}
      options={{ search: false, paging: true, padding: 'dense' }}
      columns={columns}
      data={data}
      selectProps={{
        label: '',
        multiple: false,
        items: selectMenuList,
        selected: selectedMenuItem,
        onChange: onSelectChange,
      }}
    />
  );
};

function alterProjectListSchema(projectList: ProjectData[]): SelectMenu[] {
  return projectList.map(project => ({
    value: project.id,
    label: project.name,
  }));
}

export const UserProjectPipelinesTable = ({}) => {
  const GitlabCIAPI = useApi(GitlabCIApiRef);
  const scmAuthApi = useApi(scmAuthApiRef);

  const [token, setToken] = useState<string>('');
  const [projectMenu, setProjectMenu] = useState<SelectMenu[]>([]);
  const [selectedProjectId, setSelectedProjectId] = useState<string>('');
  const [pipelineData, setPipelineData] = useState<PipelineObject[]>([]);

  async function fetchProjectPipelineData(
    projectId: string,
    token: string,
  ): Promise<PipelineObject[] | undefined> {
    const gitlabObj = await GitlabCIAPI.getUserProjectPipelines(
      projectId,
      token,
    );
    const data = gitlabObj?.getPipelinesData;
    return data;
  }

  const onSelectMenuChange = (projectId: string) => {
    setSelectedProjectId(projectId);
  };

  const { loading, error } = useAsync(async () => {
    const { token } = await scmAuthApi.getCredentials({
      url: `https://gitlab.com/api/v4`,
    });
    setToken(token);
  }, []);

  useEffect(() => {
    (async () => {
      let projectList = null;
      if (token) {
        const projectSummary = await GitlabCIAPI.getUserProjects(token);
        projectList = alterProjectListSchema(
          projectSummary?.getProjectsList || [],
        );
      }
      setProjectMenu(projectList || []);
    })();
  }, [token]);

  useEffect(() => {
    setSelectedProjectId(projectMenu[0]?.value || '');
  }, [projectMenu]);

  useEffect(() => {
    (async () => {
      let pipelineData: any = null;
      if (token) {
        pipelineData = await fetchProjectPipelineData(selectedProjectId, token);
      }
      setPipelineData(pipelineData || []);
    })();
  }, [selectedProjectId]);

  if (loading) {
    return <Progress />;
  } else if (error) {
    return <Alert severity="error">{error.message}</Alert>;
  }

  return (
    <DenseTable
      pipelineData={pipelineData}
      selectMenuList={projectMenu}
      selectedMenuItem={selectedProjectId}
      onSelectChange={onSelectMenuChange}
    />
  );
};
