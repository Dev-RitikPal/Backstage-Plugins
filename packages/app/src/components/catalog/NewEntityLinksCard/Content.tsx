/*
 * Copyright 2021 The Backstage Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { Link } from '@backstage/core-components';
import {
  makeStyles,
  List,
  ListItemIcon,
  ListItemText,
} from '@material-ui/core';
import React, { useState } from 'react';
import { useToolkit, Tool } from './Context';
import { LinkIcon } from './LinkIcon';

const useStyles = makeStyles(theme => ({
  toolkit: {
    display: 'flex',
    flexWrap: 'wrap',
    textAlign: 'center',
  },
  tool: {
    margin: theme.spacing(0.5, 1),
    transition: 'transform 0.15s ease-in-out',
    '&:hover': {
      transform: 'scale3d(1.05, 1.05, 1)',
    },
  },
  label: {
    marginTop: theme.spacing(1),
    fontSize: '0.9em',
    color: theme.palette.text.secondary,
    // new
    textOverflow: 'ellipsis',
    width: '64px',
    whiteSpace: 'nowrap',
    textAlign: 'center',
  },
  labelWithAnimation: {
    marginTop: theme.spacing(1),
    fontSize: '0.9em',
    color: theme.palette.text.secondary,
    // new
    width: '64px',
    position: 'absolute',
    height: '100%',
    textAlign: 'center',
    animationName: `$marqueeAnimation`,
    animationDuration: '5s',
    animationIterationCount: 'infinite',
    transform: 'translateX(100%)',
    whiteSpace: 'nowrap',
  },
  iconContainer: {
    width: '64px',
    height: '64px',
    borderRadius: '50px',
    justifyContent: 'center',
    alignItems: 'center',
    boxShadow: theme.shadows[1],
    backgroundColor: theme.palette.background.default,
  },
  icon: {
    width: '40px',
    height: '40px',
  },
  marqueeContainer: {
    width: '100%',
    height: 30,
    overflow: 'hidden',
    position: 'relative',
  },

  '@keyframes marqueeAnimation': {
    '0%': {
      transform: 'translateX(100%)',
    },
    '100%': {
      transform: 'translateX(-180%)',
    },
  },
}));

/**
 * Props for Toolkit content component {@link Content}.
 *
 * @public
 */
export type ToolkitContentProps = {
  tools: Tool[];
};

export const Content = (props: ToolkitContentProps) => {
  const [isHover, setIsHover] = useState(100000);
  const classes = useStyles();
  const toolkit = useToolkit();
  const tools = toolkit?.tools ?? props.tools;
  const hoverHandler = (action: string, idx: number) => {
    action === 'enter' ? setIsHover(idx) : setIsHover(100000);
  };
  return (
    <List className={classes.toolkit}>
      {tools.map((tool: Tool, idx: number) => (
        <Link
          key={idx}
          to={tool.url}
          className={classes.tool}
          onMouseEnter={() => hoverHandler('enter', idx)}
          onMouseLeave={() => hoverHandler('leave', idx)}
        >
          <ListItemIcon className={classes.iconContainer}>
            <LinkIcon icon={tool?.icon} />
          </ListItemIcon>
          <div className={classes.marqueeContainer}>
            <ListItemText
              secondaryTypographyProps={{
                className:
                  isHover === idx ? classes.labelWithAnimation : classes.label,
              }}
              secondary={tool.title}
            />
          </div>
        </Link>
      ))}
    </List>
  );
};
