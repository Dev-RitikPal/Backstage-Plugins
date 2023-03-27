import { Entity } from '@backstage/catalog-model';
import { Table, TableColumn } from '@backstage/core-components';
import { makeStyles } from '@material-ui/core';
import React, { ReactNode } from 'react';
import { columnFactories } from './columns';
import { componentEntityColumns, systemEntityColumns } from './presets';

/**
 * Props for {@link EntityTable}.
 *
 * @public
 */
export interface EntityTableProps<T extends Entity> {
  title: string;
  variant?: 'gridItem';
  entities: T[];
  emptyContent?: ReactNode;
  columns: TableColumn<T>[];
  pageSize?: number;
}

const useStyles = makeStyles(theme => ({
  empty: {
    padding: theme.spacing(2),
    display: 'flex',
    justifyContent: 'center',
  },
}));

/**
 * A general entity table component, that can be used for composing more
 * specific entity tables.
 *
 * @public
 */
export const EntityTable = <T extends Entity>(props: EntityTableProps<T>) => {
  const {
    entities,
    title,
    emptyContent,
    variant = 'gridItem',
    columns,
    pageSize,
  } = props;

  const classes = useStyles();
  const tableStyle: React.CSSProperties = {
    minWidth: '0',
    width: '100%',
  };

  if (variant === 'gridItem') {
    tableStyle.height = 'calc(100% - 10px)';
  }

  return (
    <Table<T>
      columns={columns}
      title={title}
      style={tableStyle}
      emptyContent={
        emptyContent && <div className={classes.empty}>{emptyContent}</div>
      }
      options={{
        // TODO: Toolbar padding if off compared to other cards, should be: padding: 16px 24px;
        search: false,
        paging: true,
        actionsColumnIndex: -1,
        padding: 'dense',
        pageSize: Number(pageSize) || 5,
      }}
      data={entities}
    />
  );
};

EntityTable.columns = columnFactories;

EntityTable.systemEntityColumns = systemEntityColumns;

EntityTable.componentEntityColumns = componentEntityColumns;
