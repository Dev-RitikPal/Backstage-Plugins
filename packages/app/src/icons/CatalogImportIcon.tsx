import React from 'react';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import SvgIcon from '@material-ui/core/SvgIcon';

const useStyles = makeStyles(
  () =>
    createStyles({
      icon: {
        pointerEvents: 'none',
        height: '1rem',
        width: '1rem',
      },
    }),
  { name: 'CatalogImportIcon' },
);

const CatalogImportIcon = () => {
  const classes = useStyles();
  return (
    <SvgIcon
      className={classes.icon}
      fill="#000000"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
    >
      <g>
        <path
          d="M457.14,347.43v128H54.86v-128c0-10.1-8.19-18.29-18.29-18.29c-10.1,0-18.29,8.19-18.29,18.29v146.29
		c0,4.81,1.95,9.53,5.36,12.93c3.41,3.41,8.11,5.36,12.93,5.36h438.86c4.81,0,9.52-1.95,12.93-5.36c3.4-3.4,5.36-8.11,5.36-12.93
		V347.43c0-10.1-8.19-18.29-18.29-18.29C465.33,329.14,457.14,337.33,457.14,347.43z M237.71,18.29V384
		c0,10.1,8.19,18.29,18.29,18.29c10.1,0,18.29-8.19,18.29-18.29V18.29C274.29,8.19,266.1,0,256,0C245.9,0,237.71,8.19,237.71,18.29z
		 M96.78,250.64l146.29,146.29c3.4,3.4,8.11,5.36,12.93,5.36c4.81,0,9.52-1.95,12.93-5.36l146.29-146.29
		c7.14-7.14,7.14-18.72,0-25.86c-7.14-7.14-18.72-7.14-25.86,0L256,358.14L122.64,224.78c-7.14-7.14-18.72-7.14-25.86,0
		C89.64,231.93,89.64,243.5,96.78,250.64L96.78,250.64z"
        />
      </g>
    </SvgIcon>
  );
};

export default CatalogImportIcon;
