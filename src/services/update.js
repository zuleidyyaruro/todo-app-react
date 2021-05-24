
import axios from "axios";

const update = (id, data) => {

    const url = `https://todos-go.herokuapp.com/api/todos/${id}`;
    const promise = axios.put(url, data);
    return promise;
}

export default update;