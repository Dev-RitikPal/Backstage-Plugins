import {
  Button,
  Dialog,
  DialogContent,
  DialogTitle,
  FormControl,
  InputLabel,
  makeStyles,
  Select,
  TextField,
  Typography,
  useMediaQuery,
  useTheme,
} from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import useAsync from 'react-use/lib/useAsync';
import Alert from '@material-ui/lab/Alert';
import { TServiceRequest } from '../ServiceRequestFetch/ServiceRequestFetch';
import { getAllSR } from '../../redux/slices/serviceRequest.slice';
import { useAppDispatch } from '../../redux/hooks';
import { ServiceRequest, Users } from '../../redux/endpoints';

const useStyles = makeStyles(theme => ({
  inputField: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  errorField: {
    marginLeft: theme.spacing(2),
    textTransform: 'capitalize',
  },
}));

type TServiceRequestCreate = {
  show: boolean;
  onClose: () => void;
};

type TUser = {
  _id?: string;
  id: string;
  name: string;
  email: string;
  role: string;
};

const defaultFormData: TServiceRequest = {
  name: '',
  description: '',
  assignee: '',
  raisedBy: '',
  productName: '',
  productId: '',
  currentStatus: '',
};

export const FieldError: any = ({ message, className }:any) => {
  return (
    <Typography className={className} color="error" variant="caption">
      {message}
    </Typography>
  );
};

export const ServiceRequestCreate: React.FC<TServiceRequestCreate> = ({
  show,
  onClose,
}) => {
  const classes = useStyles();
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));
  const [users, setUsers] = useState<TUser[]>([]);
  const [formData, setFormData] = useState({ ...defaultFormData });
  const [formErr, setFormErr] = useState({ ...defaultFormData });

  const dispatch = useAppDispatch();
  const { value, loading, error } = useAsync(async (): Promise<TUser[]> => {
    const response = await fetch(`${Users.all}`);
    return await response.json();
  }, []);

  useEffect(() => {
    if (!loading && !error && value?.length) {
      setUsers([...value]);
    }
  }, [value, loading, error]);

  function validate(key: keyof TServiceRequest, value :any) {
    formErr[key] = !value.length ? ` ${key} is required ` : '';
    setFormErr({ ...formErr });
  }
  const handleChange = (e: any) => {
    e.preventDefault();
    setFormData({ ...formData, [e.target.name]: e.target.value });
    validate(e.target.name, e.target.value);
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    try {
      for (const key in formData) {
        validate(key as keyof TServiceRequest, formData[key as keyof TServiceRequest]);
      }
      if (Object.values(formErr).every(key => !key.length)) {
        const response = await fetch(`${ServiceRequest.create}`, {
          method: 'POST',
          body: JSON.stringify(formData),
          headers: {
            'Content-Type': 'application/json',
          },
        });
        const res = await response.json();
        dispatch(getAllSR());
        onClose()
        console.log(res);
      }
    } catch (error) {
      console.log(error);
    }
  };
  console.log('------', formErr);

  return (
    <Dialog
      maxWidth={'sm'}
      fullWidth={!fullScreen}
      onClose={onClose}
      aria-labelledby="simple-dialog-title"
      open={show}
    >
      <DialogTitle id="simple-dialog-title">Create Service Request</DialogTitle>
      {error && <Alert severity="error">{error.message}</Alert>}
      <DialogContent>
        <form noValidate className={classes.form}>
          {/* name */}
          <TextField
            id="sr-name"
            label="Name"
            className={classes.inputField}
            name="name"
            onChange={handleChange}
            variant="outlined"
            required
          />
          <FieldError className={classes.errorField} message={formErr.name} />
          {/* Description */}
          <TextField
            id="sr-description"
            label="Description"
            multiline
            maxRows={4}
            minRows={3}
            onChange={handleChange}
            className={classes.inputField}
            name="description"
            variant="outlined"
            required
          />
          <FieldError
            className={classes.errorField}
            message={formErr.description}
          />
          {/* assignee */}
          <FormControl variant="outlined" className={classes.inputField}>
            <InputLabel htmlFor="outlined-age-native-simple">
              Assignee
            </InputLabel>
            <Select
              native
              defaultValue={formData.assignee}
              onChange={handleChange}
              label="Assignee"
              inputProps={{
                name: 'assignee',
                id: 'sr-assignee',
              }}
            >
              <option aria-label="None" value="" />
              {users.map((user, index) => {
                if (user._id === formData.raisedBy) {
                  return;
                }
                return (
                  <option key={user.id + index} value={user._id}>
                    {user.name}
                  </option>
                );
              })}
            </Select>
            <FieldError
              className={classes.errorField}
              message={formErr.assignee}
            />
          </FormControl>
          <FormControl variant="outlined" className={classes.inputField}>
            <InputLabel htmlFor="outlined-age-native-simple">
              Raised By
            </InputLabel>
            <Select
              native
              defaultValue={formData.raisedBy}
              onChange={handleChange}
              label="Raised By"
              inputProps={{
                name: 'raisedBy',
                id: 'sr-raisedBy',
              }}
            >
              <option aria-label="None" value="" />
              {users.map((user, index) => {
                if (user._id === formData.assignee) {
                  return;
                }
                return (
                  <option key={index} value={user._id}>
                    {user.name}
                  </option>
                );
              })}
            </Select>
            <FieldError
              className={classes.errorField}
              message={formErr.raisedBy}
            />
          </FormControl>
          <TextField
            id="sr-productName"
            label="Product Name"
            className={classes.inputField}
            name="productName"
            onChange={handleChange}
            variant="outlined"
            required
          />
          <FieldError
            className={classes.errorField}
            message={formErr.productName}
          />
          <TextField
            id="sr-productId"
            label="Product ID"
            className={classes.inputField}
            name="productId"
            onChange={handleChange}
            variant="outlined"
            required
          />
          <FieldError
            className={classes.errorField}
            message={formErr.productId}
          />
          <TextField
            id="sr-currentStatus"
            label="Current Status"
            onChange={handleChange}
            className={classes.inputField}
            name="currentStatus"
            variant="outlined"
            required
          />
          <FieldError
            className={classes.errorField}
            message={formErr.currentStatus}
          />
          <Button color="primary" variant="contained" onClick={handleSubmit}>
            Submit
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};
