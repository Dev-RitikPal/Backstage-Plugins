import React, { useState } from 'react';
import { Progress, InfoCard } from '@backstage/core-components';
import Alert from '@material-ui/lab/Alert';
import { useAsync } from 'react-use';
import { Button, Grid, makeStyles, Typography } from '@material-ui/core';
import { GlossaryItem } from '../../types/GlossaryItem';
import { useApi } from '@backstage/core-plugin-api';
import { glossaryApiRef } from '../../api';
import { EditButton } from './EditGlossaryItem';
import { DeleteButton } from './EditGlossaryItem/DeleteButton';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import { Definition } from '../Glossary/Definition';
import { CopyToClipboard } from './CopyToClipboard';
const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    justifyContent: 'space-between',
    gap: theme.spacing(2),
    margin: theme.spacing(2, 0),
  },
}));
type Props = {
  key: number;
  callBack: () => void;
  searchText: string;
  character: string;
  filter: string;
};
export const GlossaryContent = ({
  key,
  callBack,
  searchText,
  character,
  filter,
}: Props) => {
  const glossaryAPI = useApi(glossaryApiRef);
  const classes = useStyles();
  const [current, setCurrent] = useState(0);
  const [offset, setOffset] = useState(10);

  var change = 10;
  const { value, loading, error } = useAsync(async (): Promise<any> => {
    var response;
    {
      if (character) {
        response = await glossaryAPI.getFilteredGlossary(
          `${character}%`,
          filter ? filter : '',
        );
      } else if (searchText) {
        response = await glossaryAPI.getFilteredGlossary(
          `%${searchText}%`,
          filter ? filter : '',
        );
      } else if (!character || !searchText) {
        response = await glossaryAPI.getFilteredGlossary(
          `%%`,
          filter ? filter : '',
        );
      }
    }

    const data = await response.json();
    data.data.sort(function (a: GlossaryItem, b: GlossaryItem) {
      if (a.term < b.term) {
        return -1;
      }
      if (a.term > b.term) {
        return 1;
      }
      return 0;
    });
    return data.data;
  }, []);

  if (loading) {
    return <Progress />;
  } else if (error) {
    return <Alert severity="error">{error.message}</Alert>;
  }

  return (
    <>
      <Grid key={key} item justifyContent="flex-start">
        <InfoCard>
          <nav arial-label="pagination navigation" className={classes.root}>
            <Typography>{`Showing ${value.length} results`}</Typography>
            <Typography>{`Page ${offset / change} of ${
              value.length / change == 1
                ? 1
                : Math.floor(value.length / change) + 1
            }`}</Typography>
          </nav>
          {value
            ?.slice(current, offset)
            .map((item: GlossaryItem, index: React.Key | null | undefined) => (
              <Grid
                key={index}
                style={{ display: 'flex', margin: '30px auto' }}
                xs={12}
                item
              >
                <Grid justifyContent="center" item xs={3}>
                  <div style={{display:"flex",alignItems:"center"}}>
                    <Typography variant="h4">{item.term}</Typography>{' '}
                    <CopyToClipboard glossaryItem={item} />
                  </div>
                  <Typography variant="body2">
                    {item.entity_ref.split('/')[1]}
                  </Typography>
                </Grid>

                <Grid justifyContent="center" item xs={7}>
                  <Definition definition={item.definition} />
                </Grid>
                <Grid container justifyContent="flex-start" item xs={2}>
                  <EditButton callBack={callBack} glossaryItem={item} />
                  <DeleteButton callBack={callBack} glossaryItem={item} />
                </Grid>
              </Grid>
            ))}
          <nav arial-label="pagination navigation" className={classes.root}>
            <Button
              aria-label="previous page"
              disabled={offset == change}
              onClick={() => {
                setOffset(offset - change);
                setCurrent(current - change);
              }}
              startIcon={<ArrowBackIosIcon />}
            >
              Previous
            </Button>

            <Button
              aria-label="next page"
              disabled={offset >= value.length}
              onClick={() => {
                setOffset(offset + change);
                setCurrent(current + change);
              }}
              endIcon={<ArrowForwardIosIcon />}
            >
              Next
            </Button>
          </nav>
        </InfoCard>
      </Grid>
    </>
  );
};
