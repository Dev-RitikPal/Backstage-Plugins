import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core';
import { Typography } from '@material-ui/core';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';

const useStyles = makeStyles(theme => ({
  root: {
    fontSize: '14px',
    textDecoration: 'underline',
    color: 'gray',
    cursor: 'pointer',
    display: 'flex',
    justifyContent: 'center',
  },
  closeButton: {
    position: 'absolute',
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
}));

type NewListComponentTypes = {
  newsMarkdown: string;
};

const NewsListComponent = (props: NewListComponentTypes) => {
  const styles = useStyles();
  const [isExpand, setExpand] = useState<boolean>(false);
  const [headlines, setHeadlines] = useState<string[]>([]);
  const [showExpandMore] = useState<boolean>(true);

  useEffect(() => {
    const newsBullet = props.newsMarkdown.split('-');
    if (newsBullet.length > 1) {
      setHeadlines(newsBullet.slice(1, newsBullet.length));
      return;
    }
    setHeadlines(newsBullet);
  }, [props.newsMarkdown]);

  return (
    <>
      <ul>
        {headlines.length<=5
          ? headlines.map(headline => <NewsListItem headline={headline} />)
          : headlines
              .slice(0, 5)
              .map(headline => <NewsListItem headline={headline} />)}
      </ul>
      {headlines.length > 5 ? <Typography onClick={() => setExpand(!isExpand)} className={styles.root}> {isExpand ? "show less" : "read more"} </Typography> : ''}
      {showExpandMore && (
        <NewsDailog
          open={isExpand}
          headlines={headlines}
          closeDialog={() => setExpand(!isExpand)}
          classes={styles}
        />
      )}
    </>
  );
};

function NewsDailog(props: {
  open: boolean;
  closeDialog: () => void;
  classes: { [key in string]: any };
  headlines: string[];
}) {
  return (
    <Dialog open={props.open} onClose={props.closeDialog}>
      <DialogTitle>
        Latest Development in the Community
        <IconButton
          aria-label="close"
          className={props.classes.closeButton}
          onClick={props.closeDialog}
        >
          <CloseIcon />
        </IconButton>
      </DialogTitle>
      <DialogContent>
        <ul>
        {props.headlines.map(headline => (
          <NewsListItem headline={headline} />
        ))}
        </ul>
      </DialogContent>
    </Dialog>
  );
}

function NewsListItem(props: { headline: string }) {
  return (
    <li>
      <Typography>{props.headline}</Typography>
    </li>
  );
}

export default NewsListComponent;
