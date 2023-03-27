import React, { useEffect } from 'react';
import { Theme, withStyles } from '@material-ui/core/styles';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
// import { identityApiRef, useApi } from '@backstage/core-plugin-api';
import { Box, Button } from '@material-ui/core';

import { useAppDispatch, useAppSelector } from '../../redux/hooks';
// import { onboardingApiRef } from '../../api';
import {
  closeModal,
  // onboardingStatus,
} from '../../redux/slices/onboarding.slice';
import { RootState } from '../../redux';

const styles = (theme: Theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(2),
  },
  closeButton: {
    position: 'absolute',
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.primary.dark,
  },
});

const DialogTitle = withStyles(styles as any)((props: any) => {
  const { children, classes, onClose, ...other } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <IconButton
          aria-label="close"
          className={classes.closeButton}
          onClick={onClose}
        >
          <Typography variant="body2">Skip now</Typography>
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});

export const OnboardingModal: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  // const user = useApi(identityApiRef);
  const dispatch = useAppDispatch();
  // const onboardingApi = useApi(onboardingApiRef);
  const { showModal } = useAppSelector((state: RootState) => state?.onboarding);

  // const getUser = async () => {
  //   const res = await user.getProfileInfo();
  //   if (res) {
  //     dispatch(onboardingStatus({ onboardingApi }));
  //   }
  // };
  useEffect(() => {
    // getUser();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleClose = () => {
    dispatch(closeModal({}));
  };

  return (
    <Dialog
      fullWidth
      maxWidth="lg"
      onClose={handleClose}
      aria-labelledby="customized-dialog-title"
      open={showModal}
    >
      <DialogTitle id="customized-dialog-title">
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
          }}
        >
          Onboarding
          <Button color="primary" onClick={() => handleClose()}>
            Skip
          </Button>
        </Box>
      </DialogTitle>
      {children}
    </Dialog>
  );
};
