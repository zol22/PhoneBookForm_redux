import React from 'react';
import './App.css';
import InformationTable from './components/InformationTable';
import PhoneBookForm from './components/PhoneBookForm';


function App() {
  return (
    <div className="app">
      <PhoneBookForm />
      <InformationTable/>

    </div>
  );
}

export default App;
