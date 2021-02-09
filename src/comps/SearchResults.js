import React, { useEffect, useState } from 'react';
import { projectFirestore } from '../firebase/config';
import Loading from './Loading';
import './Table.css';

// the destructured arguments 'date' and 'activity' are coming
// from the search form to filter results
const SearchResults = ({ date, activity }) => {
  // state to store the pushed values
  const [results, setResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  // converting a valid date format for query/filter
  const searchDate = new Date(date);

  // slight variation of the useFirestore custom hook snippet
  useEffect(() => {
    setIsLoading(true);
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
    setIsLoading(false);

    return () => unsub();
  });

  return (
    <section className='searchResults'>
      {isLoading && <Loading />}
      {results.length > 0 ? (
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
            {results.map((item) => {
              const { date, activity, notes, owner, id } = item;
              const formatDate = date && date.toDate().toDateString();
              return (
                <tr key={id}>
                  <td>{formatDate}</td>
                  <td>{activity}</td>
                  <td>{notes}</td>
                  <td>{owner}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      ) : (
        <h3>No results. Try searching again.</h3>
      )}
    </section>
  );
};

export default SearchResults;
