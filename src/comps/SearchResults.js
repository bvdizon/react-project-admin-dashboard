import React, { useEffect, useState } from 'react';
import { projectFirestore } from '../firebase/config';
import './Table.css';

const SearchResults = ({ date, activity }) => {
  const [results, setResults] = useState([]);

  const searchDate = new Date(date);

  useEffect(() => {
    const unsub = projectFirestore
      .collection('tasks')
      .where('activity', '==', activity)
      .where('date', '>=', searchDate)
      .orderBy('date', 'desc')
      .onSnapshot((snap) => {
        let documents = [];
        snap.forEach((doc) => {
          documents.push({ ...doc.data(), id: doc.id });
        });
        setResults(documents);
      });

    return () => unsub();
  });

  return (
    <section className='searchResults'>
      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Activity</th>
            <th>Note</th>
            <th>Owner</th>
          </tr>
        </thead>
        <tbody>
          {results.length > 0 &&
            results.map((item) => {
              const { date, activity, notes, owner } = item;
              const formatDate = date && date.toDate().toDateString();
              return (
                <tr>
                  <td>{formatDate}</td>
                  <td>{activity}</td>
                  <td>{notes}</td>
                  <td>{owner}</td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </section>
  );
};

export default SearchResults;
