
import axios from "axios";

const create=(data)=>{

    const url='https://todos-go.herokuapp.com/api/todos';
    const promise=axios.post(url, data);
    return promise;
}

export default create;