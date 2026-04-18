const reports = [
  { id: "1", name: "Báo cáo tháng 3/2024", date: "2024-03-01", type: "pdf" },
  { id: "2", name: "Báo cáo tuần 11", date: "2024-03-11", type: "json" },
  { id: "3", name: "Báo cáo tháng 2/2024", date: "2024-02-01", type: "pdf" },
  { id: "4", name: "Báo cáo tuần 7", date: "2024-02-12", type: "json" },
];

export default function ReportsPage() {
  return (
    <div style={{ padding: "32px" }}>
      <div style={{ marginBottom: "32px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <div>
          <h1 style={{ fontSize: "28px", fontWeight: 700, marginBottom: "8px" }}>Báo cáo bảo mật</h1>
          <p style={{ color: "var(--text-secondary)" }}>Xuất PDF/JSON định kỳ</p>
        </div>
        <button className="btn btn-primary">Tạo báo cáo</button>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "16px" }}>
        {reports.map((report) => (
          <div key={report.id} className="card" style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
              <div style={{ width: 48, height: 48, borderRadius: "12px", background: "var(--secondary)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                  <polyline points="14 2 14 8 20 8" />
                </svg>
              </div>
              <div>
                <div style={{ fontWeight: 600 }}>{report.name}</div>
                <div style={{ fontSize: "13px", color: "var(--text-tertiary)" }}>{report.date}</div>
              </div>
            </div>
            <div style={{ display: "flex", gap: "8px" }}>
              <button className="btn btn-secondary" style={{ padding: "8px 16px" }}>Xem</button>
              <button className="btn btn-primary" style={{ padding: "8px 16px" }}>Tải</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}