import { useEffect, useState } from 'react';
import { projectFirestore } from '../firebase/config';

const useFirestore = (collection) => {
  const [docs, setDocs] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const unsub = projectFirestore
      .collection(collection)
      .limit(6)
      .orderBy('date', 'desc')
      .onSnapshot((snap) => {
        setIsLoading(true);
        let documents = [];
        snap.forEach((doc) => {
          documents.push({ ...doc.data(), id: doc.id });
        });
        setDocs(documents);
        setIsLoading(false);
      });

    return () => unsub();
  }, []);

  return { docs, isLoading };
};

export default useFirestore;
