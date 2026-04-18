const sessions = [
  { id: "1", device: "Samsung Galaxy S23", ip: "192.168.1.100", location: "Hà Nội, VN", lastActive: "2 phút trước", status: "active" },
  { id: "2", device: "iPhone 15 Pro", ip: "192.168.1.101", location: "TP. Hồ Chí Minh, VN", lastActive: "15 phút trước", status: "active" },
  { id: "3", device: "Xiaomi Mi 13", ip: "192.168.1.102", location: "Đà Nẵng, VN", lastActive: "1 giờ trước", status: "active" },
];

export default function SessionsPage() {
  return (
    <div style={{ padding: "32px" }}>
      <div style={{ marginBottom: "32px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <div>
          <h1 style={{ fontSize: "28px", fontWeight: 700, marginBottom: "8px" }}>Quản lý phiên đăng nhập</h1>
          <p style={{ color: "var(--text-secondary)" }}>Xem và thu hồi các phiên hoạt động</p>
        </div>
        <button className="btn btn-secondary">Làm mới</button>
      </div>

      <div className="card">
        <table className="table">
          <thead>
            <tr>
              <th>Thiết bị</th>
              <th>Địa chỉ IP</th>
              <th>Vị trí</th>
              <th>Hoạt động cuối</th>
              <th>Trạng thái</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {sessions.map((session) => (
              <tr key={session.id}>
                <td style={{ fontWeight: 500 }}>{session.device}</td>
                <td className="font-mono" style={{ fontSize: "13px" }}>{session.ip}</td>
                <td>{session.location}</td>
                <td style={{ color: "var(--text-secondary)" }}>{session.lastActive}</td>
                <td>
                  <span className="badge badge-success">Hoạt động</span>
                </td>
                <td>
                  <button className="btn btn-danger" style={{ padding: "6px 12px", fontSize: "12px" }}>Thu hồi</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}