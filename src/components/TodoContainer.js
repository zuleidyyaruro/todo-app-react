import React, { useEffect, useState } from 'react'
import create from '../services/create';
import deleteToDo from '../services/delete';
import read from '../services/read';
import update from '../services/update';
import TodoItem from './TodoItem';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

const TodoContainer = ({ toDoCreate }) => {

    const [data, setData] = useState([]);
    const [idDelete, setIdDelete] = useState("");
    const [idUpdate, setIdUpdate] = useState("");
    const [isCompleted, setIsCompleted] = useState({});

    // useEffect Read
    useEffect(() => {
        read().then(response => setData(response.data.todos))
    }, []);

    // useEffect Delete
    useEffect(() => {
        deleteToDo(idDelete).then(() => {
            setData(
                data.filter(value => value.id !== idDelete)
            )
        })
    }, [idDelete]);

    // useEffect create
    useEffect(() => {
        create(toDoCreate).then((response) => {
            setData([...data, response.data])
        })
    }, [toDoCreate]);

    // useEffect Update
    useEffect(() => {
        update(idUpdate, isCompleted).then(() => {
            setData(
                [...data.filter(value => value.id !== isCompleted.id)]
            )
        })

    }, [isCompleted]);

    const handleDelete = (id) => {
        setIdDelete(id)
    };

    const handleUpdate = (id) => {
        setIdUpdate(id)
    };

    const listTodos = data.map(element => {
        return (
            <div key={element.id} className="container-list">
                <div className="tasks">
                    <TodoItem
                        toDos={element}
                        handleUpdate={handleUpdate}
                        setIdUpdate={setIdUpdate}
                        setIsCompleted={setIsCompleted}
                    />
                    <span>{element.task}</span> -
                    <span>{element.student}</span>
                </div>

                <div>
                    <button
                        onClick={() => handleDelete(element.id)}>
                        <FontAwesomeIcon icon={faTrash} />
                    </button>
                </div>

            </div>
        )
    });

    return (
        <div className="container-todo">
            {
                listTodos
            }
        </div>
    )
}

export default TodoContainer;
