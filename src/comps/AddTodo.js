import React from 'react';
import { useForm } from 'react-hook-form';
import { projectFirestore, timestamp } from '../firebase/config';

const AddTodo = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data, e) => {
    const formattedDate = new Date(data.deadline).toDateString();

    const newData = { ...data, date: timestamp(), deadline: formattedDate };

    projectFirestore.collection('todos').add(newData);
    e.target.reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className='formAddTodo'>
      <input
        type='text'
        placeholder='Task title'
        name='name'
        ref={register({ required: true })}
      />
      <input
        type='text'
        placeholder='Task owner'
        name='owner'
        ref={register({ required: true })}
      />
      <input
        type='date'
        placeholder='deadline'
        name='deadline'
        ref={register({ required: true })}
      />
      <select name='importance' ref={register}>
        <option value='danger'>High</option>
        <option value='warning'>Medium</option>
        <option value='info'>Low</option>
      </select>
      <input type='submit' value='Add Item' />
    </form>
  );
};

export default AddTodo;
