function App() {
  return (
    <div style={{ padding: "2rem", maxWidth: "600px" }}>
      <h1>Price Scout</h1>

      <p>Search for a product:</p>

      <input
        type="text"
        placeholder="Enter product name"
        style={{ width: "100%", padding: "0.5rem" }}
      />

      <button style={{ marginTop: "1rem" }}>
        Search
      </button>
    </div>
  );
}

export default App;
