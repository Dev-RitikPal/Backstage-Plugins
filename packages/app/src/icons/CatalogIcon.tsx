import React from 'react';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import SvgIcon from '@material-ui/core/SvgIcon';

const useStyles = makeStyles(
  () =>
    createStyles({
      icon: {
        pointerEvents: 'none',
        height: '1.2rem',
        width: '1.2rem',
      },
    }),
  { name: 'CatalogIcon' },
);

const CatalogIcon = () => {
  const classes = useStyles();
  return (
    <SvgIcon
      className={classes.icon}
      fill="#000000"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 60 60"
    >
      <path d="M40.43,42H24.71a1.5,1.5,0,0,0,0,3H40.43A1.5,1.5,0,0,0,40.43,42Z" />
      <path d="M40.43,48.5H24.71a1.5,1.5,0,0,0,0,3H40.43A1.5,1.5,0,0,0,40.43,48.5Z" />
      <path d="M58.58,25.12V15.76a1.51,1.51,0,0,0-.71-1.27l-6.31-4V6a3.5,3.5,0,0,0-3.5-3.5H8.92A3.5,3.5,0,0,0,5.42,6V58a3.5,3.5,0,0,0,3.5,3.5H48.06a3.5,3.5,0,0,0,3.5-3.5V54.13h5.52a1.5,1.5,0,0,0,1.5-1.5V43.27A1.49,1.49,0,0,0,57.87,42l-2.59-1.62h1.8a1.5,1.5,0,0,0,1.5-1.5V29.52a1.49,1.49,0,0,0-.71-1.27l-2.59-1.63h1.8A1.5,1.5,0,0,0,58.58,25.12ZM8.42,58V6a.5.5,0,0,1,.5-.5h4.5v53H8.92A.5.5,0,0,1,8.42,58Zm40.14,0a.5.5,0,0,1-.5.5H16.42V5.5H48.06a.5.5,0,0,1,.5.5Zm7-6.87h-4V41.59l4,2.51Zm0-13.75h-4V27.83l4,2.52Zm0-13.76h-4V14.08l4,2.51Z" />
    </SvgIcon>
  );
};

export default CatalogIcon;
