import React from 'react';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';



const useStyles = makeStyles(
  () =>
    createStyles({
      icon: {
        pointerEvents: 'none',
        height: '25px',
        width: '25px',
        fontSize: '0.65rem'
      },
    }),
  { name: 'MckinseyIcon' },
);

const MckinseyIcon = () => {
  const classes = useStyles();
  return (
    <Avatar classes={{root: classes.icon}}>MK</Avatar>
    );
};

export default MckinseyIcon;
