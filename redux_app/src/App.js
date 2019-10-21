import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { clickHelloAction } from './actions/index';

class App extends Component{
    constructor(props) {
        super(props);

        this.state = {
            text: ''
        }
    }

    handleInputChange = (event) => {
        this.setState({
            text: event.target.value
        });
    };

    render() {
        const { text } = this.state;
        const { msg, clickHelloAction } = this.props;
        return (
            <div className="App">
                <input type="text" onChange={ this.handleInputChange }/>
                <button type="button" onClick={ () => clickHelloAction(text) }>Click to Dispatch Action</button>
                <h1>{ msg }</h1>
            </div>
        );
    }
}

/*
 * No momento em que um determinado evento acontecer a função mapStateToProps irá
 * capturar dados do state irá passar para a props, a partir deste momento a função
 * de render irá rodar novamente pq ouve uma atualização do state.
 *
 * Isso tudo se deve a função connect que faz ligaçao entre o componente (classe) e a
 * store (se existe state, por consequencia existem props).
 * Isso se dá pela função mapStateToProps, que serve para passar e receber dados.
 *
 * Tambem existe outra função, que por sua vez é responsável pela chamada das
 * actions creators, trata-se da função mapDispachToProps. É uma forma de capturar
 * eventos do componente e move-los para dentro de uma action.
 */

const mapStateToProps = (store) => {
    return {
        msg: store.clickReducer.msg
    }
};

const mapDispachToProps = (dispatch) => bindActionCreators({clickHelloAction}, dispatch);

export default connect(mapStateToProps, mapDispachToProps)(App);
