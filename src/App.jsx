import { useState } from "react";

function App() {
  const [query, setQuery] = useState("");
  const [submittedQuery, setSubmittedQuery] = useState("");

  return (
    <div style={{ padding: "2rem", maxWidth: "600px" }}>
      <h1>Price Scout</h1>

      <p>Search for a product:</p>

      <input
        type="text"
        placeholder="Enter product name"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        style={{ width: "100%", padding: "0.5rem" }}
      />

      <button
        style={{ marginTop: "1rem" }}
        onClick={() => setSubmittedQuery(query)}
      >
        Search
      </button>

      {submittedQuery && (
        <p style={{ marginTop: "1.5rem" }}>
          You searched for: <strong>{submittedQuery}</strong>
        </p>
      )}
    </div>
  );
}

export default App;
