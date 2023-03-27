import React, { createContext } from 'react';

export type Tool = {
  title: string;
  url: string;
  icon: string;
};

type ToolkitContextValue = {
  tools: Tool[];
};

const Context = createContext<ToolkitContextValue | undefined>(undefined);

export const ContextProvider = (props: {
  children: JSX.Element;
  tools: Tool[];
}) => {
  const { children, tools } = props;

  const [toolsValue, _setTools] = React.useState(tools);

  const value: ToolkitContextValue = {
    tools: toolsValue,
  };

  return <Context.Provider value={value}>{children}</Context.Provider>;
};

export const useToolkit = () => {
  const value = React.useContext(Context);
  return value;
};

export default Context;
