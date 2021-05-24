import React from 'react'
import { useForm } from "react-hook-form";

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
        <form onSubmit={handleSubmit(onSubmit)}>
            {
                toDos.isCompleted ?
                    <>
                        <input type="checkbox" id="is-completed" checked  {...register("completed")} />
                        <button onClick={() => handleUpdate(toDos.id)}>Update</button>
                    </>

                    :
                    <>
                        <input type="checkbox" id="is-completed" {...register("completed")} />
                        <button onClick={() => handleUpdate(toDos.id)}>Update</button>
                    </>

            }

        </form>
    )
}

export default TodoItem
