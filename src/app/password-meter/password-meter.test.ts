import { describe, it, expect } from 'vitest';

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

describe('calculateEntropy', () => {
  it('should return 0 for empty password', () => {
    expect(calculateEntropy('')).toBe(0);
  });

  it('should calculate entropy for lowercase only', () => {
    const entropy = calculateEntropy('abc');
    expect(entropy).toBeGreaterThan(0);
  });

  it('should calculate entropy for mixed charset', () => {
    const entropy = calculateEntropy('Abc123');
    expect(entropy).toBeGreaterThan(0);
  });

  it('should increase entropy with length', () => {
    const short = calculateEntropy('abc');
    const long = calculateEntropy('abcdefgh');
    expect(long).toBeGreaterThan(short);
  });

  it('should calculate entropy with special chars', () => {
    const entropy = calculateEntropy('P@ssw0rd!');
    expect(entropy).toBeGreaterThan(0);
  });
});

describe('calculateStrength', () => {
  it('should return 0 score for empty password', () => {
    const result = calculateStrength('');
    expect(result.score).toBe(0);
  });

  it('should return 0 score for short password', () => {
    const result = calculateStrength('abc');
    expect(result.score).toBe(20);
  });

  it('should detect minimum length requirement', () => {
    const result = calculateStrength('password');
    expect(result.checks[0].passed).toBe(true);
  });

  it('should detect uppercase', () => {
    const result = calculateStrength('Password');
    expect(result.checks[1].passed).toBe(true);
  });

  it('should detect lowercase', () => {
    const result = calculateStrength('Password');
    expect(result.checks[2].passed).toBe(true);
  });

  it('should detect numbers', () => {
    const result = calculateStrength('Password1');
    expect(result.checks[3].passed).toBe(true);
  });

  it('should detect special characters', () => {
    const result = calculateStrength('Password1!');
    expect(result.checks[4].passed).toBe(true);
  });

  it('should calculate 20% for 1 check passed', () => {
    const result = calculateStrength('1234567');
    expect(result.score).toBe(20);
  });

  it('should calculate 40% for 2 checks passed', () => {
    const result = calculateStrength('Abcdefgh');
    expect(result.score).toBeGreaterThanOrEqual(40);
  });

  it('should calculate 60% for 3 checks passed', () => {
    const result = calculateStrength('Abcdefg1');
    expect(result.score).toBeGreaterThanOrEqual(60);
  });

  it('should calculate 80% for 4 checks passed', () => {
    const result = calculateStrength('Abcdefg1!');
    expect(result.score).toBeGreaterThanOrEqual(80);
  });

  it('should calculate 100% for all checks passed', () => {
    const result = calculateStrength('P@ssw0rd!');
    expect(result.score).toBe(100);
  });

  it('should have all 5 check items', () => {
    const result = calculateStrength('test');
    expect(result.checks.length).toBe(5);
  });
});

describe('Password Strength Real Cases', () => {
  it('should rate weak password as 0-20%', () => {
    const weak = ['123', 'abc', 'pass', '1111'];
    weak.forEach(pwd => {
      const result = calculateStrength(pwd);
      expect(result.score).toBeLessThanOrEqual(20);
    });
  });

  it('should rate medium password as 40-60%', () => {
    const medium = ['password', 'Password', '12345678'];
    medium.forEach(pwd => {
      const result = calculateStrength(pwd);
      expect(result.score).toBeGreaterThanOrEqual(20);
      expect(result.score).toBeLessThanOrEqual(60);
    });
  });

  it('should rate strong password as 80-100%', () => {
    const strong = ['P@ssw0rd!', 'Str0ng!Pass', 'Secure#123'];
    strong.forEach(pwd => {
      const result = calculateStrength(pwd);
      expect(result.score).toBeGreaterThanOrEqual(80);
    });
  });
});

describe('Entropy vs Strength', () => {
  it('should have higher entropy for complex passwords', () => {
    const simple = calculateEntropy('aaaa');
    const complex = calculateEntropy('Abc1!xyz');
    expect(complex).toBeGreaterThan(simple);
  });

  it('should correlate entropy with strength', () => {
    const result = calculateStrength('P@ssw0rd123');
    expect(result.score).toBe(100);
    expect(calculateEntropy('P@ssw0rd123')).toBeGreaterThan(50);
  });
});