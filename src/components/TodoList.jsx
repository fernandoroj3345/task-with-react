import React from 'react';
import TodoItem from './TodoItem';
import styled from 'styled-components';

const ListContainer = styled.ul`
    list-style-type: none;
    padding: 0;
`;

function TodoList({ todos, deleteTodo }) {
    return (
        <ListContainer>
            {todos.map(todo => (
                <TodoItem key={todo.id} todo={todo} deleteTodo={deleteTodo} />
            ))}
        </ListContainer>
    );
}

export default TodoList;

