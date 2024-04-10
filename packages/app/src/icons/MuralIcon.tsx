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
  { name: 'MuralIcon' },
);

const MuralIcon = () => {
  const classes = useStyles();
  return (
    <SvgIcon
      className={classes.icon}
      fill="#000000"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMid meet"
      viewBox="0 0 60 60"
    >
      <path
        d="M63.998 1.915a1.931 1.931 0 0 0-1.917-1.917H1.911A1.931 1.931 0 0 0-.006 1.915v60.17a1.931 1.931 0 0 0 1.917 1.917h44.846l17.241-17.24z"
        fill="#808080"
      />
      <path d="M47.233 47.33h16.193L46.757 64H30.655z" fill="#808080" />
      <path
        d="M63.998 46.758h-15.33a1.931 1.931 0 0 0-1.917 1.917v15.33z"
        fill="#C0C0C0"
      />
      <path
        d="M44.55 22.518v19.258a.655.655 0 0 1-.668.669h-4.986a.655.655 0 0 1-.67-.67V32.19l-6.13 8.527-6.324-8.91v10.058a.655.655 0 0 1-.669.67h-4.982a.655.655 0 0 1-.67-.67V22.518a.655.655 0 0 1 .67-.67h4.406c.193 0 .38.097.576.287l6.803 9.39 6.897-9.39c.096-.193.379-.286.575-.286h4.504a.724.724 0 0 1 .669.669"
        fill="#fff"
      />
    </SvgIcon>
  );
};

export default MuralIcon;
