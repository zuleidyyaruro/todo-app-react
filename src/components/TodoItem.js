import React from 'react'
import { useForm } from "react-hook-form";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit } from '@fortawesome/free-solid-svg-icons'

const TodoItem = ({ toDos, handleUpdate, setIsCompleted }) => {

    const { register, handleSubmit} = useForm();

    const onSubmit = data => {
        setIsCompleted({
            "task": toDos.task,
            "student": toDos.student,
            "isCompleted": data.completed,
        });

    }

    return (
        <form className="form-item" onSubmit={handleSubmit(onSubmit)}>
            {
                toDos.isCompleted ?
                    <>
                        <input type="checkbox" id="is-completed" checked  {...register("completed")} />
                        <button onClick={() => handleUpdate(toDos.id)}> <FontAwesomeIcon icon={faEdit} /></button>
                    </>

                    :
                    <>
                        <input type="checkbox" id="is-completed" {...register("completed")} />
                        <button onClick={() => handleUpdate(toDos.id)}> <FontAwesomeIcon icon={faEdit} /></button>
                    </>

            }

        </form>
    )
}

export default TodoItem
