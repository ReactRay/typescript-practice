import axios from 'axios';

type Todo = {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
};

const URL = 'https://jsonplaceholder.typicode.com/todos/3';

async function fetchData(url: string): Promise<void> {
  const res = await axios.get<Todo>(url);
  const data: Todo = res.data;

  const { id, userId, title } = data
  console.log(id, userId, title)
}

fetchData(URL);
