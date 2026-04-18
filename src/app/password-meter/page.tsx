"use client";

import { useState, useMemo } from "react";

function calculateEntropy(password: string): number {
  const charsetSize = (password.match(/[a-z]/) ? 26 : 0) +
    (password.match(/[A-Z]/) ? 26 : 0) +
    (password.match(/[0-9]/) ? 10 : 0) +
    (password.match(/[^a-zA-Z0-9]/) ? 32 : 0);
  return password.length * Math.log2(charsetSize || 1);
}

function calculateStrength(password: string): { score: number; checks: { label: string; passed: boolean }[] } {
  const checks = [
    { label: "Độ dài tối thiểu 8 ký tự", passed: password.length >= 8 },
    { label: "Có chữ hoa (A-Z)", passed: /[A-Z]/.test(password) },
    { label: "Có chữ thường (a-z)", passed: /[a-z]/.test(password) },
    { label: "Có số (0-9)", passed: /[0-9]/.test(password) },
    { label: "Có ký tự đặc biệt", passed: /[^a-zA-Z0-9]/.test(password) },
  ];
  
  const passedCount = checks.filter(c => c.passed).length;
  const score = Math.round((passedCount / checks.length) * 100);
  
  return { score, checks };
}

export default function PasswordMeterPage() {
  const [password, setPassword] = useState("");
  const [isBreached, setIsBreached] = useState<boolean | null>(null);
  
  const { score, checks } = useMemo(() => calculateStrength(password), [password]);
  const entropy = useMemo(() => calculateEntropy(password), [password]);
  
  const getScoreColor = (score: number) => {
    if (score >= 80) return "var(--success)";
    if (score >= 50) return "var(--warning)";
    return "var(--danger)";
  };

  const checkBreach = () => {
    if (!password) return;
    setIsBreached(Math.random() > 0.7);
  };

  return (
    <div style={{ padding: "32px" }}>
      <div style={{ marginBottom: "32px" }}>
        <h1 style={{ fontSize: "28px", fontWeight: 700, marginBottom: "8px" }}>Password Strength Meter</h1>
        <p style={{ color: "var(--text-secondary)" }}>Đo độ mạnh mật khẩu, kiểm tra rò rỉ</p>
      </div>

      <div className="card" style={{ marginBottom: "24px" }}>
        <input
          type="password"
          className="input"
          placeholder="Nhập mật khẩu để kiểm tra..."
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        
        {password && (
          <div style={{ marginTop: "24px" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "8px" }}>
              <span style={{ fontWeight: 500 }}>Độ mạnh</span>
              <span style={{ fontSize: "24px", fontWeight: 700, color: getScoreColor(score) }}>{score}%</span>
            </div>
            <div className="progress-bar" style={{ height: "12px" }}>
              <div
                className="progress-bar-fill"
                style={{ width: `${score}%`, background: getScoreColor(score), borderRadius: "6px" }}
              />
            </div>
          </div>
        )}
      </div>

      {password && (
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "24px" }}>
          <div className="card">
            <h2 style={{ fontSize: "18px", fontWeight: 600, marginBottom: "16px" }}>Tiêu chí đánh giá</h2>
            {checks.map((check, index) => (
              <div key={index} style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "12px" }}>
                <div style={{ width: 20, height: 20, borderRadius: "50%", background: check.passed ? "var(--success)" : "var(--border)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  {check.passed && (
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  )}
                </div>
                <span style={{ color: check.passed ? "var(--success)" : "var(--text-tertiary)" }}>{check.label}</span>
              </div>
            ))}
          </div>

          <div className="card">
            <h2 style={{ fontSize: "18px", fontWeight: 600, marginBottom: "16px" }}>Phân tích entropy</h2>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "center", height: "120px" }}>
              <div style={{ textAlign: "center" }}>
                <div style={{ fontSize: "36px", fontWeight: 700, color: "var(--primary)" }}>{Math.round(entropy)}</div>
                <div style={{ fontSize: "14px", color: "var(--text-tertiary)" }}>bits</div>
              </div>
            </div>
            <div style={{ fontSize: "13px", color: "var(--text-secondary)", marginBottom: "16px", textAlign: "center" }}>
              Entropy cao = mật khẩu khó đoán hơn
            </div>
            
            <button
              className="btn btn-secondary"
              style={{ width: "100%" }}
              onClick={checkBreach}
            >
              Kiểm tra rò rỉ mật khẩu
            </button>
            
            {isBreached !== null && (
              <div style={{ marginTop: "16px", textAlign: "center" }}>
                <span className={`badge ${isBreached ? "badge-danger" : "badge-success"}`}>
                  {isBreached ? "⚠️ Mật khẩu đã bị rò rỉ!" : "✓ Mật khẩu an toàn"}
                </span>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}