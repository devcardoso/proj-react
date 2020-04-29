import React, { useState, useEffect, useRef } from 'react';
import './App.css';
import TLabel from './components/ui/TLabel'
import FormRow from './components/ui/FormRow'
import Column from './components/ui/Column'
import TEdit from './components/ui/TEdit'
import TComboBox from './components/ui/TComboBox'
import { useInput } from './hooks/useInputHook'
import { usePfj } from './hooks/usePfjHook'
import TMemo from './components/ui/TMemo'
import TCheckBox from './components/ui/TCheckBox'
import TRadioButton from './components/ui/TRadioButton'


function App() {

  const [{ ...nome }, setNome] = useInput({ upperCase: true })
  const [{ ...cpf }, setCpf] = usePfj()
  const [{ ...sexo }, setSexo] = useInput({value:"MASCULINO",content:"MASCULINO"})
  const [{ ...obs }, setObs] = useInput({ upperCase: true })
  const [sex,setSex] = useState('M')
  const [loading,isLoading] = useState(true)
  const el = useRef(null)
  const divStyle = {
    width: "800px"
  }

  const style = {
    center: {
      textAlign: 'center'
    },
    label:{
      margin:'10px',
      display:'block',
      color:'red'
    }
  }

  const onClick = (event) => {
    const model = {
      nome: nome.value,
      cpf: cpf.value,
      sexo: sexo.value,
      obs: obs.value
    }
    alert(JSON.stringify(model))
    //console.log()
  }
  const ufs = [
    //{ sexo: '' },
    {id:1,sexo:'MASCULINO'},  
    {id:2,sexo:'FEMININO'}
  ]
  const options = ufs.map(el => <option key={el.id} value={el.sexo}>{el.sexo}</option>)

  const dados = [
    { id: 1, nome: 'Henrique Santana', idade: 38 },
    { id: 2, nome: 'Nadyene Cardoso', idade: 35 }
  ]

  const headers = [
    { index: 0, title: 'Indentificador' },
    { index: 1, title: 'Nome' },
    { index: 2, title: 'Idade' }
  ]
  const load = loading == true ? <div className="loading"></div> :null

  useEffect(()=> {
    setTimeout(() => {
      isLoading(false)
    },7000);
  },[])

  return (
    <div className="container">
      <div>
        <FormRow>
          <Column cols={6}>
            <TLabel text={'Informe o nome'} />
            <TEdit
              type="text"
              id={'nome'}
              {...nome} />
          </Column>
          <Column cols={3}>
            <TLabel text={'Informe o CPF'} />
            <TEdit 
                  type="text" 
                  id="cpf" 
                  maxLength={14} 
                  style={style.center} {...cpf} />
          </Column>
          <Column cols={3}>
            <TLabel text={'Sexo'} />
            <TComboBox {...sexo} options={options} />
          </Column>

        </FormRow>
        <FormRow>
          <Column cols={12}>
            <TLabel text={'Observação'} />
            <TMemo {...obs} cols="5" />
          </Column>
        </FormRow>
        <FormRow>
            <TCheckBox name="isMail"  text="Receber e-mail?" /> 
            <TCheckBox name="isSms"   text="Receber SMS?" />
        </FormRow>
        <FormRow>
          <TRadioButton name="res" text="Sim"/>
          <TRadioButton name="res" text="Não"/>
         </FormRow>
         <FormRow>
           <div>
            <TRadioButton 
                  name="fm"  text="M" value="M"
                  checked={sex === 'M'}
                  onChange={(e)=> setSex(e.target.value)}/>
            <TRadioButton 
                  name="fm"  text="F" value="F" 
                  onChange={(e)=> setSex(e.target.value)}/>
           </div>
         </FormRow>
         <div className="loading-c">
         {load}
         </div>
      </div>
    </div>
  );
}
export default App;
