const { client } = require('./client');

// import client from './client';


const getTodo = async () => {
  const res = await client.get('https://jsonplaceholder.typicode.com/todos/1', { method: 'GET'});
  const data = await res.json();
  console.log(data);
}

getTodo();
