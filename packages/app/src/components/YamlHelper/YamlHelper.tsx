import * as React from 'react';
import { Content, Header, Page } from '@backstage/core-components';
import { Typography, Box, Tabs, Tab } from '@material-ui/core';
interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}
import SyntaxHighlighter from 'react-syntax-highlighter';
import { dark } from 'react-syntax-highlighter/dist/esm/styles/prism';

import CopyButton from '../common/Buttons/CopyButton';

import component from '../home/YamlFiles/component';
import template from '../home/YamlFiles/template';
import api from '../home/YamlFiles/api';
import group from '../home/YamlFiles/group';
import user from '../home/YamlFiles/user';
import location from '../home/YamlFiles/location';
import resource from '../home/YamlFiles/resource';
import system from '../home/YamlFiles/system';
import domain from '../home/YamlFiles/domain';
import mkdocs from '../home/YamlFiles/mkdocs';
import { KindType } from './KindType';
import { useEffect } from 'react';
function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function YamlHelper() {
  const [value, setValue] = React.useState<any>(0);

  const handleChange = ({}, newValue: number) => {
    setValue(newValue);
    for (var name in KindType) {
      if (GetPropertyValue(KindType, name) == newValue) {
        var url = window?.location.href;
        var urlSplit = url?.split('?');
        var stateObj = {
          Title: 'Yaml Helper ',
          Url: urlSplit[0] + '?type=' + encodeURI(name),
        };
        history?.pushState(stateObj, stateObj.Title, stateObj.Url);
      }
    }
  };
  function GetPropertyValue(obj1: any, dataToRetrieve: string) {
    return dataToRetrieve.split('.').reduce(function (o, k) {
      return o && o[k];
    }, obj1);
  }
  useEffect(() => {
    const queryParams = new URLSearchParams(window?.location.search);
    const qsType = queryParams.get('type') || 'component';
    if (qsType) {
      setValue(GetPropertyValue(KindType, qsType) || 0);
    }
  }, []);
  return (
    <Page themeId="home">
      <Header title="A Collection of Backstage YAML Descriptor Files" />
      <Content>
        <Box sx={{ width: '100%' }}>
          <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
            <Tabs
              value={value}
              onChange={handleChange}
              aria-label="basic tabs example"
            >
              <Tab label="Component" {...a11yProps(KindType.component)} />
              <Tab label="Template" {...a11yProps(KindType.template)} />
              <Tab label="API" {...a11yProps(KindType.api)} />
              <Tab label="Group" {...a11yProps(KindType.group)} />
              <Tab label="User" {...a11yProps(KindType.user)} />
              <Tab label="Resource" {...a11yProps(KindType.resource)} />
              <Tab label="System" {...a11yProps(KindType.system)} />
              <Tab label="Domain" {...a11yProps(KindType.domain)} />
              <Tab label="Location" {...a11yProps(KindType.location)} />
              <Tab label="MkDocs" {...a11yProps(KindType.mkdocs)} />
            </Tabs>
          </Box>
          <TabPanel value={value} index={KindType.component}>
            <h1>kind: Component</h1>
            <p>
              A Component in the Engineering Portal constitutes a collection of
              common software assets that can be grouped and viewed together.
            </p>
            <p>
              <u>
                <a href="/docs/default/component/engineering-portal/onboarding/software-catalog/">
                  For more information, see the Software Catalog documentation.
                </a>
              </u>
            </p>
            <p>
              <u>
                <a href="/create/templates/component-mr-action">
                  You can now Scaffold this file in a MR to an existing
                  repository with Engineering Portal.
                </a>
              </u>
            </p>
            <CopyButton text={component} />
            <SyntaxHighlighter language="yaml" style={dark}>
              {component}
            </SyntaxHighlighter>
          </TabPanel>

          <TabPanel value={value} index={KindType.template}>
            <h1>kind: Template</h1>
            <p>
              <i>kind: Template</i> allows Engineers to create Reusable Software
              Template and Scaffold new repositories using the same.
            </p>
            <p>
              This tool can help us create Components inside the Engineering
              Portal that will load code skeletons, fill in some variables and
              publish that template to GitLab.
            </p>
            <p>
              <u>
                <a href="/docs/default/component/engineering-portal/onboarding/template/template/">
                  For more information, see the Template documentation.
                </a>
              </u>
            </p>
            <CopyButton text={template} />

            <SyntaxHighlighter language="yaml" style={dark}>
              {template}
            </SyntaxHighlighter>
          </TabPanel>

          <TabPanel value={value} index={KindType.api}>
            <h1>kind: API</h1>
            <p>
              <i>kind: API</i> describes an interface that can be exposed by a
              component. The API can be defined in different formats, like
              OpenAPI, AsyncAPI, GraphQL, gRPC, or other formats.
            </p>
            <p>
              <u>
                <a href="/docs/default/component/engineering-portal/onboarding/api-onboarding/">
                  For more information, see the API Onboarding documentation.
                </a>
              </u>
            </p>
            <p>
              <u>
                <a href="/create/templates/api-mr-action">
                  You can now Scaffold this file in a MR to an existing
                  repository with Engineering Portal.
                </a>
              </u>
            </p>
            <CopyButton text={api} />
            <SyntaxHighlighter language="yaml" style={dark}>
              {api}
            </SyntaxHighlighter>
          </TabPanel>

          <TabPanel value={value} index={KindType.group}>
            <h1>kind: Group</h1>
            <p>
              A group describes an organizational entity, such as for example a
              team, a business unit, or a loose collection of people in an
              interest group. Members of these groups are modeled in the catalog
              as `kind: User`.
            </p>
            <p>
              <u>
                <a href="/docs/default/component/engineering-portal/onboarding/register-groups/">
                  For more information, see the Register Groups documentation.
                </a>
              </u>
            </p>
            <p>
              <u>
                <a href="/create/templates/group-mr-action">
                  You can now Scaffold this file in a MR to an existing
                  repository with Engineering Portal.
                </a>
              </u>
            </p>

            <CopyButton text={group} />
            <SyntaxHighlighter language="yaml" style={dark}>
              {group}
            </SyntaxHighlighter>
          </TabPanel>

          <TabPanel value={value} index={KindType.user}>
            <h1>kind: User</h1>
            <p>
              A user describes a person, such as an employee, a contractor, or
              similar. Users belong to Group entities in the catalog.
            </p>
            <p>
              <u>
                <a href="/docs/default/component/engineering-portal/onboarding/register-users/">
                  For more information, read the user documentation.
                </a>
              </u>
            </p>
            <CopyButton text={user} />

            <SyntaxHighlighter language="yaml" style={dark}>
              {user}
            </SyntaxHighlighter>
          </TabPanel>

          <TabPanel value={value} index={KindType.resource}>
            <h1>kind: Resource</h1>
            <p>
              A Resource catalog represents infrastructure assets in the
              Engineering Portal.
            </p>
            <p>
              <u>
                <a href="/docs/default/component/engineering-portal/onboarding/kind-resource/">
                  For more information, read the user documentation.
                </a>
              </u>
            </p>
            <p>
              <u>
                <a href="/create/templates/resource-mr-action">
                  You can now Scaffold this file in a MR to an existing
                  repository with Engineering Portal.
                </a>
              </u>
            </p>
            <CopyButton text={resource} />

            <SyntaxHighlighter language="yaml" style={dark}>
              {resource}
            </SyntaxHighlighter>
          </TabPanel>

          <TabPanel value={value} index={KindType.system}>
            <h1>kind: System</h1>
            <p>
              A system is a collection of inter-related components, apis and
              resources.
            </p>
            <p>
              <u>
                <a href="/docs/default/component/engineering-portal/onboarding/kind-system/">
                  For more information, read the user documentation.
                </a>
              </u>
            </p>
            <p>
              <u>
                <a href="/create/templates/system-mr-action">
                  You can now Scaffold this file in a MR to an existing
                  repository with Engineering Portal.
                </a>
              </u>
            </p>
            <CopyButton text={system} />

            <SyntaxHighlighter language="yaml" style={dark}>
              {system}
            </SyntaxHighlighter>
          </TabPanel>

          <TabPanel value={value} index={KindType.domain}>
            <h1>kind: Domain</h1>
            <p>A Domain is a collection of systems.</p>
            <p>
              <u>
                <a href="/docs/default/component/engineering-portal/onboarding/kind-domain/">
                  For more information, read the user documentation.
                </a>
              </u>
            </p>
            <p>
              <u>
                <a href="/create/templates/domain-mr-action">
                  You can now Scaffold this file in a MR to an existing
                  repository with Engineering Portal.
                </a>
              </u>
            </p>
            <CopyButton text={domain} />

            <SyntaxHighlighter language="yaml" style={dark}>
              {domain}
            </SyntaxHighlighter>
          </TabPanel>

          <TabPanel value={value} index={KindType.location}>
            <h1>kind: Location</h1>
            <p>
              A Location catalog descriptor is used as a reference to other
              catalog descriptors.
            </p>
            <p>
              <u>
                <a href="/docs/default/component/engineering-portal/onboarding/kind-location/">
                  For more information, read the user documentation.
                </a>
              </u>
            </p>
            <CopyButton text={location} />

            <SyntaxHighlighter language="yaml" style={dark}>
              {location}
            </SyntaxHighlighter>
          </TabPanel>

          <TabPanel value={value} index={KindType.mkdocs}>
            <h1>MkDocs</h1>
            <p>
              TechDocs is the homegrown docs-like-code solution developed by
              Spotify
            </p>
            <p>
              <u>
                <a href="/docs/default/component/engineering-portal/onboarding/techdocs/">
                  For more information, read the user documentation.
                </a>
              </u>
            </p>
            <p>
              <u>
                <a href="/create/templates/techdocs-mr-action">
                  You can now Scaffold this file in a MR to an existing
                  repository with Engineering Portal.
                </a>
              </u>
            </p>
            <CopyButton text={mkdocs} />

            <SyntaxHighlighter language="yaml" style={dark}>
              {mkdocs}
            </SyntaxHighlighter>
          </TabPanel>
        </Box>
      </Content>
    </Page>
  );
}
