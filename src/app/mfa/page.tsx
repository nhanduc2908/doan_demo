const mfaMethods = [
  { id: "1", type: "TOTP", label: "Authenticator App", enabled: true },
  { id: "2", type: "SMS", label: "SMS Verification", enabled: true },
  { id: "3", type: "Email", label: "Email Verification", enabled: false },
  { id: "4", type: "WebAuthn", label: "Hardware Key (YubiKey)", enabled: true },
];

export default function MFAPage() {
  return (
    <div style={{ padding: "32px" }}>
      <div style={{ marginBottom: "32px" }}>
        <h1 style={{ fontSize: "28px", fontWeight: 700, marginBottom: "8px" }}>MFA & Xác thực 2 lớp</h1>
        <p style={{ color: "var(--text-secondary)" }}>Quản lý các phương thức xác thực</p>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "16px" }}>
        {mfaMethods.map((method) => (
          <div key={method.id} className="card" style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
              <div style={{ width: 48, height: 48, borderRadius: "12px", background: "var(--surface-elevated)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" strokeWidth="2">
                  <path d="M21 2l-2 2m-7.61 7.61a5.5 5.5 0 1 1-7.778 7.778 5.5 5.5 0 0 1 7.777-7.777zm0 0L15.5 7.5m0 0l3 3L22 7l-3-3m-3.5 3.5L19 4" />
                </svg>
              </div>
              <div>
                <div style={{ fontWeight: 600 }}>{method.type}</div>
                <div style={{ fontSize: "13px", color: "var(--text-tertiary)" }}>{method.label}</div>
              </div>
            </div>
            <button
              className="btn"
              style={{
                background: method.enabled ? "var(--success)" : "var(--surface-elevated)",
                color: method.enabled ? "white" : "var(--text-secondary)",
                border: "1px solid var(--border)",
              }}
            >
              {method.enabled ? "Bật" : "Tắt"}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}