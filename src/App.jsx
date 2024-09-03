import { useState } from 'react';

import Todo from './components/todo';

import TodoForm from './components/TodoForm';

import Search from './components/Search';

import Filter from './components/Filter'

import './App.css';

function App() {
  /*
    Define uma constante onde o 'todos' pode consultar os dados e o 'setTodos' pode definir dados, como se fosse a chamada de uma API
    useState() retorna um Array de objetos
  */
  const [todos, setTodos] = useState([
    /*
      Os dados passados para o useState neste caso são genéricos e serve para não dependermos de um banco de dados para desenvolver a aplicação base.
    */
    {
      id: 1,
      text: 'Fazer um curso de React',
      category: 'Estudo',
      isCompleted: false,
    },
    {
      id: 2,
      text: 'Fazer o jantar',
      category: 'Pessoal',
      isCompleted: false,
    },
    {
      id: 3,
      text: 'Terminar o relatório de vendas',
      category: 'Trabalho',
      isCompleted: false,
    },

  ])

  /* Define o valor a ser utlizado na pesquisa*/
  const [search, setSearch] = useState("")

  const [filter, setFilter] = useState("All")

  const [sort, setSort] = useState("asc")

  /* Define a função que vai manipular o argumento todos definido pelo useState, o qual recebe os valores text e category manipulados em TodoForm.jsx*/
  const addTodo = (text, category) => {

    /* Define o novo valor da variavel todos, sendo newTodos = todos + nova tarefa */
    const newTodos = [...todos, {
      id: Math.floor(Math.random() *1000),
      text,
      category,
      isCompleted: false,
    }]

    /* Utiliza a função setTodos do useState para atualizar o valor de todos que é atualizado pelo component Search.jsx*/
    setTodos(newTodos)
  }

  /* Define a função que vai manipular o argumento todos definido pelo useState, filtrando a variavel todos e removendo apenas o id solicitado através do Todo.jsx (o qual é responsável por montar o button)*/
  const removeTodo = (id) => {
    const newTodos = [...todos] // Define uma nova variável para todos
    const filteredTodos = newTodos.filter(todo => todo.id !== id ? todo : null); // Define a variavel filtrada
    setTodos(filteredTodos); // Utiliza o setTodos do useState para alterar a variavél todos
  }

  const completeTodo = (id) => {
    // Define uma nova variável para todos
    const newTodos = [...todos]

    // utiliza o map para percorrer todos os itens da variavel todo em forma de objeto com a arrow function
    // caso o id do objeto seja igual ao id passado como argumento, o valor isCompleted é invertido, (se TRUE = FALSE / se FALSE = TRUE)
    // caso contrário, retorna o objeto normalmente
    newTodos.map((todo) => todo.id === id ? todo.isCompleted = !todo.isCompleted : todo);

    // Utiliza o setTodos do useState para alterar a variável todos.
    setTodos(newTodos)
  }

  /* O ideal seria realizar estas ações a seguir seria utilizar o método de style-components, porém, será focado o mais básico para fins de estudo */
  /* Começa criando uma div com a className 'App', para retornar os valores obtidos pelo React */
  return <div className="app">

    {/* Cria um h1 para dar um título */}
    <h1>Lista de tarefas</h1>

    {/* A tag chama o componetne search e envia os dados informados no input para atualizar o valor search do useState */}
    <Search search={search} setSearch={setSearch}/>

    <Filter filter={filter} setFilter={setFilter} sort={sort} setSort={setSort}/>

    {/* Cria uma div com className 'todo-lista', para separar os itens retornados da lista*/}
    <div className="todo-list">

      {/*
        chama a variavel 'todos' definida na const e utiliza a função map junto de uma arrow function para rodar por todos os dados separando-os como objetos
        também cria duas divs para organizar os resultados sendo 'todo' para separar o objeto e 'content' para separar os itens presentes no objeto.
        Antes de ser utilizado o map, usamos a função filter com o parametro .includes(search) para selecionar apenas tarefas com o text de acordo com o search
      */}
      {todos
      .filter((todo) => filter === 'All' ? true : filter === 'Completed' ? todo.isCompleted : !todo.isCompleted)
      .filter((todo) => todo.text.toLowerCase().includes(search.toLowerCase()))
      .sort((a, b) => sort === "Asc" ? a.text.localeCompare(b.text) : b.text.localeCompare(a.text))
      .map((todo) => (
        <Todo key={todo.id} todo={todo} removeTodo={removeTodo} completeTodo={completeTodo}/>
      ))} {/* A tag chama o component Todo, a qual necessita de um caracter único para reconhecer os objetos, por isso
      passamos o parametro key com o valor todo.id, também é passado o argumento prop desejado 'todo' como o objeto definido pela função map 'todo',
      além de ser passado as funções que os buttons devem receber como argumento, removeTodo e completeTodo */}
    </div>

    {/* Chama a tag TodoForm e passa a função addTodo como argumento addTodo ao TodoForm.jsx*/}
    <TodoForm addTodo={addTodo} />
  </div>;
}

export default App;
