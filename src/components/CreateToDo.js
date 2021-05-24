import React from 'react'
import { useForm } from "react-hook-form";

const CreateTodo = ({ setToDoCreate }) => {
    const { register, handleSubmit, reset } = useForm();

    const onSubmit = data => {
        setToDoCreate(data);
        reset()
    }

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>

                <label htmlFor="task">Task: </label>
                <input id="task" {...register("task")} />
                <label htmlFor="student">Estudent: </label>
                <input {...register("student")} />

                <button>Save</button>
            </form>

        </div>
    )
}

export default CreateTodo
