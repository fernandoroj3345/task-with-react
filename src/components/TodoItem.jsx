import React from 'react';
import styled from 'styled-components';

const ItemContainer = styled.li`
    background-color: #f8f9fa;
    margin-bottom: 10px;
    padding: 15px;
    border-radius: 5px;
    box-shadow: 0 2px 5px rgba(0,0,0,0.1);
`;

const DeleteButton = styled.button`
    background-color: #dc3545;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;

    &:hover {
        background-color: #c82333;
    }
`;

function TodoItem({ todo, deleteTodo }) {
    return (
        <ItemContainer>
            <h3>{todo.proyecto}</h3>
            <p><strong>Tipo de tarea:</strong> {todo.tipoTarea}</p>
            <p><strong>Asignado a:</strong> {todo.personaAsignada}</p>
            <p><strong>Story Points:</strong> {todo.storyPoints}</p>
            <p><strong>Prioridad:</strong> {todo.prioridad}</p>
            <p><strong>Fecha de creación:</strong> {todo.fechaCreacion}</p>
            <p><strong>Resumen:</strong> {todo.resumen}</p>
            <DeleteButton onClick={() => deleteTodo(todo.id)}>Eliminar</DeleteButton>
        </ItemContainer>
    );
}

export default TodoItem;

















