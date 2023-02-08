import {
  GROUPS,
  HELP,
  HOME,
  LOGOUT,
  NOTIFICATIONS,
  SETTINGS,
} from '@/constant/constants';

export const profileDropdown = [
  {
    id: 1,
    icon: 'clarity:help-line',
    name: HELP,
  },
  {
    id: 2,
    icon: 'ri:notification-2-line',
    name: NOTIFICATIONS,
  },
  {
    id: 3,
    icon: 'material-symbols:logout',
    name: LOGOUT,
  },
];

export const sideBarData: {
  id: number;
  name: string;
  icon: string;
  active_icon: string;
  link: string;
  subLinks: {
    id: number;
    subType: string;
    link: string;
  }[];
}[] = [
  {
    id: 1,
    name: HOME,
    link: '/home',
    subLinks: [],
    icon: 'akar-icons:home',
    active_icon: 'ph:house-simple-fill',
  },
  {
    id: 1,
    name: GROUPS,
    link: '/groups',
    subLinks: [],
    icon: 'ph:users-three-light',
    active_icon: 'ph:users-three-fill',
  },
  {
    id: 1,
    name: SETTINGS,
    link: '/settings',
    subLinks: [],
    icon: 'ph:gear',
    active_icon: 'ph:gear-fill',
  },
];

export const mobileNavData = [
  {
    id: 1,
    name: HOME,
    link: '/home',
    subLinks: [],
    icon: 'akar-icons:home',
    active_icon: 'ph:house-simple-fill',
  },
  {
    id: 1,
    name: GROUPS,
    link: '/groups',
    subLinks: [],
    icon: 'ph:users-three-light',
    active_icon: 'ph:users-three-fill',
  },
  {
    id: 1,
    name: SETTINGS,
    link: '/settings/m',
    subLinks: [],
    icon: 'ph:gear',
    active_icon: 'ph:gear-fill',
  },
];

export const settingsDesktopNav: {
  id: number;
  name: string;
  link: string;
  index: boolean;
}[] = [
  {
    id: 1,
    name: 'Profile',
    link: '/settings',
    index: true,
  },
  {
    id: 2,
    name: 'Password',
    link: '/settings/security',
    index: false,
  },
];

export const settingMobileNav: {
  id: number;
  name: string;
  icon: string;
  link?: string;
}[] = [
  {
    id: 1,
    name: 'Profile',
    link: '/settings/m/profile',
    icon: 'ph:user-circle-light',
  },
  {
    id: 2,
    name: 'Change Password',
    link: '/settings/m/security',
    icon: 'ph:key-bold',
  },
  {
    id: 3,
    name: 'Log Out',
    icon: 'material-symbols:logout',
  },
];
