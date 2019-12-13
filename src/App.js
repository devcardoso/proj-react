import React from 'react';
import './App.css';
import TLabel from './components/ui/TLabel'

function App() {
  return (
    <div className="container-fluid">
      <div className="form-row">
        <div className="col-12 col-sm-3">
            <TLabel text={'Informe o nome'}/>
            <input type="text" className="form-control"/>
        </div>
      </div>
     
    </div>
  );
}
export default App;
