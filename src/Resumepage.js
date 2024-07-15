import React, { useEffect, useState } from 'react';
import { getDownloadURL, ref } from "firebase/storage";
import { storage } from './firebaseConfig';

const Resumepage = ({ shouldOpen }) => {
  const [resumeUrl, setResumeUrl] = useState(null);

  useEffect(() => {
    const resumeRef = ref(storage, 'gs://portfolio-299d7.appspot.com/Durga Sindhu Resume.pdf');

    getDownloadURL(resumeRef)
      .then((url) => {
        setResumeUrl(url);
        // If the 'shouldOpen' prop is true, then open the resume automatically.
        if (shouldOpen) {
          window.open(url, '_blank').focus();
        }
      })
      .catch((error) => {
        console.error("Error fetching resume:", error);
      });
  }, [shouldOpen]);

//   return (
//     <div>
//       {resumeUrl ? (
//        <button onClick={() => {
//         const uniqueUrl = `${resumeUrl}?timestamp=${new Date().getTime()}`;
// console.log("Trying to open:", uniqueUrl); // Add this line
// window.open(uniqueUrl, '_blank').focus();

//       }}>
//         Open Resume
//       </button>
      
//       ) : (
//         <p>Loading...</p>
//       )}
//     </div>
//   );
};

export default Resumepage;
