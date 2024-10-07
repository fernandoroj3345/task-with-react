import React, { useState } from 'react';
import '../styles/styles.css'; // Aca importo la ruta del archivio CSS
import TodoForm from './TodoForm';
import TodoList from './TodoList';

function TodoBox() {
    const [todos, setTodos] = useState([]);
    const [formData, setFormData] = useState({
        proyecto: '',
        tipoTarea: '',
        personaAsignada: '',
        storyPoints: '',
        prioridad: '',
        fechaCreacion: '',
        resumen: ''
    });

    const addTodo = (e) => {
        e.preventDefault();
        if (Object.values(formData).some(field => field === '')) {
            alert("Todos los campos son obligatorios.");
            return;
        }
        
        setTodos([...todos, { id: Date.now(), ...formData }]);
        setFormData({
            proyecto: '',
            tipoTarea: '',
            personaAsignada: '',
            storyPoints: '',
            prioridad: '',
            fechaCreacion: '',
            resumen: ''
        });
    };

    const deleteTodo = (id) => {
        setTodos(todos.filter(todo => todo.id !== id));
    };

    return (
        <div className="container">
            <h1>Lista de Tareas Utilizando React</h1>
            <TodoForm formData={formData} setFormData={setFormData} addTodo={addTodo} />
            <TodoList todos={todos} deleteTodo={deleteTodo} />
        </div>
    );
}

export default TodoBox;





