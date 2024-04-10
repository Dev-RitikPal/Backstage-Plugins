import { IconButton, InputBase, Paper } from '@material-ui/core';
import * as React from 'react';
import SearchIcon from '@material-ui/icons/Search';
import removeQuery from '../../util/removeQueryString';
type Props = {
  callBack: () => void;
  searchText: string;
  setSearchText: (searchText: string) => void;
  setCharacter: (character: string) => void;
};
export default function SearchBar({
  searchText,
  callBack,
  setSearchText,
  setCharacter,
}: Props) {
  return (
    <Paper
      style={{
        padding: '10px 4px',
        marginRight: '10px',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        width: '100%',
      }}
    >
      <InputBase
        style={{ marginLeft: 1, flex: 1 }}
        placeholder="Search Glossary"
        onChange={e => {
          setCharacter('');
          setSearchText(e.target.value);
          callBack();
          removeQuery();
          var urlSplit = window?.location.href?.split('?');
          var stateObj = {
            Title: 'William Hill Global Glossary',
            Url: urlSplit[0] + '?search=' + encodeURI(e.target.value),
          };
          if (e.target.value)
            history?.pushState(stateObj, stateObj.Title, stateObj.Url);
        }}
        value={searchText}
      />
      <IconButton
        onClick={() => {
          setSearchText(searchText);
          callBack();
        }}
        style={{ padding: '10px' }}
      >
        <SearchIcon />
      </IconButton>
    </Paper>
  );
}
