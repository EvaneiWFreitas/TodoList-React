import { useState } from 'react';
import './App.css';

function App() {
  const [task, setTask] = useState("");
  const [todoList, setTodoList] = useState([]);

  // Função para adicionar tarefa
  const addTask = () => {
    if (task.trim() === "") return; // Evita tarefas vazias

    const newTodo = {
      id: Math.random(),
      text: task,
      completed: false,
    };

    setTodoList([...todoList, newTodo]);
    setTask(""); // Limpa o input
  };

  // Função para alternar status de concluída
  const toggleComplete = (id) => {
    const updatedList = todoList.map((item) => 
      item.id === id ? { ...item, completed: !item.completed } : item
    );
    setTodoList(updatedList);
  };

  // Função para remover tarefa
  const deleteTask = (id) => {
    setTodoList(todoList.filter((item) => item.id !== id));
  };

  return (
    <div className="container-fluid">
      <h1>Minhas Tarefas</h1>
      
      <div className="input-group">
        <input 
          type="text" 
          placeholder="O que precisa ser feito?" 
          value={task}
          onChange={(e) => setTask(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && addTask()}
        />
        <button onClick={addTask}>Adicionar</button>
      </div>

      <ul>
        {todoList.map((item) => (
          <li key={item.id} className={item.completed ? "completed" : ""}>
            <span onClick={() => toggleComplete(item.id)}>
              {item.text}
            </span>
            <button className="delete-btn" onClick={() => deleteTask(item.id)}>
              Excluir
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;