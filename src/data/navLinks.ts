import {
  GROUPS,
  HOME,
  LOGOUT,
  MY_PROFILE,
  SETTINGS,
} from '@/constant/constants';

export const profileDropdown = [
  {
    id: 1,
    icon: 'material-symbols:person-outline-rounded',
    name: MY_PROFILE,
  },
  {
    id: 2,
    icon: 'material-symbols:settings',
    name: SETTINGS,
  },
  {
    id: 3,
    icon: 'ri:logout-circle-line',
    name: LOGOUT,
  },
];

export const sideBarData: {
  id: number;
  name: string;
  icon: string;
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
  },
  {
    id: 1,
    name: GROUPS,
    link: '/groups',
    subLinks: [],
    icon: 'ph:users-three-light',
  },
  {
    id: 1,
    name: SETTINGS,
    link: '/settings',
    subLinks: [],
    icon: 'ph:gear',
  },
];
