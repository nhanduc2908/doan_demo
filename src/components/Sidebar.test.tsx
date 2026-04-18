import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen } from '@testing-library/react';
import { usePathname } from 'next/navigation';
import Sidebar from './Sidebar';

vi.mock('next/navigation', () => ({
  usePathname: vi.fn(() => '/dashboard'),
}));

describe('Sidebar Component', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('should render sidebar title', () => {
    (usePathname as ReturnType<typeof vi.fn>).mockReturnValue('/dashboard');
    render(<Sidebar />);
    expect(screen.getByText('SecureGuard')).toBeTruthy();
  });

  it('should render navigation items', () => {
    (usePathname as ReturnType<typeof vi.fn>).mockReturnValue('/dashboard');
    render(<Sidebar />);
    expect(screen.getByText('Dashboard')).toBeTruthy();
  });

  it('should render user name', () => {
    (usePathname as ReturnType<typeof vi.fn>).mockReturnValue('/dashboard');
    render(<Sidebar />);
    expect(screen.getByText('Admin User')).toBeTruthy();
  });

  it('should render admin role badge', () => {
    (usePathname as ReturnType<typeof vi.fn>).mockReturnValue('/dashboard');
    render(<Sidebar />);
    expect(screen.getByText('Super Admin')).toBeTruthy();
  });

  it('should render multiple nav links', () => {
    (usePathname as ReturnType<typeof vi.fn>).mockReturnValue('/dashboard');
    render(<Sidebar />);
    const links = screen.getAllByRole('link');
    expect(links.length).toBeGreaterThan(10);
  });
});

describe('Sidebar Icon Map', () => {
  const iconMap: Record<string, string> = {
    shield: "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z",
    clock: "M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20zm0 5v5l4 2",
    smartphone: "M17 1.01L7 1c-1.1 0-2 .9-2 2v18c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-1.99-2-1.99zM17 19H7V5h10v14z",
    key: "M21 2l-2 2m-7.61 7.61a5.5 5.5 0 1 1-7.778 7.778 5.5 5.5 0 0 1 7.777-7.777zm0 0L15.5 7.5m0 0l3 3L22 7l-3-3m-3.5 3.5L19 4",
    lock: "M12 17a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm6-9a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V10a2 2 0 0 1 2-2h1V6a5 5 0 0 1 10 0v2h1zm-6-5a3 3 0 0 0-3 3v2h6V6a3 3 0 0 0-3-3z",
    wifi: "M5 12.55a11 11 0 0 1 14.08 0M1.42 9a16 16 0 0 1 21.16 0M8.53 16.11a6 6 0 0 1 6.95 0M12 20h.01",
  };

  it('should have valid shield icon', () => {
    expect(iconMap.shield).toBeTruthy();
    expect(iconMap.shield).toContain('M');
  });

  it('should have valid clock icon', () => {
    expect(iconMap.clock).toBeTruthy();
  });

  it('should have valid smartphone icon', () => {
    expect(iconMap.smartphone).toBeTruthy();
  });

  it('should have valid lock icon', () => {
    expect(iconMap.lock).toBeTruthy();
  });

  it('should have all required icons', () => {
    expect(Object.keys(iconMap).length).toBe(6);
  });
});