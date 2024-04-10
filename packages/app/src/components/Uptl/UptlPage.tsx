import { Header, Link, Table, TableColumn } from '@backstage/core-components';
import { useApi } from '@backstage/core-plugin-api';
import { makeStyles } from '@material-ui/core';
import MuiButton from '@material-ui/core/Button';
import React, { useEffect, useState } from 'react';
import { UptlApiRef } from '../../customApis/api';
import SlackIcon from '../../icons/SlackColoredIcon';
import { featureDevStatus, FeatureStatus } from './FeatureDevelopmentStatus';
import { FeatureStagesSummary } from './FeatureStagesBar';

export type uptlObject = {
  pattern: string;
  description: string;
  status: featureDevStatus;
  custodian_name: string;
  custodian_slack: string; // channelID for the User's slack account
  catalog: string;
};

const useStyles = makeStyles(() => ({
  support: {
    fontSize: '1.5em',
    position: 'absolute',
    right: '20px',
    top: '50%',
    color: '#ffffff',
    transform: 'translateY(-50%)',
    zIndex: 100,
    display: 'flex',
    alignItems: 'center',
  },

  supportLink: {
    color: 'white',
    '&:hover': {
      textDecoration: 'none',
    },
    display: 'flex',
    alignItems: 'center',
    marginLeft: 8,
  },

  tableContainer: {
    padding: '16px 24px',
  },

  stageBarContainer: {
    padding: 8,
    display: 'flex',
    justifyContent: 'center',

    '&>a': {
      margin: 8,
      marginRight: 16,
    },
  },
}));

export const UptlPage = () => {
  const classes = useStyles();
  const [uptlData, setUptlData] = useState<uptlObject[]>([]);
  const UptlAPI = useApi(UptlApiRef);

  const columns: TableColumn<uptlObject>[] = [
    {
      title: 'Pattern',
      render: rowData => (
        <Link to={`/catalog/default/component/${rowData.catalog}`}>
          {rowData.pattern}
        </Link>
      ),
    },
    { title: 'Description', field: 'description' },
    {
      title: 'Status',
      render: rowData => (
        <FeatureStatus stage={rowData.status} labelPos="right" />
      ),
    },
    {
      title: 'Custodian',
      render: rowData => (
        <Link
          to={`https://slack.com/app_redirect?channel=${rowData.custodian_slack}`}
        >
          {rowData.custodian_name}
        </Link>
      ),
    },
  ];

  useEffect(() => {
    UptlAPI.getUptlData().then(r => {
      try {
        setUptlData(JSON.parse(window?.atob(r?.getUptlData.content)));
      } catch (e) {
        console.error(e);
      }
    });
  }, []);

  return (
    <div>
      <div style={{ position: 'relative' }}>
        <Header
          title="Unified Path To Live"
          subtitle="An initiative to collaborate, agree and define a methodology for the capabilities and processes required to move our software from source code to Production."
        />

        <div className={classes.support}>
          <Link
            to="https://slack.com/app_redirect?channel=ama-uptl"
            className={classes.supportLink}
          >
            <SlackIcon />
            #ama-uptl
          </Link>
        </div>
      </div>
      <div className={`${classes.stageBarContainer}`}>
        <FeatureStagesSummary />
        <MuiButton
          href="https://statusneo.com/rearportal"
          color="default"
          variant="contained"
        >
          More Info
        </MuiButton>
      </div>
      <div className={classes.tableContainer}>
        <Table
          options={{ search: true, paging: true, pageSize: 10 }}
          columns={columns}
          data={uptlData}
        />
      </div>
    </div>
  );
};
