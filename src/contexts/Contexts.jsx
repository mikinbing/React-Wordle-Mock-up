import React from 'react';

const Context = React.createContext();

const ContextProvider = ({ children }) => {
  const [showInstructions, setShowInstructions] = React.useState(true);
  const [showSettings, setShowSettings] = React.useState(false);
  const [anchor, setAnchor] = React.useState(null);
  const [isKeyboardDisabled, setIsKeyboardDisabled] = React.useState(false)
  
  return (
    <Context.Provider value={{ 
      showInstructions,
      setShowInstructions,
      showSettings,
      setShowSettings,
      anchor,
      setAnchor,
      isKeyboardDisabled,
      setIsKeyboardDisabled }}>
      {children}
    </Context.Provider>
  );
};

export { ContextProvider, Context };