import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { individualData, activities } from '../data';
import SearchResults from './SearchResults';

const SearchForm = () => {
  const { register, handleSubmit, watch, errors } = useForm();
  const [data, setData] = useState(null);

  const onSubmit = (data, e) => {
    setData(data);
    e.target.reset();
  };
  return (
    <>
      <h2>Search</h2>
      <form onSubmit={handleSubmit(onSubmit)} className='formSearch'>
        <input
          type='date'
          name='date'
          ref={register({ required: true })}
          placeholder='Start Date'
        />

        <select name='activity' ref={register({ required: true })}>
          {' '}
          <option value disabled>
            Choose activity type
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

        <input type='submit' value='Search Tasks' />
      </form>

      {data && <SearchResults {...data} />}
    </>
  );
};

export default SearchForm;
