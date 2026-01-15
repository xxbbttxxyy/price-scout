function App() {
  return (
    <div style={{
      minHeight: "100vh",
      backgroundColor: "#0b0b0f",
      color: "white",
      padding: "32px",
      fontFamily: "Arial, sans-serif"
    }}>

      <h1 style={{ fontSize: "32px", marginBottom: "24px" }}>
        Price Scout
      </h1>

      <div style={{
        background: "#15151d",
        padding: "24px",
        borderRadius: "12px",
        marginBottom: "24px",
        display: "flex",
        justifyContent: "space-between"
      }}>
        <div>
          <h2>Apple AirPods Pro (2nd Generation)</h2>
          <p style={{ color: "#aaa" }}>Electronics · Apple</p>
          <p>★★★★★ 4.8</p>
        </div>

        <div style={{
          background: "#1f1f2a",
          padding: "16px",
          borderRadius: "8px"
        }}>
          <p>Your Cost</p>
          <h2>$150</h2>
        </div>
      </div>

      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(4, 1fr)",
        gap: "16px",
        marginBottom: "32px"
      }}>
        <Stat title="Best Profit" value="+$99.99" highlight />
        <Stat title="Avg Profit" value="+$84.99" />
        <Stat title="ROI" value="+67%" />
        <Stat title="Best Sale Price" value="$249.99" />
      </div>

      <Price store="Amazon" price="$249.99" profit="+$99.99" />
      <Price store="Target" price="$239.99" profit="+$89.99" />
      <Price store="Walmart" price="$234.99" profit="+$84.99" />

    </div>
  );
}

function Stat({ title, value, highlight }) {
  return (
    <div style={{
      background: "#15151d",
      padding: "16px",
      borderRadius: "12px",
      border: highlight ? "2px solid #22c55e" : "none"
    }}>
      <p style={{ color: "#aaa" }}>{title}</p>
      <h2 style={{ color: highlight ? "#22c55e" : "white" }}>
        {value}
      </h2>
    </div>
  );
}

function Price({ store, price, profit }) {
  return (
    <div style={{
      background: "#15151d",
      padding: "20px",
      borderRadius: "12px",
      marginBottom: "12px",
      display: "flex",
      justifyContent: "space-between"
    }}>
      <div>
        <h3>{store}</h3>
        <p style={{ color: "#aaa" }}>Your Profit</p>
      </div>
      <div style={{ textAlign: "right" }}>
        <h3>{price}</h3>
        <p style={{ color: "#22c55e" }}>{profit}</p>
      </div>
    </div>
  );
}

export default App;
