import React, { useState, useEffect } from 'react';
import {
  makeStyles,
  Theme,
  Grid,
  Paper,
  TextField,
  Typography,
} from '@material-ui/core';
import { Content, Header, Page } from '@backstage/core-components';
import * as yaml from 'js-yaml';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { dark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { Autocomplete } from '@material-ui/lab';
const useStyles = makeStyles((theme: Theme) => ({
  bar: {
    padding: theme.spacing(1, 0),
  },
  filters: {
    padding: theme.spacing(2),
  },
  filter: {
    '& + &': {
      marginTop: theme.spacing(2.5),
    },
  },
  paper: {
    display: 'flex',
    width: '100%',
    margin: '10px',
    padding: '10px',
  },
  input: {
    display: 'flex',
    marginTop: '10px',
    width: '100%',
  },
}));
interface LooseObject {
    [key: string]: any
}
const YAMLobject: LooseObject = {
  apiVersion: 'backstage.io/v1beta2',
  kind: 'Template',
  metadata: {
    name: 'Options-demo-nodejs-standard',
    title: 'Options Demo Node.js Service deployable to EKS',
    description: 'Create a new Demo Node.js Service',
    tags: ['nodejs', 'helm', 'demo'],
  },
  spec: {
    owner: 'cpe',
    type: 'service',
    parameters: [
      {
        title: 'Configure Your Demo Node.js Service',
        required: ['service_name', 'owner', 'docker_namespace'],
        properties: {
          service_name: {
            title: 'Service Name',
            type: 'string',
            description: 'Unique service name. Eg random-nodejs-service',
            'ui:autofocus': true,
          },
          owner: {
            title: 'Owner',
            type: 'string',
            description: 'Owner of the component',
            'ui:field': 'OwnerPicker',
            'ui:options': {
              allowedKinds: ['Group'],
            },
          },
          dataClassification: {
            title: 'Data Classification',
            type: 'string',
            description: 'AWS Tag - Defined by DAVE tagging',
            'ui:field': 'AWSTagPicker',
          },
          customDropDown: {
            title: 'Customized Drop Down 1',
            type: 'string',
            description: 'This Drop Down can be used any how',
            'ui:field': 'CustomEntityPicker',
            'ui:options': {
              customOptions: ['We', 'are', 'building', 'backstage'],
            },
          },
          docker_namespace: {
            title: 'Docker Registry Namespace',
            description:
              'Docker registry namespace that image will be uploaded to. Eg. cpe',
            type: 'string',
          },
        },
      },
      {
        title: 'Choose a location',
        required: ['repoUrl'],
        properties: {
          repoUrl: {
            title: 'Repository Location',
            type: 'string',
            'ui:field': 'RepoUrlPicker',
            'ui:options': {
              allowedHosts: ['gitlab.com'],
            },
          },
        },
      },
      {
        title: 'Data classification',
        required: ['AWSTags'],
        properties: {
          AWSTags: {
            title: 'AWS Tag - Defined by DAVE tagging',
            type: 'string',
            'ui:field': 'AWSTagPicker',
            'ui:options': {
              tagAssigned: [
                'HighlyConfidential',
                'Confidential',
                'NonPublic',
                'Public',
              ],
            },
          },
        },
      },
    ],
    steps: [
      {
        id: 'template',
        name: 'Fetch Skeleton + Template',
        action: 'fetch:template',
        input: {
          url: './',
          values: {
            service_name: '{{ parameters.service_name }}',
            owner: '{{ parameters.owner }}',
            docker_namespace: '{{ parameters.docker_namespace }}',
          },
        },
      },
      {
        id: 'publish',
        name: 'Publish',
        action: 'publish:gitlab',
        input: {
          allowedHosts: ['gitlab.com'],
          description:
            'A simple "Hello World" node.js application deployable to EKS',
          repoUrl: '{{ parameters.repoUrl }}',
        },
      },
      {
        id: 'register',
        name: 'Register',
        action: 'catalog:register',
        input: {
          repoContentsUrl: '{{ steps.publish.output.repoContentsUrl }}',
          catalogInfoPath: '/catalog-info.yaml',
        },
      },
    ],
    output: {
      remoteUrl: '{{ steps.publish.output.remoteUrl }}',
      entityRef: '{{ steps.register.output.entityRef }}',
    },
  },
};
const Wizard = () => {
  const classes = useStyles();
  const [data, setData] = useState(YAMLobject);
  const [yamlDump, setYamlDump] = useState('');

  useEffect(() => {
    setYamlDump(
      yaml.dump(removeEmptyOrNull(data), {
        flowLevel: 3,
        styles: {
          '!!int': 'hexadecimal',
          '!!null': 'camelcase',
        },
      }),
    );
  });
  const removeEmptyOrNull = (obj :any) => {
    Object.keys(obj).forEach(k =>
      (obj[k] && typeof obj[k] === 'object') && removeEmptyOrNull(obj[k]) ||
      (!obj[k] && obj[k] !== undefined) && delete obj[k]
    );
    return obj;
  };
  return (
    <Page themeId="home">
      <Header title="YAML Wizard" />
      <Content>
        <Grid container>
          <Grid item md={6} xs={12}>
            <Typography variant="h3" component="h3">
              Input
            </Typography>
            <Typography variant="h4" component="h4">
              API Version
            </Typography>
            <Grid container direction="row">
              <Grid item xs={12}>
                <Paper className={classes.bar}>
                  <Grid item xs={4}>
                    <Autocomplete
                      disablePortal
                      id="combo-box-demo"
                      options={[
                        'backstage.io/v1beta2',
                        'backstage.io/v1Alpha1',
                      ]}
                      onChange={({}, values) => {
                        setData(prevState => ({
                          ...prevState,
                          apiVersion: String(values),
                        }));
                      }}
                      renderInput={params => (
                        <TextField {...params} label="Select API Version" />
                      )}
                    />
                  </Grid>
                </Paper>
              </Grid>

            </Grid>
            <Typography variant="h4" component="h4">
              Kind
            </Typography>
            <Grid container direction="row">
              <Grid item xs={12}>
                <Paper className={classes.bar}>
                  <Grid item xs={4}>
                    <Autocomplete
                      disablePortal
                      id="combo-box-demo"
                      options={['Service', 'API', 'Catalog', 'Public']}
                      onChange={({}, values) => {
                        setData(prevState => ({
                          ...prevState,
                          kind: String(values),
                        }));
                      }}
                      renderInput={params => (
                        <TextField {...params} label="Select Kind" />
                      )}
                    />
                  </Grid>
                </Paper>
              </Grid>
              <Typography variant="h4" component="h4">
                Meta Data
              </Typography>
              <Paper className={classes.paper}>
                <TextField
                  className={classes.input}
                  onChange={e => {
                    setData(prevState => ({
                      ...prevState,
                      metadata: {name: String(e.target.value)}
                    }));
                  }}
                  id="name"
                  label="Name"
                  variant="outlined"
                />
                <TextField
                  className={classes.input}
                  id="title"
                  label="Title"
                  variant="outlined"
                  onChange={e => {
                    setData(prevState => ({
                      ...prevState,
                      metadata: {title: String(e.target.value)}
                    }));
                  }}
                />
                <TextField
                  className={classes.input}
                  id="description"
                  label="Description"
                  variant="outlined"
                  onChange={e => {
                    setData(prevState => ({
                      ...prevState,
                      metadata: {description: String(e.target.value)}
                    }));
                  }}
                />
              </Paper>
            </Grid>
          </Grid>
          <Grid item md={6} xs={12}>
            <h1>Output</h1>
            <SyntaxHighlighter language="yaml" style={dark}>
              {yamlDump}
            </SyntaxHighlighter>
          </Grid>
        </Grid>
      </Content>
    </Page>
  );
};

export const YamlWizard = Wizard;
