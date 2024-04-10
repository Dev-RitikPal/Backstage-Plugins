import { TableColumn } from '@backstage/core-components';
import { Box, Typography } from '@material-ui/core';
import Link from '@material-ui/core/Link';
import React from 'react';
import { MergeRequest } from '../../types';
import { getStatusIconType } from './Icons';

export function createTitleColumn(): TableColumn<{}> {
  return {
    title: 'Title',
    field: 'title',
    highlight: true,
    render: (row: Partial<MergeRequest>) => (
      <Typography
        variant="body2"
        noWrap={true}
        align="left"
        style={{
          width: 'inherit',
        }}
        title={row.title}
      >
        {getStatusIconType(row as MergeRequest)}
        <Box ml={1} component="span">
          <Link href={row.web_url} target="_blank">
            {row.title}
          </Link>
        </Box>
      </Typography>
    ),
  };
}

export function createNameColumn(): TableColumn<{}> {
  return {
    title: 'Project',
    field: 'project_name',
    highlight: true,
    render: (row: Partial<MergeRequest>) => (
      <Typography
        variant="body2"
        noWrap={true}
        align="left"
        display="block"
        style={{
          maxWidth: '200px',
        }}
      >
        {row.project_name}
      </Typography>
    ),
  };
}
