import React, { useEffect, useState } from 'react';
import {
  Checkbox,
  Collapse,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  makeStyles,
  Theme,
  Typography,
} from '@material-ui/core';
import { Link } from '@backstage/core-components';
// eslint-disable-next-line no-restricted-imports
import { ExpandMore, ExpandLess } from '@material-ui/icons';

import { RootState } from '../../redux';
import {
  updateGroup,
  updateSelectedGroup,
  updateSelectedTab,
  updateTab,
} from '../../redux/slices/onboarding.slice';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { TabBar } from './TabBar';

// import { useApi } from '@backstage/core-plugin-api';
// import { onboardingApiRef } from '../../api';

const RenderList = ({
  classes,
  list,
  selectedTab,
  selectedGroup,
  expanded,
  setExpanded,
  updateStatus,
}: any) => {
  return (
    <>
      <List className={classes.listItem}>
        {list[selectedTab as any][selectedGroup as any]?.map((item: any) => {
          return (
            <>
              <List component="div" disablePadding>
                <ListItem
                  button
                  key={item.id}
                  role={undefined}
                  dense
                  onClick={() =>
                    expanded === item.id
                      ? setExpanded(null)
                      : setExpanded(item.id)
                  }
                >
                  <ListItemIcon
                    onClick={event =>
                      updateStatus(event, item.id as number, !!item.isDone)
                    }
                  >
                    <Checkbox
                      edge="start"
                      // checked={!!item.isDone}
                      tabIndex={-1}
                      disableRipple
                    />
                  </ListItemIcon>
                  <Typography>
                    {item.url ? (
                      <Link to={item.url}>
                        {item?.title?.charAt(0).toUpperCase() +
                          item?.title?.slice(1)}
                      </Link>
                    ) : (
                      item?.title?.charAt(0).toUpperCase() +
                      item?.title?.slice(1)
                    )}
                  </Typography>
                  <IconButton size="small" className={classes.arrow}>
                    {expanded === item.id ? <ExpandLess /> : <ExpandMore />}
                  </IconButton>
                </ListItem>
                <Collapse in={expanded as any} timeout="auto" unmountOnExit>
                  {expanded === item.id && (
                    <List component="div" disablePadding>
                      <ListItem className={classes.listDesc}>
                        <ListItemText primary={item.description} />
                      </ListItem>
                    </List>
                  )}
                </Collapse>
              </List>
            </>
          );
        })}
      </List>
    </>
  );
};

const useStyles = makeStyles((theme: Theme) => ({
  listItem: {
    overflow: 'scroll',
    minHeight: theme.spacing(60),
    maxHeight: theme.spacing(60),
  },
  arrow: {
    marginLeft: 'auto',
  },
  listDesc: {
    paddingLeft: theme.spacing(9),
  },
}));

export const Checklist: React.FC<any> = () => {
  const classes = useStyles();
  const dispatch = useAppDispatch();
  // const onboardingApi = useApi(onboardingApiRef);
  const { tabs, list, selectedTab, groups, selectedGroup } = useAppSelector(
    (state: RootState) => state?.onboarding?.checklist,
  );
  
  const cheklistLngth: any = {};
  const group: any = {};
  const [expanded, setExpanded] = useState(null);

  useEffect(() => {
    // dispatch(getChecklist(onboardingApi));
    dispatch(updateTab(Object.keys(list)));
    dispatch(updateGroup(Object.keys(list[selectedTab as any])));
  }, [dispatch, list, selectedGroup, selectedTab]);

  const updateStatus = (event: any) => {
    event.stopPropagation();
    // dispatch(
    //   updateChecklistStatus({
    //     body: {
    //       isDone: !isChecked,
    //     },
    //     id,
    //     onboardingApi,
    //   }),
    // );
  };

  const handleChange = (_: React.ChangeEvent<{}>, newValue: string) => {
    if (tabs.includes(newValue)) {
      dispatch(updateSelectedTab(newValue));
    } else {
      dispatch(updateSelectedGroup(newValue));
    }
  };

  const groupLength = () => {
    tabs.forEach(element => {
      let count = 0;
      groups.forEach(item => {
        count += list[element][item].length;
      });
      cheklistLngth[element] = count;
    });
    return cheklistLngth;
  };

  const subGroupLength = () => {
    let count = 0;
    tabs.forEach(element => {
      groups.forEach(item => {
        count += list[element][item].length;
        group[element] = {
          ...group[element],
          [item]: list[element][item].length,
        };
      });
    });
    return group[selectedTab];
  };

  return (
    <>
      <TabBar
        tabs={tabs}
        selectedTab={selectedTab}
        tabsLength={groupLength()}
        handleChange={handleChange}
      />
      <TabBar
        tabs={groups}
        selectedTab={selectedGroup}
        tabsLength={subGroupLength()}
        handleChange={handleChange}
      />
      <RenderList
        classes={classes}
        list={list}
        selectedTab={selectedTab}
        selectedGroup={selectedGroup}
        expanded={expanded}
        setExpanded={setExpanded}
        updateStatus={updateStatus}
      />
    </>
  );
};
