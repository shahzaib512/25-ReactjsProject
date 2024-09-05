import { useState } from "react";
import QRCode from "react-qr-code";

export default function QRCodeGenerator() {
  const [qrCode, setQrCode] = useState("");
  const [input, setInput] = useState("");

  function handleGenerateQrCode() {
    setQrCode(input);
    setInput('')
  }

  return (
    <div>
      <h1>QR Code Generator</h1>
      <div>
        <input
          style={{ fontSize: "1.5rem", padding: "10px", width: "500px" }}
          onChange={(e) => setInput(e.target.value)}
          type="text"
          name="qr-code-value"
          value={input}
          placeholder="Enter your value here"
        />
        <button
          style={{
            padding: "10px 20px",
            fontSize: "1.2rem",
            backgroundColor: "#4CAF50",
            color: "#fff",
            borderRadius: "5px",
            cursor: "pointer",
            transition: "all 0.3s ease-in-out",
            boxShadow: "0 2px 4px rgba(0,0,0,0.2)",
            ":hover": {
              transform: "scale(1.1)",
              boxShadow: "0 4px 8px rgba(0,0,0,0.3)",
            },
          }}
          disabled={input && input.trim() !== "" ? false : true}
          onClick={handleGenerateQrCode}
        >
          Generate
        </button>
      </div>
      <div>
        <QRCode id="qr-code-value" value={qrCode} size={650} bgColor="#fff" />
      </div>
    </div>
  );
}