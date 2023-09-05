

import React, { useEffect, useState } from 'react';
import { getDownloadURL, ref } from "firebase/storage";
import { storage } from './firebaseConfig';

const Resumepage = ({ shouldOpen }) => {
  const [resumeUrl, setResumeUrl] = useState(null);

  useEffect(() => {
    const resumeRef = ref(storage, 'gs://portfolio-299d7.appspot.com/Durga Sindhu_Resume_IUB (3).pdf');

    getDownloadURL(resumeRef)
      .then((url) => {
        setResumeUrl(url);
        if (shouldOpen) {
          window.open(url, '_blank');
        }
      })
      .catch((error) => {
        console.error("Error fetching resume:", error);
      });
  }, [shouldOpen]);

  return (
    <div>
      {resumeUrl ? (
        <button onClick={() => window.open(resumeUrl, '_blank')}>
          Open Resume
        </button>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Resumepage;
