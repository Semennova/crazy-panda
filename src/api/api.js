import * as axios from 'axios';


export const getTodos = () => {
    return axios.get('https://jsonplaceholder.typicode.com/todos')
}