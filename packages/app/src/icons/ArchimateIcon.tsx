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
  { name: 'ArchimateIcon' },
);

const ArchimateIcon = () => {
  const classes = useStyles();
  return (
    <SvgIcon
      className={classes.icon}
      fill="#000000"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 105.000000 117.000000"
      preserveAspectRatio="xMidYMid meet"
    >
      <g
        transform="translate(0.000000,117.000000) scale(0.100000,-0.100000)"
        stroke="none"
      >
        <path
          d="M277 987 c-114 -66 -207 -123 -207 -126 0 -13 402 -233 415 -227 13
4 15 37 15 194 0 104 3 210 6 236 5 36 4 46 -7 45 -8 0 -107 -55 -222 -122z"
        />
        <path
          d="M532 873 c3 -234 3 -238 24 -237 23 0 404 211 404 224 0 6 -391 236
-422 248 -5 2 -7 -101 -6 -235z"
        />
        <path
          d="M50 585 l0 -257 33 20 c17 11 100 60 183 108 194 114 199 117 192
136 -5 12 -285 184 -385 237 l-23 12 0 -256z"
        />
        <path
          d="M775 720 c-141 -82 -200 -123 -200 -135 0 -13 60 -53 200 -136 l200
-118 3 130 c1 72 1 186 0 254 l-3 123 -200 -118z"
        />
        <path
          d="M275 434 c-110 -62 -201 -117 -202 -121 -3 -7 413 -253 427 -253 3 0
3 105 2 232 -3 160 -7 236 -15 244 -9 8 -63 -18 -212 -102z"
        />
        <path
          d="M537 534 c-10 -10 -9 -476 2 -472 25 9 421 243 421 248 0 8 -379 224
-400 228 -9 2 -19 0 -23 -4z"
        />
      </g>
    </SvgIcon>
  );
};

export default ArchimateIcon;
