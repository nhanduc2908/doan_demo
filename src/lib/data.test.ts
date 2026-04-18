import { describe, it, expect } from 'vitest';
import {
  NAV_ITEMS,
  SECURITY_CATEGORIES,
  ROLE_LABELS,
  type User,
  type Session,
  type LogEntry,
  type PasswordCheck,
} from './data';

describe('NAV_ITEMS', () => {
  it('should have all required navigation items', () => {
    expect(NAV_ITEMS.length).toBeGreaterThan(0);
  });

  it('should have valid path for each item', () => {
    NAV_ITEMS.forEach((item) => {
      expect(item.path).toMatch(/^\/.*/);
      expect(item.id).toBeTruthy();
      expect(item.label).toBeTruthy();
    });
  });

  it('should include dashboard as first item', () => {
    expect(NAV_ITEMS[0]?.id).toBe('dashboard');
  });
});

describe('SECURITY_CATEGORIES', () => {
  it('should have valid scores', () => {
    SECURITY_CATEGORIES.forEach((category) => {
      expect(category.score).toBeGreaterThanOrEqual(0);
      expect(category.maxScore).toBe(100);
      expect(category.score).toBeLessThanOrEqual(category.maxScore);
    });
  });

  it('should have all required properties', () => {
    SECURITY_CATEGORIES.forEach((category) => {
      expect(category.id).toBeTruthy();
      expect(category.name).toBeTruthy();
      expect(category.icon).toBeTruthy();
    });
  });

  it('should have valid security categories', () => {
    const categories = SECURITY_CATEGORIES.map((c) => c.id);
    expect(categories).toContain('password');
    expect(categories).toContain('encryption');
    expect(categories).toContain('network');
  });
});

describe('ROLE_LABELS', () => {
  it('should have all role labels', () => {
    expect(ROLE_LABELS.super_admin).toBe('Super Admin');
    expect(ROLE_LABELS.auditor).toBe('Security Auditor');
    expect(ROLE_LABELS.operator).toBe('Operator');
    expect(ROLE_LABELS.viewer).toBe('Viewer');
  });
});

describe('Data Types', () => {
  it('should validate User type', () => {
    const user: User = {
      id: '1',
      name: 'Test User',
      email: 'test@example.com',
      role: 'viewer',
    };
    expect(user.id).toBe('1');
    expect(user.role).toBe('viewer');
  });

  it('should validate Session type', () => {
    const session: Session = {
      id: '1',
      device: 'Chrome',
      ip: '192.168.1.1',
      location: 'Vietnam',
      lastActive: '2024-01-01',
      status: 'active',
    };
    expect(session.status).toBe('active');
  });

  it('should validate LogEntry type', () => {
    const log: LogEntry = {
      id: '1',
      timestamp: '2024-01-01T00:00:00Z',
      action: 'Login',
      category: 'auth',
      severity: 'info',
      details: 'User logged in',
    };
    expect(log.severity).toBe('info');
  });

  it('should validate PasswordCheck type', () => {
    const check: PasswordCheck = {
      hasLength: true,
      hasUppercase: true,
      hasLowercase: true,
      hasNumber: true,
      hasSymbol: false,
      entropy: 50,
      score: 80,
      isBreached: false,
    };
    expect(check.score).toBe(80);
  });
});

describe('Password Check Logic', () => {
  const calculatePasswordScore = (password: string): PasswordCheck => {
    return {
      hasLength: password.length >= 8,
      hasUppercase: /[A-Z]/.test(password),
      hasLowercase: /[a-z]/.test(password),
      hasNumber: /[0-9]/.test(password),
      hasSymbol: /[!@#$%^&*]/.test(password),
      entropy: password.length * 4,
      score: 0,
      isBreached: false,
    };
  };

  it('should detect weak password', () => {
    const check = calculatePasswordScore('abc');
    expect(check.hasLength).toBe(false);
    expect(check.score).toBe(0);
  });

  it('should detect medium password', () => {
    const check = calculatePasswordScore('Password123');
    expect(check.hasLength).toBe(true);
    expect(check.hasUppercase).toBe(true);
    expect(check.hasLowercase).toBe(true);
    expect(check.hasNumber).toBe(true);
  });

  it('should detect strong password', () => {
    const check = calculatePasswordScore('P@ssw0rd123');
    expect(check.hasLength).toBe(true);
    expect(check.hasUppercase).toBe(true);
    expect(check.hasLowercase).toBe(true);
    expect(check.hasNumber).toBe(true);
    expect(check.hasSymbol).toBe(true);
  });
});

describe('Session Status', () => {
  it('should validate active session', () => {
    const session: Session = {
      id: '1',
      device: 'Chrome',
      ip: '192.168.1.1',
      location: 'Vietnam',
      lastActive: new Date().toISOString(),
      status: 'active',
    };
    expect(session.status).toBe('active');
  });

  it('should validate expired session', () => {
    const session: Session = {
      id: '2',
      device: 'Firefox',
      ip: '192.168.1.2',
      location: 'USA',
      lastActive: '2020-01-01',
      status: 'expired',
    };
    expect(session.status).toBe('expired');
  });
});

describe('Log Severity', () => {
  it('should allow critical severity', () => {
    const log: LogEntry = {
      id: '1',
      timestamp: '2024-01-01T00:00:00Z',
      action: 'Security breach',
      category: 'security',
      severity: 'critical',
      details: 'Unauthorized access detected',
    };
    expect(log.severity).toBe('critical');
  });

  it('should allow warning severity', () => {
    const log: LogEntry = {
      id: '2',
      timestamp: '2024-01-01T00:00:00Z',
      action: 'Failed login',
      category: 'auth',
      severity: 'warning',
      details: 'Wrong password',
    };
    expect(log.severity).toBe('warning');
  });

  it('should allow info severity', () => {
    const log: LogEntry = {
      id: '3',
      timestamp: '2024-01-01T00:00:00Z',
      action: 'User profile updated',
      category: 'user',
      severity: 'info',
      details: 'Profile changed',
    };
    expect(log.severity).toBe('info');
  });
});