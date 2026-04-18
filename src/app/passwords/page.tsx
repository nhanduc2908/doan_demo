const passwords = [
  { id: "1", title: "Gmail Account", username: "admin@gmail.com", strength: 85, lastModified: "2024-03-15" },
  { id: "2", title: "AWS Console", username: "admin@company.com", strength: 92, lastModified: "2024-03-10" },
  { id: "3", title: "GitHub", username: "dev@company.com", strength: 78, lastModified: "2024-03-08" },
  { id: "4", title: "Slack", username: "team@company.com", strength: 65, lastModified: "2024-03-05" },
  { id: "5", title: "Database", username: "root", strength: 45, lastModified: "2024-03-01" },
];

export default function PasswordsPage() {
  const getStrengthColor = (strength: number) => {
    if (strength >= 80) return "var(--success)";
    if (strength >= 50) return "var(--warning)";
    return "var(--danger)";
  };

  return (
    <div style={{ padding: "32px" }}>
      <div style={{ marginBottom: "32px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <div>
          <h1 style={{ fontSize: "28px", fontWeight: 700, marginBottom: "8px" }}>Quản lý mật khẩu</h1>
          <p style={{ color: "var(--text-secondary)" }}>Lưu trữ trong Keystore</p>
        </div>
        <button className="btn btn-primary">+ Thêm mật khẩu</button>
      </div>

      <div className="card">
        <input type="text" className="input" placeholder="Tìm kiếm mật khẩu..." style={{ marginBottom: "16px" }} />
        <table className="table">
          <thead>
            <tr>
              <th>Tên</th>
              <th>Tài khoản</th>
              <th>Độ mạnh</th>
              <th>Cập nhật</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {passwords.map((entry) => (
              <tr key={entry.id}>
                <td style={{ fontWeight: 500 }}>{entry.title}</td>
                <td className="font-mono" style={{ fontSize: "13px" }}>{entry.username}</td>
                <td>
                  <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                    <div className="progress-bar" style={{ width: 80 }}>
                      <div className="progress-bar-fill" style={{ width: `${entry.strength}%`, background: getStrengthColor(entry.strength) }} />
                    </div>
                    <span style={{ fontSize: "12px", color: getStrengthColor(entry.strength) }}>{entry.strength}%</span>
                  </div>
                </td>
                <td style={{ color: "var(--text-secondary)", fontSize: "13px" }}>{entry.lastModified}</td>
                <td>
                  <button className="btn btn-secondary" style={{ padding: "6px 12px", fontSize: "12px" }}>Sao chép</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}