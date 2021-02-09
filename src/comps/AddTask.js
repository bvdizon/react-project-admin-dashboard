import React from 'react';
import { useForm } from 'react-hook-form';
import { individualData, activities } from '../data';
import { projectFirestore, timestamp } from '../firebase/config';

const AddTask = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data, e) => {
    const newData = { ...data, date: timestamp() };
    projectFirestore.collection('tasks').add(newData);
    e.target.reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className='formAddTask'>
      <input
        type='text'
        placeholder='Notes'
        name='notes'
        ref={register({ required: true })}
      />

      <select name='activity' ref={register({ required: true })}>
        <option value disabled>
          Choose activity
        </option>
        {activities.map((item) => {
          return (
            <option value={item.activity} key={item.id}>
              {item.activity}
            </option>
          );
        })}
      </select>

      <select name='owner' ref={register({ required: true })}>
        <option value disabled>
          Choose owner
        </option>
        {individualData.map((item) => {
          return (
            <option value={item.member} key={item.id}>
              {item.member}
            </option>
          );
        })}
      </select>

      <input type='submit' value='Add Task' />
    </form>
  );
};

export default AddTask;
