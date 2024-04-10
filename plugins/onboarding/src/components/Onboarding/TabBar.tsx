import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

const useStyles = makeStyles((theme: any) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
  appBar: {
    backgroundColor: theme.palette.background.default,
    color: theme.palette.textContrast,
  },
  tabTitle: {
    border: '1px solid',
    paddingLeft: 3,
    lineHeight: 1.6,
    borderRadius: 5,
    paddingRight: 3,
    marginLeft: 3
  },
  activeTab: {
    backgroundColor: theme.palette.infoText,
    color: '#fff',
  },
  tab: {
    height: "70px"
  }
}));

const TabLabel = ({ label, completed, total, classes }: any) => {
  return (
    <>
      <div>
        {label}
        <span className={classes}>
          {completed}/{total}
        </span>
      </div>
    </>
  );  
};

export const TabBar: React.FC<{}> = ({ tabs, selectedTab, handleChange, tabsLength}: any) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.appBar} >
        <Tabs
          value={selectedTab}
          variant="fullWidth"
          onChange={handleChange}
          id="tabs"
          style={{
            height: '5em',
          }}
        >
          {tabs?.map((item: any, index: number) => {
            return (
              <Tab
                key={index}
                value={item}
                className={classes.tab}
                label={
                  <TabLabel
                    label={item?.toUpperCase()}
                    completed={0
                      // list[item]?.filter((val: any) => val.isDone).length || 0
                    }
                    total={tabsLength?.[item] || 0}
                    classes={`${classes.tabTitle} ${selectedTab === item ? classes.activeTab : null
                      }`}
                  />
                }
              />
            );
          })}
        </Tabs>
      </AppBar>
    </div>
  );
};
