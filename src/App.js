import React from 'react';
import Navbar from './Navbar';
import Main from './Main';
import './App.css';
import InstructModal from './InstructModal';
import SettingsModal from './SettingsModal';

export default function App() {
  const [showInstructions, setShowInstructions] = React.useState(true);
  const [showSettings, setShowSettings] = React.useState(false);
  return (
    <>
      <Navbar 
        showInstructions={setShowInstructions}
        showSettings={setShowSettings} />
      <Main />
      {showInstructions && <InstructModal show={showInstructions} setShow={setShowInstructions}/>}
      {showSettings && <SettingsModal show={showSettings} setShow={setShowSettings}/>}
    </>
    
  )
}

