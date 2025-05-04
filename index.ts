import axios from 'axios';
type Todo = {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
};
const URL = 'https://jsonplaceholder.typicode.com/todos/3';
async function fetchData(url: string): Promise<Todo> {
  const res = await axios.get(url)
  const data = res.data as Todo
  return data
}
const data = fetchData(URL).then(dat => console.log(dat))


