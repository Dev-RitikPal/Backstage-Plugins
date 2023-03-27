import { IconButton, Paper, Typography } from '@material-ui/core';
import * as React from 'react';
type Props = {
  callBack: () => void;
  setCharacter: (searchText: string) => void;
  character: string;
  setSearchText: (searchText: string) => void;
};
export default function Characters({
  callBack,
  setCharacter,
  character,
  setSearchText,
}: Props) {
  var characters = ['All'];
  for (var k = 65; k < 91; k++) {
    var str = String.fromCharCode(k);
    characters.push(str);
  }
  const [selected, setSelected] = React.useState(character);
  React.useEffect(() => {
    if (character === '') {
      setSelected('All');
    } else {
      setSelected(character);
    }
  }, [character]);
  return (
    <Paper
      style={{
        padding: '10px 4px',
        marginBottom: '10px',
        height: '100%',
      }}
    >
      <div
        style={{
          display: 'flex',
          margin: '10px',
          alignItems: 'center',
          width: '100%',
          justifyContent: 'center',
          flexWrap: 'wrap',
        }}
      >
        {characters.map((item, index) => (
          <IconButton
            onClick={() => {
              if (item === 'All') {
                setCharacter('');
                setSelected('All');
              } else if (item !== 'All') {
                setCharacter(item);
                setSelected(item);
              }
              setSearchText("")
              callBack();
            }}
            key={index}
          >
            <Typography
              color="primary"
              variant="h6"
              style={
                selected == item
                  ? { fontSize: '23px', textDecoration: 'underline' }
                  : { fontSize: '20px' }
              }
            >
              {item}
            </Typography>
          </IconButton>
        ))}
      </div>
    </Paper>
  );
}
