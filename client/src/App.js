import React, { useEffect, useState } from 'react';

function App() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    // This fetch call will fail due to a CORS error
    fetch('http://localhost:5000/api/data')
      .then(res => res.json())
      .then(data => setMessage(data.message))
      .catch(err => console.error("Fetch error:", err));
  }, []);

  return (
    <div>
      <h1>MERN App Frontend</h1>
      <p>Message from backend: {message}</p>
    </div>
  );
}

export default App;
