import {
  AnnotationIcon,
  FolderAddIcon,
  FolderOpenIcon,
  LibraryIcon,
  OfficeBuildingIcon,
  PrinterIcon,
  UsersIcon,
} from '@heroicons/react/solid';
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { JsxElement } from 'typescript';

const pages = [
  {
    href: '/',
    title: 'Home',
    Icon: (
      <OfficeBuildingIcon className='h-6 w-6 bg-yellow-200 text-yellow-400 p-[3px] rounded-sm' />
    ),
  },
  {
    href: '/students',
    title: 'Students',
    Icon: (
      <UsersIcon className='h-6 w-6 bg-blue-200 text-blue-400 p-[3px] rounded-sm' />
    ),
  },
  {
    href: '/companies',
    title: 'Companies',
    Icon: (
      <LibraryIcon className='h-6 w-6 bg-teal-200 text-teal-400 p-[3px] rounded-sm' />
    ),
  },
  {
    href: '/offers',
    title: 'Offers',
    Icon: (
      <FolderOpenIcon className='h-6 w-6 bg-green-200 text-green-400 p-[3px] rounded-sm' />
    ),
  },
  {
    href: '/submits',
    title: 'Submits',
    Icon: (
      <FolderAddIcon className='h-6 w-6 bg-green-200 text-green-400 p-[3px] rounded-sm' />
    ),
  },
  {
    href: '/results',
    title: 'Results',
    Icon: (
      <PrinterIcon className='h-6 w-6 bg-sky-200 text-sky-400 p-[3px] rounded-sm' />
    ),
  },
  {
    href: '/notifications',
    title: 'Notifications',
    Icon: (
      <AnnotationIcon className='h-6 w-6 bg-violet-200 text-violet-400 p-[3px] rounded-sm' />
    ),
  },
];

interface Props {}

const NavbarList = (props: Props) => {
  return (
    <div>
      {pages.map(({ href, title, Icon }) => (
        <ListItem href={href} title={title} Icon={Icon} />
      ))}
    </div>
  );
};

interface ListItemProps {
  href: string;
  title: string;
  Icon: any;
}

const ListItem = ({ href, title, Icon }: ListItemProps) => {
  const { pathname } = useLocation();

  return (
    <div
      className={`flex items-center rounded-sm space-x-4 text-gray-600 py-2 px-3 hover:bg-gray-100 transition-all ease-in-out cursor-pointer ${
        pathname === href && 'bg-gray-100'
      }`}
    >
      {Icon}
      <Link to={href}>{title}</Link>
    </div>
  );
};

export default NavbarList;
