import { beforeEach, describe, expect, it, vi } from 'vitest';

import { renderWithProviders, screen, userEvent } from '@/test/test-utils';
import { NavItem } from '@/types/navigation';

import { Navigation } from '../navigation';

const mockNavItems: NavItem[] = [
  { path: '/', name: 'Home', isExternal: false },
  { path: '/about', name: 'About', isExternal: false },
  { path: '/articles', name: 'Articles', isExternal: false },
  { path: 'https://github.com', name: 'GitHub', isExternal: true },
];

describe('Navigation', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  describe('Desktop Navigation', () => {
    beforeEach(() => {
      // Mock tablet/desktop viewport
      window.matchMedia = vi.fn().mockImplementation((query) => ({
        matches: query === '(min-width: 768px)',
        media: query,
        onchange: null,
        addListener: vi.fn(),
        removeListener: vi.fn(),
        addEventListener: vi.fn(),
        removeEventListener: vi.fn(),
        dispatchEvent: vi.fn(),
      }));
    });

    it('should render all nav items', () => {
      renderWithProviders(<Navigation items={mockNavItems} />);

      expect(screen.getByText('Home')).toBeInTheDocument();
      expect(screen.getByText('About')).toBeInTheDocument();
      expect(screen.getByText('Articles')).toBeInTheDocument();
      expect(screen.getByText('GitHub')).toBeInTheDocument();
    });

    it('should render internal links with correct paths', () => {
      renderWithProviders(<Navigation items={mockNavItems} />);

      const homeLink = screen.getByText('Home').closest('a');
      const aboutLink = screen.getByText('About').closest('a');

      expect(homeLink).toHaveAttribute('href', '/');
      expect(aboutLink).toHaveAttribute('href', '/about');
    });

    it('should render external links with target="_blank"', () => {
      renderWithProviders(<Navigation items={mockNavItems} />);

      const githubLink = screen.getByText('GitHub').closest('a');

      expect(githubLink).toHaveAttribute('href', 'https://github.com');
      expect(githubLink).toHaveAttribute('target', '_blank');
      expect(githubLink).toHaveAttribute('rel', 'noreferrer');
    });
  });

  describe('Mobile Navigation', () => {
    beforeEach(() => {
      // Mock mobile viewport
      window.matchMedia = vi.fn().mockImplementation((query) => ({
        matches: false,
        media: query,
        onchange: null,
        addListener: vi.fn(),
        removeListener: vi.fn(),
        addEventListener: vi.fn(),
        removeEventListener: vi.fn(),
        dispatchEvent: vi.fn(),
      }));
    });

    it('should show menu button on mobile', () => {
      renderWithProviders(<Navigation items={mockNavItems} />);

      expect(screen.getByText('Menu')).toBeInTheDocument();
    });

    it('should open modal when menu button is clicked', async () => {
      const user = userEvent.setup();
      renderWithProviders(<Navigation items={mockNavItems} />);

      await user.click(screen.getByText('Menu'));

      expect(screen.getByText('Navigation')).toBeInTheDocument();
      expect(screen.getByText('Home')).toBeInTheDocument();
    });

    it('should close modal when close button is clicked', async () => {
      const user = userEvent.setup();
      renderWithProviders(<Navigation items={mockNavItems} />);

      await user.click(screen.getByText('Menu'));
      expect(screen.getByText('Navigation')).toBeInTheDocument();

      const closeButton = screen.getByLabelText('Close');
      await user.click(closeButton);

      expect(screen.queryByText('Navigation')).not.toBeInTheDocument();
    });
  });
});
