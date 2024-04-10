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
  { name: 'OktaIcon' },
);

const OktaIcon = () => {
  const classes = useStyles();
  return (
    <SvgIcon
      className={classes.icon}
      fill="#000000"
      xmlns="http://www.w3.org/2000/svg"
      enable-background="new 0 0 24 24"
      viewBox="0 0 24 24"
    >
      <path d="M12,2L12,2C6.5,2,2,6.5,2,12s4.5,10,10,10s10-4.5,10-10C22,6.5,17.5,2,12,2z M17,12c0,2.8-2.2,5-5,5c-2.8,0-5-2.2-5-5c0-2.8,2.2-5,5-5C14.8,7,17,9.2,17,12L17,12z" />
    </SvgIcon>
  );
};

export default OktaIcon;
