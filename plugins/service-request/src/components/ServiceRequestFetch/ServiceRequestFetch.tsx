import React, { useEffect } from 'react';
import { Table, TableColumn, Progress } from '@backstage/core-components';
import Alert from '@material-ui/lab/Alert';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { RootState } from '../../redux';
import { getAllSR } from '../../redux/slices/serviceRequest.slice';

export type TServiceRequest = {
  name: string;
  description: string;
  assignee: any;
  raisedBy: any;
  productName: string;
  productId: string;
  currentStatus: string;
};

type DenseTableProps = {
  data: TServiceRequest[];
};

export const DenseTable = ({ data }: DenseTableProps) => {
  const columns: TableColumn[] = [
    { title: 'Name', field: 'name' },
    { title: 'Description', field: 'description' },
    { title: 'Assignee', field: 'assignee.name' },
    { title: 'Raised By', field: 'raisedBy.name' },
    { title: 'Product Name', field: 'productName' },
    { title: 'Product Id', field: 'productId' },
    { title: 'Current Status', field: 'currentStatus' },
  ];

  return (
    <Table
      options={{
        search: false,
        paging: false,
        toolbar: false,
        headerStyle: { padding: '1.5rem' },
      }}
      columns={columns}
      data={data}
    />
  );
};

export const ServiceRequestFetch = () => {
  const dispatch = useAppDispatch();
  const { loading, error, requests } = useAppSelector(
    (state: RootState) => state.SR,
  );
  useEffect(() => {
    dispatch(getAllSR());
  }, []);

  if (loading) {
    return <Progress />;
  } else if (error) {
    return <Alert severity="error">{error}</Alert>;
  }

  return <DenseTable data={requests || []} />;
};
