"use client";

import { useState } from "react";

const scanTypes = [
  { id: "xss", label: "XSS", description: "Cross-Site Scripting" },
  { id: "sqli", label: "SQLi", description: "SQL Injection" },
  { id: "headers", label: "Headers", description: "Security Headers" },
  { id: "api", label: "API", description: "API Security" },
];

const vulnerabilities = [
  { id: "1", type: "XSS", severity: "high", description: "Reflected XSS in search parameter", location: "/search?q=test" },
  { id: "2", type: "SQLi", severity: "high", description: "SQL Injection in login form", location: "/api/login" },
  { id: "3", type: "Headers", severity: "medium", description: "Missing X-Frame-Options header", location: "Server response" },
];

export default function WebScannerPage() {
  const [url, setUrl] = useState("");
  const [selectedTypes, setSelectedTypes] = useState<string[]>(["xss", "sqli", "headers", "api"]);
  const [isScanning, setIsScanning] = useState(false);

  const toggleType = (type: string) => {
    setSelectedTypes((prev) =>
      prev.includes(type) ? prev.filter((t) => t !== type) : [...prev, type]
    );
  };

  const startScan = () => {
    if (!url) return;
    setIsScanning(true);
    setTimeout(() => setIsScanning(false), 2000);
  };

  return (
    <div style={{ padding: "32px" }}>
      <div style={{ marginBottom: "32px" }}>
        <h1 style={{ fontSize: "28px", fontWeight: 700, marginBottom: "8px" }}>Web Security Scanner</h1>
        <p style={{ color: "var(--text-secondary)" }}>Quét lỗ hổng website (XSS, SQLi, Header, API)</p>
      </div>

      <div className="card" style={{ marginBottom: "24px" }}>
        <input
          type="text"
          className="input"
          placeholder="Nhập URL website cần quét..."
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          style={{ marginBottom: "16px" }}
        />

        <div style={{ display: "flex", gap: "12px", marginBottom: "16px" }}>
          {scanTypes.map((type) => (
            <button
              key={type.id}
              onClick={() => toggleType(type.id)}
              style={{
                padding: "8px 16px",
                borderRadius: "8px",
                border: "1px solid",
                borderColor: selectedTypes.includes(type.id) ? "var(--primary)" : "var(--border)",
                background: selectedTypes.includes(type.id) ? "rgba(0,212,170,0.1)" : "transparent",
                color: selectedTypes.includes(type.id) ? "var(--primary)" : "var(--text-secondary)",
                cursor: "pointer",
              }}
            >
              {type.label}
            </button>
          ))}
        </div>

        <button
          className="btn btn-primary"
          onClick={startScan}
          disabled={!url || isScanning}
        >
          {isScanning ? "Đang quét..." : "Bắt đầu quét"}
        </button>
      </div>

      {isScanning && (
        <div className="card" style={{ textAlign: "center", padding: "48px", marginBottom: "24px" }}>
          <div style={{ width: 48, height: 48, border: "3px solid var(--border)", borderTopColor: "var(--primary)", borderRadius: "50%", animation: "spin 1s linear infinite", margin: "0 auto 16px" }} />
          <p style={{ color: "var(--text-secondary)" }}>Đang quét website...</p>
        </div>
      )}

      {!isScanning && vulnerabilities.length > 0 && (
        <div className="card">
          <h2 style={{ fontSize: "18px", fontWeight: 600, marginBottom: "16px" }}>Kết quả quét ({vulnerabilities.length} lỗ hổng)</h2>
          {vulnerabilities.map((vuln) => (
            <div key={vuln.id} style={{ padding: "16px", borderBottom: "1px solid var(--border)" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "8px" }}>
                <span style={{ fontWeight: 600 }}>{vuln.type}</span>
                <span className={`badge ${vuln.severity === "high" ? "badge-danger" : "badge-warning"}`}>
                  {vuln.severity}
                </span>
              </div>
              <div style={{ fontSize: "14px", color: "var(--text-secondary)", marginBottom: "4px" }}>{vuln.description}</div>
              <div style={{ fontSize: "12px", color: "var(--text-tertiary)" }}>{vuln.location}</div>
            </div>
          ))}
          <button className="btn btn-secondary" style={{ width: "100%", marginTop: "16px" }}>Xuất báo cáo</button>
        </div>
      )}
    </div>
  );
}