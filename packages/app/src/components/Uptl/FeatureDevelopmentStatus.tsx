import { makeStyles } from '@material-ui/core';
import React from 'react';

const useStyles = makeStyles(theme => ({
  badge: {
    fontWeight: 500,
    width: '1.3em',
    height: '1.3em',
    display: 'flex',
    borderRadius: '50%',
    backgroundColor: 'white',
    color: 'rgba(0,0,0,0.87)',
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },

  labelBottom: {
    position: 'relative',
    '&:after': {
      position: 'absolute',
      display: 'block',
      content: `attr(data-stage)`,
      bottom: '-1.5em',
      color: theme.palette.text.primary,
      wordBreak: 'normal',
    },
  },

  labelRight: {
    position: 'relative',
    '&:after': {
      position: 'absolute',
      display: 'block',
      content: `attr(data-stage)`,
      left: 'calc(1.3em + 8px)',
      color: theme.palette.text.primary,
      wordBreak: 'normal',
    },
  },

  Inception: {
    backgroundColor: '#FFE33B',
  },

  Proposal: {
    backgroundColor: '#FFE33A',
  },

  Demo: {
    backgroundColor: '#FDA100',
  },

  Agreement: {
    backgroundColor: '#C7FF81',
  },

  Implementation: {
    backgroundColor: '#A1EF59',
  },

  Product: {
    backgroundColor: '#2D9615',
  },
}));

export type featureDevStatus =
  | 'Inception'
  | 'Proposal'
  | 'Demo'
  | 'Agreement'
  | 'Implementation'
  | 'Product';

type featureStatusProps = React.ComponentProps<'span'> & {
  stage: featureDevStatus;
  labelPos?: 'right' | 'bottom';
};

type Stage = {
  name: featureDevStatus;
  level: number;
};

export function FeatureStatus(props: featureStatusProps) {
  const classes = useStyles();

  const stages: Record<featureDevStatus, Stage> = {
    Inception: { name: 'Inception', level: 1 },
    Proposal: { name: 'Proposal', level: 2 },
    Demo: { name: 'Demo', level: 3 },
    Agreement: { name: 'Agreement', level: 4 },
    Implementation: { name: 'Implementation', level: 5 },
    Product: { name: 'Product', level: 6 },
  };

  let labelClass: string = '';

  if (props.labelPos) {
    labelClass =
      props.labelPos === 'right' ? classes.labelRight : classes.labelBottom;
  }

  return (
    <div
      data-stage={props.stage}
      className={`${classes.badge} ${classes[props.stage]} ${labelClass}`}
    >
      {stages[props.stage].level}
    </div>
  );
}
