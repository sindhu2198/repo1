import React, { useEffect, useState } from 'react';
import { getDownloadURL, ref } from "firebase/storage";
import { storage } from './firebaseConfig';


const Resumepage = () => {
  const [resumeUrl, setResumeUrl] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    console.log("Fetching resume URL...");

    const resumeRef = ref(storage, 'gs://portfolio-299d7.appspot.com/Durga Sindhu_Animalla Resume.pdf');
  
    getDownloadURL(resumeRef)
      .then((url) => {
        console.log("Resume URL fetched:", url);
        setResumeUrl(url);
      })
      .catch((err) => {
        console.error("Error fetching resume:", err);
        setError(err.message || "Failed to fetch resume");
      });
  }, []);
  
  const handleOpenResume = () => {
    console.log("Button clicked. Opening resume...");
    if (resumeUrl) {
      window.open(resumeUrl, '_blank');
    } else {
      console.warn("Resume URL not available yet.");
    }
  };

  return (
    <div>
      {error && <p>Error: {error}</p>}
      
      {resumeUrl ? (
        <button onClick={handleOpenResume}>
          Open Resume
        </button>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Resumepage;
