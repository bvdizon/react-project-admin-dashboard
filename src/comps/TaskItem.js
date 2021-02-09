import React, { useState } from 'react';
import {
  FaPlus,
  FaMinus,
  FaUserAlt,
  FaRegCalendarAlt,
  FaTag,
  FaTrashAlt,
} from 'react-icons/fa';
import { projectFirestore } from '../firebase/config';

const TaskItem = ({ doc }) => {
  const [isShown, setIsShown] = useState(false);

  const { activity, date, id, notes, owner } = doc;
  const formatDate = date && date.toDate().toDateString();

  const handleDelete = (e, id) => {
    e.preventDefault();
    if (window.confirm(`Delete "${notes}"?`)) {
      projectFirestore.collection('tasks').doc(id).delete();
    }
  };

  return (
    <div className='task'>
      <header onClick={() => setIsShown(!isShown)}>
        <h4>
          {notes && notes.length > 35 && !isShown
            ? `${notes.substring(0, 32)} ...`
            : notes}
        </h4>
        <span>{isShown ? <FaMinus /> : <FaPlus />}</span>
      </header>
      {isShown && (
        <>
          <main>
            <p>
              <FaUserAlt /> {owner}
            </p>
            <p>
              <FaRegCalendarAlt /> {formatDate}
            </p>
            <p>
              <FaTag /> {activity}
            </p>
            <p onClick={(e) => handleDelete(e, id)}>
              <FaTrashAlt /> Delete
            </p>
          </main>
        </>
      )}
    </div>
  );
};

export default TaskItem;
