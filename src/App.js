import React,{useState} from 'react';
import './App.css';
import TLabel from './components/ui/TLabel'
import FormRow from './components/ui/FormRow'
import Column from './components/ui/Column'
import Row from './components/ui/Row'
import TEdit from './components/ui/TEdit'

function App() {
  const[nome,setNome] = useState('')
  return (
    <div className="container-fluid">
      <Row>
        <Column cols={9}>
          <TLabel text={'Informe o nome'}/>
          <TEdit model={nome}/>
        </Column>
      </Row>
  <span>{nome}</span>
    </div>
  );
}
export default App;
