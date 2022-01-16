import { Route } from '@angular/router';

export type InternalRoutes = InternalRoute[];

export interface InternalRoute extends Route {
  headerConfig?: HeaderConfig;
  sideBarConfig?: SideBarItem;
}

export interface HeaderConfig {
  title: string;
  buttons?: HeaderButtons[];
}

export interface HeaderButtons {
  icon: string;
  position: 'left' | 'right';
  action: () => void;
}

export interface SideBarItem {
  label: string;
  path: string;
  icon?: string;
}
