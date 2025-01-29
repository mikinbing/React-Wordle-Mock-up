import React from 'react';
import Navbar from './components/Navbar';
import Main from './components/Main';
import './App.css';
import InstructModal from './components/InstructModal';
import SettingsModal from './components/SettingsModal';

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

