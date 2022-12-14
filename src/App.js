import React, { useState } from 'react';
import './App.css';

import DropDownComponent from './components/DropDownComponent';
import FormComponent from './components/FormComponent'
import LifecyleMethods from './components/class/Lifecycle'

function App() {
  const [currentForm, setCurrentForm] = useState("A");

  const setValueOfCurrentForm = (selectedForm) => {
    setCurrentForm(selectedForm);
  };

  return (
    <div className='app-container'>
      {/* <DropDownComponent setValueOfCurrentForm={setValueOfCurrentForm} />
      <FormComponent selectedForm={currentForm} /> */}
      <LifecyleMethods/>
    </div>
  );
}

export default App;
