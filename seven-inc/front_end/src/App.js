import logo from './img/logo.png';
import './App.css';
import React, { Component } from 'react'

class MyNav extends Component {
  render() {
    return (
      <div className="nav">
        <img src={logo} width="150px;"></img>
        <p>Seven segurança veícular</p>
      </div>
    )
  }
}

class MyTab extends Component {
  render() {
    return (
      <button
        className="buttonTabs"
        onClick={() => { this.props.handleClick(this.props.funcao) }}
      >
        {this.props.nameButton}
      </button>
    );
  }
}

class MyForm extends Component {
  render(){
    var formulario = (this.props.formulario);
    if(formulario === "Buscar()"){
      return(
        <div>
          <p className="tituloForm">Lista:</p>
          <hr></hr>
          <button className="buttonForm" type="submit">Atualizar</button>
        </div>
      )
    }else if(formulario === "BuscarById()"){
      return(
        <form method="get">
          <p className="tituloForm">Buscar funcionário</p>
          <hr></hr>
          <label>Id do funcionário:<br/><input className="inputForm" type="text" name="name"></input></label><br/>
          <button className="buttonForm" type="submit">Buscar</button>
        </form>
      )
    }else if(formulario === "Inserir()"){
      return(
        <form method="post">
          <p className="tituloForm">Novo funcionário</p>
          <hr></hr>
          <label>Nome:<br/><input className="inputForm" type="text" name="name"></input></label><br/>
          <label>Data de nascimento:<br/><input className="inputForm" type="date" name="bornDate"></input></label><br/>
          <label>Salário:<br/><input className="inputForm" type="number" name="salary"></input></label><br/>
          <label>Posição:<br/><input className="inputForm" type="text" name="position"></input></label><br/>
          <button className="buttonForm" type="submit">Inserir</button>
        </form>
      )
    }else if(formulario === "Edit()"){
      return(
        <form method="put">
          <p className="tituloForm">Editar funcionário</p>
          <hr></hr>
          <label>Fucionário que será atualizado (ID):<br/><input className="inputForm" type="text" name="name"></input></label><br/>
          <hr></hr>
          <label>Novo nome:<br/><input className="inputForm" type="text" name="name"></input></label><br/>
          <label>Alterar data de nascimento:<br/><input className="inputForm" type="date" name="bornDate"></input></label><br/>
          <label>Novo salário:<br/><input className="inputForm" type="number" name="salary"></input></label><br/>
          <label>Nova posição:<br/><input className="inputForm" type="text" name="position"></input></label><br/>
          <button className="buttonForm" type="submit">Atualizar</button>
        </form>
      )
    }else if(formulario === "Delete()"){
      return(
        <form method="delete">
          <p className="tituloForm">Deletar funcionário</p>
          <hr></hr>
          <label>Funcionário que será excluido (ID):<br/><input className="inputForm" type="text" name="name"></input></label><br/>
          <button className="buttonForm" type="submit">Excluir</button>
        </form>
      )
    }
  }
}

class MyFooter extends Component {
  render() {
    return (
      <div className="footer">
        <p>Entre em contato conosco pelo e-mail: ksaulojr10@gmail.com</p>
        <p>ou</p>
        <p>Pelo número (64) 99300-7836</p>
      </div>
    )
  }
}

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      formChange: 'Buscar()',
    };
  }

  setForm = (formChange) => {
    this.setState({formChange});
  }

  render() {
    return (
      <div className="App">
        <MyNav />
        <div className="Tab">
          <MyTab nameButton="Buscar" handleClick={this.setForm} funcao="Buscar()" />
          <MyTab nameButton="Buscar por id" handleClick={this.setForm} funcao="BuscarById()" />
          <MyTab nameButton="Inserir" handleClick={this.setForm} funcao="Inserir()" />
          <MyTab nameButton="Editar" handleClick={this.setForm} funcao="Edit()" />
          <MyTab nameButton="Deletar" handleClick={this.setForm} funcao="Delete()" />
        </div>
        <div className="Form">
          <MyForm formulario={this.state.formChange}/>
        </div>
        <MyFooter />
      </div>
    );
  }
}

export default App;
