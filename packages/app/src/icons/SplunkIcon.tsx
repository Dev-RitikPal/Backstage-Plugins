import React from 'react';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import SvgIcon from '@material-ui/core/SvgIcon';

const useStyles = makeStyles(
  () =>
    createStyles({
      icon: {
        pointerEvents: 'none',
        width: '1em',
        height: '1em',
      },
    }),
  { name: 'SplunkIcon' },
);

const SplunkIcon = () => {
  const classes = useStyles();
  return (
    <SvgIcon
      className={classes.icon}
      fill="#000000"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 64 64"
      enable-background="new 0 0 24 24"
      preserveAspectRatio="xMidYMid meet"
    >
      <path d="M5.396 11.93V0l53.207 26.698V37.49L5.396 64V52.26L46.675 32z" />
    </SvgIcon>
  );
};

export default SplunkIcon;
