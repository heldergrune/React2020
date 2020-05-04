import React from 'react';

function App ( props ) {

  const modificarNome = event => {
    console.log(event.target.value)
  }

  const criaComboBox = () => {
    const opcoes = [ "Fulano", "Cicrano" ]
    const comboBoxOpcoes = opcoes.map( opcoes => <option>{opcoes}</option>)

    return (
      <select>
          {comboBoxOpcoes}
      </select>
    )
  
  }
    const MeuComboBox = () => criaComboBox()
    return (
    <>
    <input className="texto-centralizado" type="text" value={props.nome} onChange={modificarNome} />
    <h1> Olá eu sou o {props.nome} e tenho {props.idade} de idade </h1>
    <MeuComboBox />
    </>
    )
  }


export default App;
