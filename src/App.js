import React,{useState} from 'react';
import './App.css';
import TLabel from './components/ui/TLabel'
import FormRow from './components/ui/FormRow'
import Column from './components/ui/Column'
import Row from './components/ui/Row'
import TEdit from './components/ui/TEdit'
import {useInput} from './hooks/useInputHook'

function App() {

  const nome = useInput({upperCase:true})
  return (
    <div className="container-fluid">
      <Row>
        <Column cols={5}>
          <TLabel text={'Informe o nome'}/>
          <TEdit 
                type="text" {...nome}/>
        </Column>
      </Row>
  <span>{nome.value}</span>
    </div>
  );
}
export default App;
