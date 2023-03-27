import { Button } from '@material-ui/core';
import * as React from 'react';
import { UserContext } from '../ExampleComponent/ExampleComponent';

export const RenderValue = () => {
  const value = React.useContext(UserContext);
  const [data, setData] = React.useState(1);
  
  return (
    <>
      <UserContext.Provider value={data}>
        <h1> Counter value from anotehr component : {value} </h1>
      </UserContext.Provider>
      <Button onClick={() => setData(value * data)}>click me</Button>
    </>
  );
};
