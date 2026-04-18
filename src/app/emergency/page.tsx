export default function EmergencyPage() {
  return (
    <div style={{ padding: "32px" }}>
      <div style={{ marginBottom: "32px" }}>
        <h1 style={{ fontSize: "28px", fontWeight: 700, marginBottom: "8px" }}>Hỗ trợ khẩn cấp</h1>
        <p style={{ color: "var(--text-secondary)" }}>Xóa dữ liệu từ xa, khóa app</p>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "24px" }}>
        <div className="card" style={{ textAlign: "center", padding: "48px" }}>
          <div style={{ width: 64, height: 64, borderRadius: "50%", background: "rgba(239, 68, 68, 0.2)", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 24px" }}>
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="var(--danger)" strokeWidth="2">
              <path d="M3 6h18M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
            </svg>
          </div>
          <h2 style={{ fontSize: "20px", fontWeight: 600, marginBottom: "12px" }}>Xóa dữ liệu từ xa</h2>
          <p style={{ color: "var(--text-secondary)", marginBottom: "24px" }}>Xóa tất cả dữ liệu trên thiết bị từ xa</p>
          <button className="btn btn-danger" style={{ width: "100%" }}>Xóa ngay</button>
        </div>

        <div className="card" style={{ textAlign: "center", padding: "48px" }}>
          <div style={{ width: 64, height: 64, borderRadius: "50%", background: "rgba(245, 158, 11, 0.2)", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 24px" }}>
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="var(--warning)" strokeWidth="2">
              <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
              <path d="M7 11V7a5 5 0 0 1 10 0v4" />
            </svg>
          </div>
          <h2 style={{ fontSize: "20px", fontWeight: 600, marginBottom: "12px" }}>Khóa ứng dụng</h2>
          <p style={{ color: "var(--text-secondary)", marginBottom: "24px" }}>Khóa ngay lập tức ứng dụng SecureGuard</p>
          <button className="btn btn-warning" style={{ width: "100%", background: "var(--warning)", color: "var(--bg-dark)" }}>Khóa app</button>
        </div>

        <div className="card" style={{ textAlign: "center", padding: "48px" }}>
          <div style={{ width: 64, height: 64, borderRadius: "50%", background: "rgba(124, 58, 237, 0.2)", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 24px" }}>
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="var(--secondary)" strokeWidth="2">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
            </svg>
          </div>
          <h2 style={{ fontSize: "20px", fontWeight: 600, marginBottom: "12px" }}>Liên hệ hỗ trợ</h2>
          <p style={{ color: "var(--text-secondary)", marginBottom: "24px" }}>Gọi đường dây nóng bảo mật</p>
          <button className="btn btn-secondary" style={{ width: "100%" }}>Gọi ngay</button>
        </div>

        <div className="card" style={{ textAlign: "center", padding: "48px" }}>
          <div style={{ width: 64, height: 64, borderRadius: "50%", background: "rgba(0, 212, 170, 0.2)", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 24px" }}>
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" strokeWidth="2">
              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
            </svg>
          </div>
          <h2 style={{ fontSize: "20px", fontWeight: 600, marginBottom: "12px" }}>Gửi tin nhắn</h2>
          <p style={{ color: "var(--text-secondary)", marginBottom: "24px" }}>Gửi tin nhắn khẩn cấp đến admin</p>
          <button className="btn btn-primary" style={{ width: "100%" }}>Gửi tin nhắn</button>
        </div>
      </div>
    </div>
  );
}