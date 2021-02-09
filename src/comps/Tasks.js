import React from 'react';
import useFirestore from '../hooks/useFirestore';
import Loading from './Loading';
import TaskItem from './TaskItem';
import AddTask from './AddTask';

const Tasks = () => {
  const { docs, isLoading } = useFirestore('tasks');

  if (isLoading) {
    return <Loading />;
  }

  return (
    <article className='mb-lg'>
      <h2>Tasks</h2>
      <AddTask />
      <div className='tasks'>
        {docs &&
          docs.map((doc) => {
            return <TaskItem key={doc.id} doc={doc} />;
          })}
      </div>
    </article>
  );
};

export default Tasks;
