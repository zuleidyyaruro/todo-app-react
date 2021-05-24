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
            <form className="form-create" onSubmit={handleSubmit(onSubmit)}>

                <div>
                    <input placeholder="Write a task" id="task" {...register("task")} />
                </div>
                <div>
                    <input placeholder="Write your name" {...register("student")} />
                </div>

                <button>Save</button>
            </form>

        </div>
    )
}

export default CreateTodo
