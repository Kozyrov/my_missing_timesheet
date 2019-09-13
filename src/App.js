import React from 'react';
import TimeSheetContainer from './Containers/TimeSheetContainer';
import './App.css';

const App = props => {
  console.log(props);
  return (
    <div className="app-container">
      <TimeSheetContainer />
    </div>
  );
}

export default App;
