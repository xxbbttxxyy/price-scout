import { useState } from "react";

export default function App() {
  const [file, setFile] = useState(null);
  const [cost, setCost] = useState("");
  const [result, setResult] = useState(null);

  async function analyze() {
    if (!file) return alert("Upload an image");

    const formData = new FormData();
    formData.append("image", file);
    formData.append("cost", cost);

    const res = await fetch(
      "https://price-scout-backend.onrender.com/analyze",
      {
        method: "POST",
        body: formData,
      }
    );

    const data = await res.json();
    setResult(data);
  }

  return (
    <div style={{ padding: 30 }}>
      <h1>Price Scout</h1>

      <input
        type="file"
        onChange={(e) => setFile(e.target.files[0])}
      />

      <br /><br />

      <input
        type="number"
        placeholder="Your cost"
        value={cost}
        onChange={(e) => setCost(e.target.value)}
      />

      <br /><br />

      <button onClick={analyze}>Analyze</button>

      {result && (
        <div style={{ marginTop: 20 }}>
          <p><strong>Product:</strong> {result.product}</p>
          <p><strong>Market price:</strong> ${result.market_price}</p>
          <p><strong>Estimated profit:</strong> ${result.estimated_profit}</p>
        </div>
      )}
    </div>
  );
}
