import { clickReducer } from './clickReducer';
import { combineReducers } from 'redux';

/*
* O combineReducers gera um agrupamento de todos os reducers no formato correto
* para que sirvam de entrada para a store
*
* Dento do combineReducers sempre mante nomes que fazem sentido
* Nunca devem ser duplicados
*/

export default combineReducers({
    clickReducer
});

