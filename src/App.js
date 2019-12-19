import React,{useState} from 'react';
import './App.css';
import TLabel from './components/ui/TLabel'
import FormRow from './components/ui/FormRow'
import Column from './components/ui/Column'
import TEdit from './components/ui/TEdit'
import TComboBox from './components/ui/TComboBox'
import {useInput} from './hooks/useInputHook'
import {usePfj} from './hooks/usePfjHook'
import TOptions from './components/ui/TOptions'
function App() {

  const [{...nome},setNome] = useInput({upperCase:true})
  const [{...cpf},setCpf] = usePfj()
  const [{...sexo},setSexo] = useInput({})

  const divStyle = {
      width:"800px"
  }

  const onClick = (event) => {
    alert(JSON.stringify({nome:nome.value,cpf:cpf.value,sexo:sexo.value}))
    //setSexo('Masculino')
  }
  return (
    <div className="container-fluid">
      <div style={divStyle}>
      <FormRow>
        <Column cols={6}>
          <TLabel text={'Informe o nome'}/>
          <TEdit type="text" {...nome}/>
        </Column>
        <Column cols={3}>
          <TLabel text={'Informe o nome'}/>
          <TEdit type="text" maxLength={14} {...cpf}/>
        </Column>
        <Column cols={3}>
          <TLabel text={'Sexo'}/>
          <TComboBox {...sexo}>
              {['Masculino',''].map((option,idx) => <TOptions key={idx} content={option} value={option}/>)}
          </TComboBox>
        </Column>
      </FormRow>
      </div>
  <button type="button" onClick={onClick}>Click</button>
    </div>
  );
}
export default App;
