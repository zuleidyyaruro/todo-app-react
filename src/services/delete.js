
import axios from "axios";

const deleteToDo=(id)=>{
    const url=`https://todos-go.herokuapp.com/api/todos/${id}`;
    const promise=axios.delete(url)
    return promise;
}

export default deleteToDo;
