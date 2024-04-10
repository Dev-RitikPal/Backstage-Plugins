import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core';
import ShowMoreText from 'react-show-more-text';
import { Typography } from '@material-ui/core';

const useStyles = makeStyles(() => ({
  root: {
    fontSize: '14px',
    textDecoration: 'underline',
    color: 'gray',
    cursor: 'pointer',
  },
}));
type Props = {
  definition: any;
};

export const Definition = ({ definition }: Props) => {
  const style = useStyles();
  const [expand, setExpand] = useState(false);

  const addLinksToDefinition = (text: string): string => {
    const regex =
      /\b(((https?|ftp|dict):\/\/.)[^'">\s]+\.[^'">\s]+)(?=\s|$)(?!["<>])/gi;

    return text.replace(
      regex,
      `<b><a style="color: #a0c1ff;text-decoration: underline;" href="$1" target="_blank">$1<a></b>`,
    );
  }
  const ShowToggle = ({ toggle }: { toggle: any }) => {
    return <Typography className={style.root}>{toggle}</Typography>;
  };

  const lineCount = 2;
  return (
    <>
      <Typography variant="h6">
        <ShowMoreText
          lines={lineCount}
          more={<Typography className={style.root}> Show more </Typography>}
          less={<ShowToggle toggle="Show less" />}
          onClick={() => setExpand(!expand)}
          expanded={expand}
        >
          <div
            dangerouslySetInnerHTML={{
              __html: addLinksToDefinition(definition),
            }}
          />
        </ShowMoreText>
      </Typography>
    </>
  );
};
