const scans = [
  { id: "1", apkName: "app-release.apk", riskScore: "15%", permissions: ["CAMERA", "STORAGE", "LOCATION"], threats: ["Quyền vị trí cao"], date: "2024-03-18" },
  { id: "2", apkName: "beta-app.apk", riskScore: "72%", permissions: ["SMS", "CALLS", "CONTACTS", "STORAGE"], threats: ["Quyền SMS", "Quyền cuộc gọi", "Đọc danh bạ"], date: "2024-03-15" },
  { id: "3", apkName: "test-app.apk", riskScore: "5%", permissions: ["INTERNET"], threats: [], date: "2024-03-10" },
];

export default function ScannerPage() {
  return (
    <div style={{ padding: "32px" }}>
      <div style={{ marginBottom: "32px" }}>
        <h1 style={{ fontSize: "28px", fontWeight: 700, marginBottom: "8px" }}>Kiểm tra mã độc ứng dụng</h1>
        <p style={{ color: "var(--text-secondary)" }}>Scan APK, phân tích permissions</p>
      </div>

      <div className="card" style={{ marginBottom: "24px", border: "2px dashed var(--border)", textAlign: "center", padding: "48px" }}>
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="var(--text-tertiary)" strokeWidth="2" style={{ margin: "0 auto 16px" }}>
          <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
          <polyline points="17 8 12 3 7 8" />
          <line x1="12" y1="3" x2="12" y2="15" />
        </svg>
        <p style={{ color: "var(--text-secondary)", marginBottom: "16px" }}>Kéo thả file APK vào đây hoặc click để chọn</p>
        <button className="btn btn-primary">Chọn file APK</button>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "16px" }}>
        {scans.map((scan) => (
          <div key={scan.id} className="card">
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "16px" }}>
              <div style={{ fontWeight: 600 }}>{scan.apkName}</div>
              <span className={`badge ${parseInt(scan.riskScore) > 50 ? "badge-danger" : "badge-success"}`}>
                {scan.riskScore} risk
              </span>
            </div>
            <div style={{ fontSize: "13px", color: "var(--text-secondary)", marginBottom: "8px" }}>Permissions: {scan.permissions.join(", ")}</div>
            {scan.threats.length > 0 && (
              <div style={{ fontSize: "13px", color: "var(--danger)" }}>Threats: {scan.threats.join(", ")}</div>
            )}
            <div style={{ fontSize: "12px", color: "var(--text-tertiary)", marginTop: "12px" }}>{scan.date}</div>
          </div>
        ))}
      </div>
    </div>
  );
}