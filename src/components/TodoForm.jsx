import {useState} from 'react';

const TodoForm = ({addTodo}) => {

    /* Define duas constantes de useState para manipular os valores recebidos no input */
    const [value, setValue] = useState("");
    const [category, setCategory] = useState("");

    /* Define uma função a ser realiza quando a form é enviada, utilizando o argumento (e) como Event para*/
    const handleSubmit = (e) => {

        // O preventDefault permite que manipulemos o comportamento dos eventos
        e.preventDefault();

        // Caso não haja categoria e valor vamos parar a função.
        if(!value || !category) return;

        // Ao confirmar que value e category estão definidos é utilizado a função addTodo passando os valores value e category para serem adicionados à lista.
        addTodo(value, category);

        // Os valores do form são deixados em branco.
        setValue("");
        setCategory("");
    }

    /* Cria um form para adicionarmos outra tarefa */
    return <div className="todo-form">
        <h2>Criar tarefa:</h2>

        {/* Chama a função handleSubmit quando o form é enviado*/}
        <form onSubmit={handleSubmit}>

            {/* Define o valor do input como o argumento value do useState */}
            {/* Utiliza a função onChange para definir o envio como um evento (e) e utiliza o setValue do useState para definir o value do event como o valor passado no input */}
            <input value={value} type="text" placeholder='Digite o título' onChange={(e) => setValue(e.target.value)}/>

            {/* Utiliza a função onChange para definir o envio como um evento (e) e utiliza o setCategory do useState para definir o value do event como o valor passado no input */}
            <select value={category} onChange={(e) => setCategory(e.target.value)}>
                <option value="">Selecione uma categoira</option>
                <option value="trabalho">Trabalho</option>
                <option value="pessoal">Pessoal</option>
                <option value="estudo">Estudo</option>
            </select>
            <button type='submit'>Criar tarefa</button>
        </form>
    </div>
}

export default TodoForm;