const policies = [
  { id: "1", name: "Mật khẩu mạnh", version: "2.1", status: "active", updatedAt: "2024-03-15" },
  { id: "2", name: "MFA bắt buộc", version: "1.5", status: "active", updatedAt: "2024-03-10" },
  { id: "3", name: "Session timeout", version: "1.2", status: "active", updatedAt: "2024-03-05" },
  { id: "4", name: "SSL Pinning", version: "1.0", status: "pending", updatedAt: "2024-03-18" },
];

export default function PolicyPage() {
  return (
    <div style={{ padding: "32px" }}>
      <div style={{ marginBottom: "32px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <div>
          <h1 style={{ fontSize: "28px", fontWeight: 700, marginBottom: "8px" }}>Chính sách bảo mật động</h1>
          <p style={{ color: "var(--text-secondary)" }}>Cập nhật từ server</p>
        </div>
        <button className="btn btn-secondary">Làm mới</button>
      </div>

      <div className="card" style={{ marginBottom: "24px" }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div>
            <div style={{ fontSize: "14px", color: "var(--text-secondary)", marginBottom: "4px" }}>Chính sách hiện tại</div>
            <div style={{ fontSize: "20px", fontWeight: 600 }}>v3.2.1</div>
          </div>
          <div style={{ textAlign: "right" }}>
            <div style={{ fontSize: "14px", color: "var(--text-secondary)", marginBottom: "4px" }}>Cập nhật lần cuối</div>
            <div style={{ fontSize: "14px" }}>2024-03-18 10:30</div>
          </div>
          <span className="badge badge-success">Đã đồng bộ</span>
        </div>
      </div>

      <div className="card">
        <h2 style={{ fontSize: "18px", fontWeight: 600, marginBottom: "16px" }}>Danh sách chính sách</h2>
        {policies.map((policy) => (
          <div key={policy.id} style={{ padding: "16px", borderBottom: "1px solid var(--border)", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <div>
              <div style={{ fontWeight: 600, marginBottom: "4px" }}>{policy.name}</div>
              <div style={{ fontSize: "13px", color: "var(--text-tertiary)" }}>v{policy.version} • {policy.updatedAt}</div>
            </div>
            <span className={`badge ${policy.status === "active" ? "badge-success" : "badge-warning"}`}>
              {policy.status === "active" ? "Hoạt động" : "Chờ duyệt"}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}