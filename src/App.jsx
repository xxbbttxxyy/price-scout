import { useState } from "react";

function App() {
  const [message, setMessage] = useState("");

  const testBackend = async () => {
    const response = await fetch("http://localhost:3001");
    const data = await response.json();
    setMessage(data.status);
  };

  return (
    <div style={{ padding: "2rem" }}>
      <h1>Price Scout</h1>

      <button onClick={testBackend}>
        Test Backend Connection
      </button>

      {message && <p>Backend says: {message}</p>}
    </div>
  );
}

export default App;

