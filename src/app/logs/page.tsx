const logs = [
  { id: "1", timestamp: "2024-03-18 14:32:15", action: "Đăng nhập thành công", category: "Xác thực", severity: "info", details: "Thiết bị: Samsung Galaxy S23" },
  { id: "2", timestamp: "2024-03-18 14:28:45", action: "Thay đổi mật khẩu", category: "Bảo mật", severity: "warning", details: "Yêu cầu xác thực MFA" },
  { id: "3", timestamp: "2024-03-18 14:15:30", action: "Thu hồi phiên", category: "Phiên", severity: "info", details: "IP: 192.168.1.105" },
  { id: "4", timestamp: "2024-03-18 13:45:22", action: "Phát hiện MITM", category: "Mạng", severity: "critical", details: "Cảnh báo: Proxy detected" },
  { id: "5", timestamp: "2024-03-18 13:20:10", action: "Mã hóa file", category: "Dữ liệu", severity: "info", details: "File: report.pdf" },
];

export default function LogsPage() {
  const getSeverityBadge = (severity: string) => {
    switch (severity) {
      case "critical": return "badge-danger";
      case "warning": return "badge-warning";
      default: return "badge-info";
    }
  };

  return (
    <div style={{ padding: "32px" }}>
      <div style={{ marginBottom: "32px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <div>
          <h1 style={{ fontSize: "28px", fontWeight: 700, marginBottom: "8px" }}>Lịch sử hoạt động</h1>
          <p style={{ color: "var(--text-secondary)" }}>Log chi tiết theo 280 tiêu chí bảo mật</p>
        </div>
        <button className="btn btn-secondary">Xuất log</button>
      </div>

      <div className="card">
        <input type="text" className="input" placeholder="Tìm kiếm..." style={{ marginBottom: "16px" }} />
        <table className="table">
          <thead>
            <tr>
              <th>Thời gian</th>
              <th>Hành động</th>
              <th>Danh mục</th>
              <th>Mức độ</th>
              <th>Chi tiết</th>
            </tr>
          </thead>
          <tbody>
            {logs.map((log) => (
              <tr key={log.id}>
                <td className="font-mono" style={{ fontSize: "13px" }}>{log.timestamp}</td>
                <td style={{ fontWeight: 500 }}>{log.action}</td>
                <td>{log.category}</td>
                <td>
                  <span className={`badge ${getSeverityBadge(log.severity)}`}>{log.severity}</span>
                </td>
                <td style={{ color: "var(--text-secondary)", fontSize: "13px" }}>{log.details}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}