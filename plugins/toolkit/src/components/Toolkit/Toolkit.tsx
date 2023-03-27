import React, { useEffect, useState } from 'react';
import AddIcon from '@material-ui/icons/Add';
import Alert from '@material-ui/lab/Alert';
import EditIcon from '@material-ui/icons/Edit';

import { HomePageToolkit } from '@backstage/plugin-home';
import { Link, Progress } from '@backstage/core-components';
import { useApi } from '@backstage/core-plugin-api';
import { IconButton, makeStyles } from '@material-ui/core';

import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { getMyToolkits } from '../../redux/slices/toolkit.slice';
import { ITool, TToolkitMode } from '../../interfaces/interface';
import { ShowToolkitModal } from './ShowToolkitModal';
import { RootState } from '../../redux/store';
import { toolkitApiRef } from '../../api';
import logo from '../../assets/images/backstage_icon-1.jpg';

const useStyles = makeStyles(() => ({
  editIcon: {
    top: '1.3em',
    right: '1.5em',
    position: 'absolute',
  },
  container: {
    position: 'relative',
  },
}));
const Toolkit: React.FC<TToolkitMode> = ({ mode }) => {
  const classes = useStyles();
  const [links, setLinks] = useState<ITool[]>([]);
  const [open, setOpen] = useState(false);
  const toolkitApi = useApi(toolkitApiRef);
  const dispatch = useAppDispatch();
  const {
    myToolkits: { list, loading, error, message },
  } = useAppSelector((state: RootState) => state.toolkit);

  useEffect(() => {
    dispatch(getMyToolkits(toolkitApi));
  }, [dispatch, toolkitApi]);

  useEffect(() => {
    const link_arr: ITool[] = [];
    list?.forEach((toolkit: any, index: number) => {
      link_arr.push({
        key: toolkit.title + index + toolkit.logo,
        label: toolkit.title,
        icon: (
          <img
            src={toolkit.logo || logo}
            alt={toolkit.title}
            height="42vh"
            width="42vw"
          />
        ),
        url: toolkit.url,
      });
    });
    if (mode === 'write') {
      link_arr.push({
        key: 'Add',
        label: 'Add',
        icon: (
          <IconButton onClick={() => setOpen(true)}>
            <AddIcon fontSize="large" />
          </IconButton>
        ),
        url: '#',
      });
    }
    setLinks([...link_arr]);
  }, [list, loading, error, mode]);

  const onClose = () => {
    setOpen(false);
  };

  if (loading) {
    return <Progress />;
  } else if (error) {
    return <Alert severity="error">{message}</Alert>;
  }

  return (
    <div className={classes.container}>
      <HomePageToolkit key={links.toString()} tools={links} />
      {mode === 'read' ? (
        <Link to="/toolkit" className={classes.editIcon}>
          <EditIcon />
        </Link>
      ) : (
        ''
      )}

      <ShowToolkitModal show={open} onClose={onClose} />
    </div>
  );
};

export default Toolkit;
