import { BackstageTheme } from '@backstage/theme';
import { Button, makeStyles, Typography } from '@material-ui/core';
import React from 'react';
import { CodeSnippet } from '@backstage/core-components';

const ENTITY_YAML = `metadata:
  name: example
  links:
    - url: https://dashboard.example.com
      title: My Dashboard
      icon: dashboard`;

/** @public */
export type EntityLinksEmptyStateClassKey = 'code';

const useStyles = makeStyles<BackstageTheme>(
  theme => ({
    code: {
      borderRadius: 6,
      margin: `${theme.spacing(2)}px 0px`,
      background: theme.palette.type === 'dark' ? '#444' : '#fff',
    },
  }),
  { name: 'PluginCatalogEntityLinksEmptyState' },
);

export function EntityLinksEmptyState() {
  const classes = useStyles();

  return (
    <>
      <Typography variant="body1">
        No links defined for this entity. You can add links to your entity YAML
        as shown in the highlighted example below:
      </Typography>
      <div className={classes.code}>
        <CodeSnippet
          text={ENTITY_YAML}
          language="yaml"
          showLineNumbers
          highlightedNumbers={[3, 4, 5, 6]}
          customStyle={{ background: 'inherit', fontSize: '115%' }}
        />
      </div>
      <Button
        variant="contained"
        color="primary"
        target="_blank"
        href="https://backstage.io/docs/features/software-catalog/descriptor-format#links-optional"
      >
        Read more
      </Button>
    </>
  );
}
