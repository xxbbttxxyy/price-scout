import { useState } from "react";

function App() {
  const [message, setMessage] = useState("");
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState(null);

  const testBackend = async () => {
    const response = await fetch("http://localhost:3001");
    const data = await response.json();
    setMessage(data.status);
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImage(file);

    if (file) {
      setPreview(URL.createObjectURL(file));
    }
  };

  return (
    <div style={{ padding: "2rem" }}>
      <h1>Price Scout</h1>

      <button onClick={testBackend}>Test Backend</button>
      {message && <p>{message}</p>}

      <hr />

      <h3>Upload a product image</h3>

      <input type="file" accept="image/*" onChange={handleImageChange} />

      {preview && (
        <div style={{ marginTop: "1rem" }}>
          <p>Preview:</p>
          <img
            src={preview}
            alt="Preview"
            style={{ maxWidth: "300px", borderRadius: "8px" }}
          />
        </div>
      )}
    </div>
  );
}

export default App;
