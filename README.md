# Redux com React.js

## Instalando redux
`npm install redux react-redux --save`

## Conceitos
#### `Action`
Informações a serem enviadas para Store, 
subdivide em "Action Creator" que tem função 
de ativar um reduces. Elas interagem diretamente com 
os eventos dos componentes.

Ao se criar uma `Action` é necessário criar seu 
respectivo `Action Creator`

#### `Reducer`
Função pura responsável por tratar as informações 
antes de serem enviadas a store. Para que uma informação
chege na store ela precisa necessáriamente passar por um
reducer.
    
#### `Store`
Container que centraliza o estado geral do aplicação,
imutável, não podendo ser alterado, apenas evoluído
através de ações.

### Fluxo
A `Action` é o ponto inicial onde tudo irá acontecer, ela
gerencia o que acontece no `Reducer` e consequentemente
será alterado na `Store`.

Portanto `Action` serão as informações que serão enviadas
para `Store`, mas, para que tal envio aconteça é preciso
que as informações passem pelo `Reducer`.

Assim a `Action` irá se ramificar em `Action Creators`, 
que por sua vez têm a função de invocar um `Reducer`,
passando para ele os dados da `Action`.

### Detalhes sobre implementações nos comentários do código