import React from 'react';
import { Progress, InfoCard } from '@backstage/core-components';
import Alert from '@material-ui/lab/Alert';
import { useAsync } from 'react-use';
import { Grid, Typography } from '@material-ui/core';
import { GlossaryItem } from '../../types/GlossaryItem';
import { useApi } from '@backstage/core-plugin-api';
import { glossaryApiRef } from '../../api';

type Props = {
  entityRef: string;
};
export const GlossaryContent = ({ entityRef }: Props) => {
  const glossaryAPI = useApi(glossaryApiRef);

  const { value, loading, error } = useAsync(async (): Promise<any> => {
    const response = await glossaryAPI.getGlossaryByRef(entityRef);
    const data = await response.json();
    console.log(data.data);
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
      <Grid spacing={3} justifyContent="flex-start">
        <InfoCard>
          {value?.map(
            (item: GlossaryItem, index: React.Key | null | undefined) => (
              <Grid
                spacing={3}
                key={index}
                style={{ display: 'flex', margin: '30px auto' }}
                xs={12}
              >
                <Grid justifyContent="center" item xs={4}>
                  <Typography variant="h4">{item.term}</Typography>
                </Grid>
                <Grid justifyContent="center" item xs={8}>
                  <Typography variant="h6">{item.definition} </Typography>
                </Grid>
              </Grid>
            ),
          )}
        </InfoCard>
      </Grid>
    </>
  );
};
