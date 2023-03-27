import { makeStyles, Paper } from '@material-ui/core';
import React from 'react';
import { featureDevStatus, FeatureStatus } from './FeatureDevelopmentStatus';

const useStyles = makeStyles(theme => {
  const arrowColor =
    theme.palette.type === 'dark' ? 'rgb(138,35,135)' : 'rgb(233,64,87)';
  return {
    container: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-between',
      padding: '8px 16px',
      alignItems: 'center',
      backgroundColor: 'transparent',
    },

    featureBarContainer: {
      margin: 'auto',
      width: '70%',
      padding: '8px 16px',
    },

    arrow: {
      display: 'flex',
      flex: '1 1 auto',
      alignItems: 'center',
    },

    line: {
      flex: '1 1 auto',
      height: 2,
      // backgroundColor: '#784af4',
      // backgroundColor: theme.palette.text.primary,
      backgroundImage:
        'linear-gradient( 95deg,rgb(242,113,33) 0%,rgb(233,64,87) 50%,rgb(138,35,135) 100%)',
    },

    arrowRight: {
      border: '6px solid',
      borderRight: 'none',
      borderColor: `transparent transparent transparent ${arrowColor}`,
    },
  };
});

export function FeatureStagesSummary() {
  const classes = useStyles();
  const stages: featureDevStatus[] = [
    'Inception',
    'Proposal',
    'Demo',
    'Agreement',
    'Implementation',
    'Product',
  ];

  return (
    <div className={classes.featureBarContainer}>
      <Paper classes={{ root: classes.container }} elevation={0}>
        {stages.map((currentStage, index) => (
          <>
            <FeatureStatus stage={currentStage} labelPos="bottom" />
            {index !== stages.length - 1 && (
              <div className={classes.arrow}>
                <div className={classes.line} />
                <div className={classes.arrowRight} />
              </div>
            )}
          </>
        ))}
      </Paper>
    </div>
  );
}
