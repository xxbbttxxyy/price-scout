import { useState } from "react";

function App() {
  const [status, setStatus] = useState("");

  const checkBackend = async () => {
    const res = await fetch("https://price-scout-backend.onrender.com/");
    const data = await res.json();
    setStatus(data.message);
  };

  return (
    <div style={{ padding: "2rem" }}>
      <h1>Price Scout</h1>
      <button onClick={checkBackend}>
        Check Backend
      </button>
      <p>{status}</p>
    </div>
  );
}

export default App;
