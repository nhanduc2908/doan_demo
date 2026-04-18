import { SECURITY_CATEGORIES } from "@/lib/data";

const totalScore = Math.round(SECURITY_CATEGORIES.reduce((acc, cat) => acc + cat.score, 0) / SECURITY_CATEGORIES.length);

export default function DashboardPage() {
  const getScoreColor = (score: number) => {
    if (score >= 80) return "var(--success)";
    if (score >= 50) return "var(--warning)";
    return "var(--danger)";
  };

  return (
    <div style={{ padding: "32px" }}>
      <div style={{ marginBottom: "32px" }}>
        <h1 style={{ fontSize: "28px", fontWeight: 700, marginBottom: "8px" }}>Dashboard</h1>
        <p style={{ color: "var(--text-secondary)" }}>Tổng quan bảo mật hệ thống</p>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 2fr", gap: "24px", marginBottom: "32px" }}>
        <div className="card" style={{ display: "flex", alignItems: "center", gap: "32px" }}>
          <div style={{ position: "relative", width: 160, height: 160 }}>
            <svg viewBox="0 0 160 160" style={{ transform: "rotate(-90deg)" }}>
              <circle cx="80" cy="80" r="70" fill="none" stroke="var(--border)" strokeWidth="12" />
              <circle
                cx="80"
                cy="80"
                r="70"
                fill="none"
                stroke={getScoreColor(totalScore)}
                strokeWidth="12"
                strokeDasharray={`${(totalScore / 100) * 440} 440`}
                strokeLinecap="round"
              />
            </svg>
            <div style={{ position: "absolute", inset: 0, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
              <span style={{ fontSize: "42px", fontWeight: 700, color: getScoreColor(totalScore) }}>{totalScore}%</span>
              <span style={{ fontSize: "12px", color: "var(--text-tertiary)" }}>Security Score</span>
            </div>
          </div>
          <div>
            <div style={{ fontSize: "14px", color: "var(--text-secondary)", marginBottom: "8px" }}>Tổng điểm (280 criteria)</div>
            <div style={{ fontSize: "32px", fontWeight: 700, marginBottom: "4px" }}>
              {Math.round((totalScore / 100) * 1400)} <span style={{ fontSize: "14px", color: "var(--text-tertiary)", fontWeight: 400 }}>/ 1400</span>
            </div>
            <div style={{ fontSize: "13px", color: "var(--text-tertiary)" }}>14 nhóm × 20 tiêu chí × 5 điểm</div>
          </div>
        </div>

        <div className="card">
          <h2 style={{ fontSize: "18px", fontWeight: 600, marginBottom: "20px" }}>Thống kê nhanh</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "16px" }}>
            <div style={{ textAlign: "center", padding: "16px", background: "var(--surface-elevated)", borderRadius: "8px" }}>
              <div style={{ fontSize: "28px", fontWeight: 700, color: "var(--primary)" }}>3</div>
              <div style={{ fontSize: "12px", color: "var(--text-tertiary)" }}>Phiên hoạt động</div>
            </div>
            <div style={{ textAlign: "center", padding: "16px", background: "var(--surface-elevated)", borderRadius: "8px" }}>
              <div style={{ fontSize: "28px", fontWeight: 700, color: "var(--success)" }}>5</div>
              <div style={{ fontSize: "12px", color: "var(--text-tertiary)" }}>Thiết bị tin cậy</div>
            </div>
            <div style={{ textAlign: "center", padding: "16px", background: "var(--surface-elevated)", borderRadius: "8px" }}>
              <div style={{ fontSize: "28px", fontWeight: 700, color: "var(--warning)" }}>2</div>
              <div style={{ fontSize: "12px", color: "var(--text-tertiary)" }}>Cảnh báo</div>
            </div>
            <div style={{ textAlign: "center", padding: "16px", background: "var(--surface-elevated)", borderRadius: "8px" }}>
              <div style={{ fontSize: "28px", fontWeight: 700, color: "var(--secondary)" }}>4</div>
              <div style={{ fontSize: "12px", color: "var(--text-tertiary)" }}>Phương thức MFA</div>
            </div>
          </div>
        </div>
      </div>

      <div className="card">
        <h2 style={{ fontSize: "18px", fontWeight: 600, marginBottom: "24px" }}>14 Nhóm tiêu chí bảo mật</h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "16px" }}>
          {SECURITY_CATEGORIES.map((category) => (
            <div
              key={category.id}
              style={{
                padding: "16px",
                background: "var(--surface-elevated)",
                borderRadius: "8px",
                display: "flex",
                alignItems: "center",
                gap: "16px",
              }}
            >
              <div
                style={{
                  width: 44,
                  height: 44,
                  borderRadius: "8px",
                  background: `${getScoreColor(category.score)}20`,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={getScoreColor(category.score)} strokeWidth="2">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                </svg>
              </div>
              <div style={{ flex: 1 }}>
                <div style={{ fontWeight: 500, marginBottom: "6px" }}>{category.name}</div>
                <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                  <div className="progress-bar" style={{ flex: 1 }}>
                    <div
                      className="progress-bar-fill"
                      style={{
                        width: `${category.score}%`,
                        background: getScoreColor(category.score),
                      }}
                    />
                  </div>
                  <span style={{ fontSize: "13px", fontWeight: 600, color: getScoreColor(category.score), minWidth: "40px" }}>
                    {category.score}%
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}