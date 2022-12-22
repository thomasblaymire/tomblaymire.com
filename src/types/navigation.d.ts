export interface NavigationMobileProps {
  children: React.ReactNode;
}

export interface NavItem {
  path: string;
  name: string;
  isExternal?: boolean;
}

export interface NavigationProps {
  items: NavItem[];
  type?: 'basic';
}

export interface NavbarProps {
  type?: 'basic';
}
