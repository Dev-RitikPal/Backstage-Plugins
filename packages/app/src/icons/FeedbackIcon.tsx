import React from 'react';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import SvgIcon from '@material-ui/core/SvgIcon';

const useStyles = makeStyles(
  () =>
    createStyles({
      icon: {
        pointerEvents: 'none',
        height: '1.6rem',
        width: '1.6rem',
      },
    }),
  { name: 'FeedbackIcon' },
);

const FeedbackIcon = () => {
  const classes = useStyles();
  return (
    <SvgIcon
      className={classes.icon}
      fill="#000000"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 100 100"
    >
      <g>
        <g>
          <path
            d="M79.1,56.5c-0.1-0.4-0.1-0.9,0.2-1.2C81,52.2,82,48.7,82,45c0-11.6-9.9-21-22-21c-5.2,0-10,1.8-13.8,4.7
			C58.7,31.4,68,42.2,68,55c0,3.6-0.7,7.1-2.1,10.2c2-0.5,3.9-1.3,5.7-2.4c0.4-0.2,0.8-0.3,1.2-0.1l6.4,2.3c1.1,0.4,2.2-0.7,1.9-1.9
			L79.1,56.5z"
          />
        </g>
        <g>
          <path
            d="M40,34c-12.1,0-22,9.4-22,21c0,3.7,1,7.2,2.8,10.3c0.2,0.4,0.3,0.8,0.2,1.2l-2.1,6.7
			c-0.4,1.2,0.7,2.3,1.9,1.9l6.4-2.3c0.4-0.1,0.9-0.1,1.2,0.1c3.4,2,7.3,3.1,11.6,3.1c12.1,0,22-9.4,22-21C62,43.4,52.1,34,40,34z
			 M28,59c-2.2,0-4-1.8-4-4c0-2.2,1.8-4,4-4c2.2,0,4,1.8,4,4C32,57.2,30.2,59,28,59z M40,59c-2.2,0-4-1.8-4-4c0-2.2,1.8-4,4-4
			c2.2,0,4,1.8,4,4C44,57.2,42.2,59,40,59z M52,59c-2.2,0-4-1.8-4-4c0-2.2,1.8-4,4-4c2.2,0,4,1.8,4,4C56,57.2,54.2,59,52,59z"
          />
        </g>
      </g>
    </SvgIcon>
  );
};

export default FeedbackIcon;
