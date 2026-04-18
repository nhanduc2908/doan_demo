export type Role = 'super_admin' | 'auditor' | 'operator' | 'viewer';

export interface User {
  id: string;
  name: string;
  email: string;
  role: Role;
  avatar?: string;
}

export interface NavItem {
  id: string;
  label: string;
  icon: string;
  path: string;
}

export interface SecurityCategory {
  id: string;
  name: string;
  score: number;
  maxScore: number;
  icon: string;
}

export interface Session {
  id: string;
  device: string;
  ip: string;
  location: string;
  lastActive: string;
  status: 'active' | 'expired';
}

export interface TrustedDevice {
  id: string;
  name: string;
  type: string;
  addedDate: string;
  lastUsed: string;
}

export interface MFAMethod {
  id: string;
  type: 'totp' | 'sms' | 'email' | 'webauthn';
  enabled: boolean;
  label: string;
}

export interface LogEntry {
  id: string;
  timestamp: string;
  action: string;
  category: string;
  severity: 'critical' | 'warning' | 'info';
  details: string;
}

export interface Report {
  id: string;
  name: string;
  date: string;
  type: 'pdf' | 'json';
}

export interface EncryptedFile {
  id: string;
  name: string;
  size: string;
  encrypted: boolean;
  date: string;
}

export interface MalwareScan {
  id: string;
  apkName: string;
  riskScore: number;
  permissions: string[];
  threats: string[];
  date: string;
}

export interface PasswordEntry {
  id: string;
  title: string;
  username: string;
  strength: number;
  lastModified: string;
}

export interface NetworkAlert {
  id: string;
  type: string;
  severity: 'high' | 'medium' | 'low';
  description: string;
  timestamp: string;
}

export interface Policy {
  id: string;
  name: string;
  version: string;
  status: 'active' | 'pending';
  updatedAt: string;
}

export interface Backup {
  id: string;
  name: string;
  size: string;
  date: string;
  encrypted: boolean;
}

export interface Vulnerability {
  id: string;
  type: string;
  severity: 'high' | 'medium' | 'low';
  description: string;
  location: string;
}

export interface PasswordCheck {
  hasLength: boolean;
  hasUppercase: boolean;
  hasLowercase: boolean;
  hasNumber: boolean;
  hasSymbol: boolean;
  entropy: number;
  score: number;
  isBreached: boolean;
}

export const NAV_ITEMS: NavItem[] = [
  { id: 'dashboard', label: 'Dashboard', icon: 'shield', path: '/dashboard' },
  { id: 'sessions', label: 'Quản lý phiên', icon: 'clock', path: '/sessions' },
  { id: 'devices', label: 'Thiết bị tin cậy', icon: 'smartphone', path: '/devices' },
  { id: 'mfa', label: 'MFA & 2FA', icon: 'key', path: '/mfa' },
  { id: 'logs', label: 'Lịch sử hoạt động', icon: 'file-text', path: '/logs' },
  { id: 'reports', label: 'Báo cáo bảo mật', icon: 'bar-chart', path: '/reports' },
  { id: 'encryption', label: 'Mã hóa tệp', icon: 'lock', path: '/encryption' },
  { id: 'scanner', label: 'Quét mã độc', icon: 'search', path: '/scanner' },
  { id: 'passwords', label: 'Quản lý mật khẩu', icon: 'database', path: '/passwords' },
  { id: 'network', label: 'Giám sát mạng', icon: 'wifi', path: '/network' },
  { id: 'policy', label: 'Chính sách bảo mật', icon: 'settings', path: '/policy' },
  { id: 'backup', label: 'Sao lưu & khôi phục', icon: 'cloud', path: '/backup' },
  { id: 'emergency', label: 'Hỗ trợ khẩn cấp', icon: 'alert-triangle', path: '/emergency' },
  { id: 'web-scanner', label: 'Web Security Scanner', icon: 'globe', path: '/web-scanner' },
  { id: 'password-meter', label: 'Password Meter', icon: 'activity', path: '/password-meter' },
];

export const SECURITY_CATEGORIES: SecurityCategory[] = [
  { id: 'password', name: 'Độ mạnh mật khẩu', score: 75, maxScore: 100, icon: 'key' },
  { id: 'xss', name: 'Quét XSS', score: 90, maxScore: 100, icon: 'alert-circle' },
  { id: 'sql', name: 'Quét SQL Injection', score: 85, maxScore: 100, icon: 'database' },
  { id: 'file', name: 'File Inclusion', score: 80, maxScore: 100, icon: 'folder' },
  { id: 'headers', name: 'Security Headers', score: 70, maxScore: 100, icon: 'list' },
  { id: 'api', name: 'API Security', score: 88, maxScore: 100, icon: 'code' },
  { id: 'encryption', name: 'Mã hóa & lưu trữ', score: 92, maxScore: 100, icon: 'lock' },
  { id: 'auth', name: 'Xác thực & MFA', score: 78, maxScore: 100, icon: 'user-check' },
  { id: 'network', name: 'Bảo mật mạng', score: 85, maxScore: 100, icon: 'wifi' },
  { id: 'root', name: 'Chống root/debug', score: 95, maxScore: 100, icon: 'shield' },
  { id: 'session', name: 'Quản lý phiên', score: 82, maxScore: 100, icon: 'clock' },
  { id: 'logging', name: 'Logging & giám sát', score: 88, maxScore: 100, icon: 'file-text' },
  { id: 'backup', name: 'Backup & khôi phục', score: 75, maxScore: 100, icon: 'cloud' },
  { id: 'policy', name: 'Chính sách & tuân thủ', score: 80, maxScore: 100, icon: 'settings' },
];

export const ROLE_LABELS: Record<Role, string> = {
  super_admin: 'Super Admin',
  auditor: 'Security Auditor',
  operator: 'Operator',
  viewer: 'Viewer',
};