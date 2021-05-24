import axios from "axios";

const read=()=>{

    const url='https://todos-go.herokuapp.com/api/todos';
    const promise=axios.get(url)
    return promise;
}

export default read;