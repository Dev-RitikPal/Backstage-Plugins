import {
  StatusAborted,
  StatusError,
  StatusOK,
  StatusPending,
  StatusRunning,
  TableColumn,
} from '@backstage/core-components';
import { Box, Link, Typography } from '@material-ui/core';
import React from 'react';
import { PipelineObject } from '../../types';

export const GitlabCIStateIndicator = ({
  state,
}: {
  state: string | undefined;
}) => {
  switch (state) {
    case 'pending':
      return <StatusPending />;
    case 'in_progress':
      return <StatusRunning />;
    case 'success':
      return <StatusOK />;
    case 'ERROR':
    case 'failed':
      return <StatusError />;
    default:
      return <StatusAborted />;
  }
};

export function createStatusColumn(): TableColumn<{}> {
  return {
    title: 'Status',
    render: (row: Partial<PipelineObject>) => (
      <Box display="flex" alignItems="center">
        <GitlabCIStateIndicator state={row.status} />
        <Typography variant="caption">{row.status}</Typography>
      </Box>
    ),
  };
}

export function createWebURLColumn(): TableColumn<{}> {
  return {
    title: 'Web URL',
    render: (row: Partial<PipelineObject>) => (
      <Link href={`${row.web_url}`} target="_blank" rel="noopener noreferrer">
        {row.web_url}
      </Link>
    ),
  };
}
