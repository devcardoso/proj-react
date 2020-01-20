import React,{useState,useEffect,useRef} from 'react';
import './App.css';
import TLabel from './components/ui/TLabel'
import FormRow from './components/ui/FormRow'
import Column from './components/ui/Column'
import TEdit from './components/ui/TEdit'
import TComboBox from './components/ui/TComboBox'
import {useInput} from './hooks/useInputHook'
import {usePfj} from './hooks/usePfjHook'
import TGrid from './components/ui/TGrid'
import TMemo from './components/ui/TMemo'
function App() {

  const [{...nome},setNome] = useInput({upperCase:true})
  const [{...cpf},setCpf] = usePfj()
  const [{...sexo},setSexo] = useInput({})
  const [{...obs},setObs] = useInput({upperCase:true})
  //const [disabled,setDisabled] = useState(false)
  const el = useRef(null)
  const divStyle = {
      width:"800px"
  }

  const style = {
    center:{
      textAlign:'center'
    }
  }

  const onClick = (event) => {
    const model = {
      nome:nome.value,
      cpf:cpf.value,
      sexo:sexo.value,
      obs:obs.value
    }
    alert(JSON.stringify(model))
    //console.log()
  }
  const ufs = [
    {sexo:''},
    {sexo:'MASCULINO'},
    {sexo:'FEMININO'}
  ]
  const options = ufs.map((uf,idx) => ({key:idx,value:uf.sexo,content:uf.sexo}))

  const dados = [
    {id:1,nome:'Henrique Santana',idade:38},
    {id:2,nome:'Nadyene Cardoso',idade:35}
  ]

  const headers = [
    {index:0,title:'Indentificador'},
    {index:1,title:'Nome'},
    {index:2,title:'Idade'}
  ]
  return (
    <div className="container-fluid">
      <div style={divStyle}>
      <FormRow>
        <Column cols={6}>
          <TLabel text={'Informe o nome'}/>
          <TEdit 
                type="text" 
                id={'nome'}
                {...nome}/>
        </Column>
        <Column cols={3}>
          <TLabel text={'Informe o nome'}/>
          <TEdit type="text" id="cpf" maxLength={14} style={style.center} {...cpf}/>
        </Column>
        <Column cols={3}>
          <TLabel text={'Sexo'}/>
          <TComboBox {...sexo} options ={options}/>
        </Column>

      </FormRow>
      <FormRow>
        <Column cols={6}>
        <TLabel text={'Observação'}/>
          <TMemo {...obs} cols="5"/>
        </Column>
      </FormRow>
      </div>
      <button type="button" onClick={onClick}>Click</button>
      <br/>
      <TGrid dataSet={dados} headers={headers}/>
      <br/>
    </div>
  );
}
export default App;
