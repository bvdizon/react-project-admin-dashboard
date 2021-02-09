import React from 'react';
import { projectFirestore } from '../firebase/config';
import useFirestore from '../hooks/useFirestore';
import AddTodo from './AddTodo';
import Loading from './Loading';
import './Todos.css';

const Todos = () => {
  const { docs: todos, isLoading } = useFirestore('todos');

  const handleDelete = (e, id, todo) => {
    e.preventDefault();
    if (window.confirm(`Delete task "${todo}"?`)) {
      projectFirestore.collection('todos').doc(id).delete();
    }
  };

  return (
    <article>
      <h2>To do's</h2>
      {isLoading && <Loading />}
      <AddTodo />
      <section className='todos'>
        {todos &&
          todos.map((todo) => {
            const { importance, id, name, owner, deadline } = todo;
            return (
              <div className={`alert alert-${importance}`} key={id}>
                <span
                  className='closebtn'
                  onClick={(e) => handleDelete(e, id, name)}>
                  &times;
                </span>
                <div className='taskInfo'>
                  <p>
                    <strong>Task: </strong>
                    {name}
                  </p>
                  <p>
                    <strong>Owner: </strong>
                    {owner}
                  </p>
                  <p>
                    <strong>Deadline: </strong>
                    {deadline}
                  </p>
                </div>
              </div>
            );
          })}
      </section>
    </article>
  );
};

export default Todos;
