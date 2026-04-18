const alerts = [
  { id: "1", type: "MITM Detected", severity: "high", description: "Man-in-the-middle attack detected on network", timestamp: "2024-03-18 14:32" },
  { id: "2", type: "Root Access", severity: "high", description: "Device appears to be rooted", timestamp: "2024-03-18 13:15" },
  { id: "3", type: "Proxy Detected", severity: "medium", description: "HTTP proxy detected in network path", timestamp: "2024-03-18 12:00" },
  { id: "4", type: "SSL Stripping", severity: "medium", description: "Potential SSL stripping attack", timestamp: "2024-03-18 10:45" },
];

export default function NetworkPage() {
  return (
    <div style={{ padding: "32px" }}>
      <div style={{ marginBottom: "32px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <div>
          <h1 style={{ fontSize: "28px", fontWeight: 700, marginBottom: "8px" }}>Giám sát kết nối mạng</h1>
          <p style={{ color: "var(--text-secondary)" }}>Cảnh báo MITM, root, proxy</p>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
          <span style={{ fontSize: "14px", color: "var(--text-secondary)" }}>Giám sát thời gian thực</span>
          <button className="btn btn-primary">Bật</button>
        </div>
      </div>

      <div className="card" style={{ marginBottom: "24px", display: "flex", alignItems: "center", gap: "24px" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
          <div style={{ width: 12, height: 12, borderRadius: "50%", background: "var(--success)", animation: "pulse 2s infinite" }} />
          <span style={{ fontWeight: 500 }}>Kết nối an toàn</span>
        </div>
        <div style={{ color: "var(--text-secondary)", fontSize: "14px" }}>TLS 1.3 • Không có proxy</div>
      </div>

      <div className="card">
        <h2 style={{ fontSize: "18px", fontWeight: 600, marginBottom: "16px" }}>Cảnh báo bảo mật</h2>
        {alerts.map((alert) => (
          <div key={alert.id} style={{ padding: "16px", borderBottom: "1px solid var(--border)", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <div>
              <div style={{ fontWeight: 600, marginBottom: "4px" }}>{alert.type}</div>
              <div style={{ fontSize: "13px", color: "var(--text-secondary)" }}>{alert.description}</div>
              <div style={{ fontSize: "12px", color: "var(--text-tertiary)", marginTop: "4px" }}>{alert.timestamp}</div>
            </div>
            <span className={`badge ${alert.severity === "high" ? "badge-danger" : "badge-warning"}`}>
              {alert.severity}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}