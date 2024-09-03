import React from 'react';

/* Ao criar um item do tipo component podemos utilizar os argumentos do objeto para passar props, assim podendo acessar os valores em nossa página principal todo = ({props}) =>...*/

const Todo = ({todo, removeTodo, completeTodo}) => {
    return(
        <div className="todo" style={{textDecoration: todo.isCompleted ? "line-through" : ""}}>
          <div className="content">
            <p>{todo.text}</p> {/* Utiliza o objeto 'todo' definido na arrow function para acessar o valor text */}
            <p className="category">({todo.category})</p>
          </div>

          {/* Cria uma div para apresentar os botões */}
          <div>
            <button className={todo.isCompleted ? 'complete-c' : 'complete'} onClick={() => completeTodo(todo.id)}>Completar</button>
            <button className='remove' onClick={() => removeTodo(todo.id)}>X</button>
          </div>
        </div>
    )
}

export default Todo