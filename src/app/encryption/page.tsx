const files = [
  { id: "1", name: "document.pdf", size: "2.4 MB", encrypted: true, date: "2024-03-15" },
  { id: "2", name: "backup.zip", size: "150 MB", encrypted: true, date: "2024-03-10" },
  { id: "3", name: "report.xlsx", size: "1.2 MB", encrypted: false, date: "2024-03-18" },
  { id: "4", name: "notes.txt", size: "4 KB", encrypted: false, date: "2024-03-17" },
];

export default function EncryptionPage() {
  return (
    <div style={{ padding: "32px" }}>
      <div style={{ marginBottom: "32px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <div>
          <h1 style={{ fontSize: "28px", fontWeight: 700, marginBottom: "8px" }}>Mã hóa tệp & thư mục</h1>
          <p style={{ color: "var(--text-secondary)" }}>Encrypted local storage với AES-256</p>
        </div>
        <button className="btn btn-primary">+ Mã hóa file</button>
      </div>

      <div className="card">
        <table className="table">
          <thead>
            <tr>
              <th>Tên file</th>
              <th>Kích thước</th>
              <th>Ngày</th>
              <th>Trạng thái</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {files.map((file) => (
              <tr key={file.id}>
                <td style={{ fontWeight: 500 }}>{file.name}</td>
                <td className="text-secondary">{file.size}</td>
                <td className="text-secondary">{file.date}</td>
                <td>
                  <span className={`badge ${file.encrypted ? "badge-success" : "badge-warning"}`}>
                    {file.encrypted ? "Đã mã hóa" : "Chưa mã hóa"}
                  </span>
                </td>
                <td>
                  <button className="btn btn-secondary" style={{ padding: "6px 12px", fontSize: "12px" }}>
                    {file.encrypted ? "Giải mã" : "Mã hóa"}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}