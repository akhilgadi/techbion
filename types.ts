
export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface NavigationItem {
  label: string;
  path: string;
  children?: NavigationItem[];
}

export enum Page {
  HOME = 'home',
  SERVICES = 'services',
  INDUSTRIES = 'industries',
  CAREERS = 'careers',
  ABOUT = 'about',
  CONTACT = 'contact'
}
