import React, { useEffect } from 'react';
import { Grid } from '@material-ui/core';
import { GlossaryContent } from './GlossaryContent';
import { AddButton } from './AddGlossaryItem';
import { Content, Header, Page } from '@backstage/core-components';
import SearchBar from '../Common/SearchBar';
import Characters from '../Common/Characters';
import { FilterGroups } from '../Common/FilterGroups';
import removeQuery from '../../util/removeQueryString';

export const GlossaryPage = () => {
  const [key, setKey] = React.useState(1);
  const random = () => {
    setKey(Math.random());
    removeQuery();
  };
  const randomWithoutQueryRemoval = () => {
    setKey(Math.random());
  };
  const [searchText, setSearchText] = React.useState('');
  const [character, setCharacter] = React.useState('');
  const [filter, setFilter] = React.useState('');
  useEffect(() => {
    const queryParams = new URLSearchParams(window?.location.search);
    const searchText = queryParams.get('search') || '';
    if (searchText) {
      setSearchText(searchText);
      randomWithoutQueryRemoval();
    }
  }, []);
  //pagination add

  return (
    <Page themeId="home">
      <Header title="William Hill Community Glossary" />
      <Content>
        <Grid
          md={10}
          container
          justifyContent={'flex-start'}
          alignItems="center"
          direction="column"
          item
        >
          <Grid
            style={{ minWidth: '100%' }}
            justifyContent={'center'}
            alignItems="center"
            item
          >
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                width: '100%',
                alignItems: 'center',
              }}
            >
              <SearchBar
                callBack={random}
                setSearchText={setSearchText}
                searchText={searchText}
                setCharacter={setCharacter}
              ></SearchBar>
              <AddButton
                setCharacter={setCharacter}
                setSearchText={setSearchText}
                callBack={random}
              />
            </div>
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                width: '100%',
                alignItems: 'flex-start',
              }}
            >
              <FilterGroups
                setFilter={setFilter}
                filter={filter}
                callBack={random}
              />

              <Characters
                setSearchText={setSearchText}
                callBack={random}
                character={character}
                setCharacter={setCharacter}
              />
            </div>
            <GlossaryContent
              searchText={`${searchText}`}
              callBack={random}
              key={key}
              character={character}
              filter={filter}
            />
          </Grid>
        </Grid>
      </Content>
    </Page>
  );
};
