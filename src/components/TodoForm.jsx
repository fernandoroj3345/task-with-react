import React from 'react';
import styled from 'styled-components';

const FormContainer = styled.form`
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin-bottom: 20px;
`;

const Input = styled.input`
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
`;

const Select = styled.select`
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
`;

const Textarea = styled.textarea`
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
`;

const Button = styled.button`
    padding: 10px;
    background-color: #28a745;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;

    &:hover {
        background-color: #218838;
    }
`;

function TodoForm({ formData, setFormData, addTodo }) {
    return (
        <FormContainer onSubmit={addTodo}>
            <Input
                type="text"
                placeholder="Proyecto"
                value={formData.proyecto}
                onChange={(e) => setFormData({ ...formData, proyecto: e.target.value })}
                required
            />
            <Input
                type="text"
                placeholder="Tipo de tarea"
                value={formData.tipoTarea}
                onChange={(e) => setFormData({ ...formData, tipoTarea: e.target.value })}
                required
            />
            <Input
                type="text"
                placeholder="Persona asignada"
                value={formData.personaAsignada}
                onChange={(e) => setFormData({ ...formData, personaAsignada: e.target.value })}
                required
            />
            <Input
                type="number"
                placeholder="Story Points"
                value={formData.storyPoints}
                onChange={(e) => setFormData({ ...formData, storyPoints: e.target.value })}
                required
            />
            <Select
                value={formData.prioridad}
                onChange={(e) => setFormData({ ...formData, prioridad: e.target.value })}
                required
            >
                <option value="">Prioridad</option>
                <option value="alta">Alta</option>
                <option value="media">Media</option>
                <option value="baja">Baja</option>
            </Select>
            <Input
                type="date"
                value={formData.fechaCreacion}
                onChange={(e) => setFormData({ ...formData, fechaCreacion: e.target.value })}
                required
            />
            <Textarea
                placeholder="Resumen"
                value={formData.resumen}
                onChange={(e) => setFormData({ ...formData, resumen: e.target.value })}
                required
            />
            <Button type="submit">Agregar Tarea</Button>
        </FormContainer>
    );
}

export default TodoForm;
