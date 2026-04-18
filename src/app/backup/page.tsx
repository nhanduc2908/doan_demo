const backups = [
  { id: "1", name: "Full Backup", size: "2.5 GB", date: "2024-03-18 08:00", encrypted: true },
  { id: "2", name: "Incremental Backup", size: "450 MB", date: "2024-03-17 08:00", encrypted: true },
  { id: "3", name: "Full Backup", size: "2.4 GB", date: "2024-03-16 08:00", encrypted: true },
];

export default function BackupPage() {
  return (
    <div style={{ padding: "32px" }}>
      <div style={{ marginBottom: "32px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <div>
          <h1 style={{ fontSize: "28px", fontWeight: 700, marginBottom: "8px" }}>Sao lưu & khôi phục</h1>
          <p style={{ color: "var(--text-secondary)" }}>End-to-end encrypted backup</p>
        </div>
        <button className="btn btn-primary">Tạo sao lưu</button>
      </div>

      <div className="card" style={{ marginBottom: "24px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <div>
          <div style={{ fontSize: "14px", color: "var(--text-secondary)", marginBottom: "8px" }}>Trạng thái sao lưu</div>
          <div style={{ fontSize: "20px", fontWeight: 600 }}>Hoàn tất</div>
          <div style={{ fontSize: "13px", color: "var(--text-tertiary)", marginTop: "4px" }}>Sao lưu cuối: 2024-03-18 08:00</div>
        </div>
        <div style={{ display: "flex", gap: "12px" }}>
          <span className="badge badge-success">Mã hóa E2E</span>
          <span className="badge badge-info">Tự động</span>
        </div>
      </div>

      <div className="card">
        <h2 style={{ fontSize: "18px", fontWeight: 600, marginBottom: "16px" }}>Lịch sử sao lưu</h2>
        {backups.map((backup) => (
          <div key={backup.id} style={{ padding: "16px", borderBottom: "1px solid var(--border)", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
              <div style={{ width: 40, height: 40, borderRadius: "8px", background: "var(--secondary)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                  <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z" />
                </svg>
              </div>
              <div>
                <div style={{ fontWeight: 600 }}>{backup.name}</div>
                <div style={{ fontSize: "13px", color: "var(--text-tertiary)" }}>{backup.date} • {backup.size}</div>
              </div>
            </div>
            <div style={{ display: "flex", gap: "8px" }}>
              <span className={`badge ${backup.encrypted ? "badge-success" : "badge-warning"}`}>
                {backup.encrypted ? "Đã mã hóa" : "Chưa mã hóa"}
              </span>
              <button className="btn btn-secondary" style={{ padding: "6px 12px", fontSize: "12px" }}>Khôi phục</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}