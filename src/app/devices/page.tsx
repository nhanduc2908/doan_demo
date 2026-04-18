const devices = [
  { id: "1", name: "Samsung Galaxy S23", type: "Điện thoại", addedDate: "2024-01-15", lastUsed: "2024-03-18" },
  { id: "2", name: "iPhone 15 Pro", type: "Điện thoại", addedDate: "2024-02-01", lastUsed: "2024-03-17" },
  { id: "3", name: "MacBook Pro M3", type: "Laptop", addedDate: "2024-02-10", lastUsed: "2024-03-16" },
  { id: "4", name: "iPad Pro 12.9", type: "Tablet", addedDate: "2024-02-20", lastUsed: "2024-03-15" },
  { id: "5", name: "Xiaomi Mi 13", type: "Điện thoại", addedDate: "2024-03-01", lastUsed: "2024-03-14" },
];

export default function DevicesPage() {
  return (
    <div style={{ padding: "32px" }}>
      <div style={{ marginBottom: "32px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <div>
          <h1 style={{ fontSize: "28px", fontWeight: 700, marginBottom: "8px" }}>Thiết bị tin cậy</h1>
          <p style={{ color: "var(--text-secondary)" }}>Quản lý các thiết bị đã đăng ký</p>
        </div>
        <button className="btn btn-primary">+ Thêm thiết bị</button>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "16px" }}>
        {devices.map((device) => (
          <div key={device.id} className="card">
            <div style={{ display: "flex", alignItems: "center", gap: "16px", marginBottom: "16px" }}>
              <div style={{ width: 48, height: 48, borderRadius: "12px", background: "var(--surface-elevated)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" strokeWidth="2">
                  <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
                  <line x1="12" y1="18" x2="12" y2="18" />
                </svg>
              </div>
              <div>
                <div style={{ fontWeight: 600 }}>{device.name}</div>
                <div style={{ fontSize: "13px", color: "var(--text-tertiary)" }}>{device.type}</div>
              </div>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between", fontSize: "13px", color: "var(--text-secondary)", marginBottom: "16px" }}>
              <span>Thêm: {device.addedDate}</span>
              <span>Dùng: {device.lastUsed}</span>
            </div>
            <button className="btn btn-secondary" style={{ width: "100%" }}>Xóa thiết bị</button>
          </div>
        ))}
      </div>
    </div>
  );
}