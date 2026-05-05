import React from 'react';
import type { header_item } from '../types/header_item';
import { header_items } from '../data/header_items';
import { Link } from 'react-router-dom';
import clsx from 'clsx';
import { MdDarkMode, MdLightMode } from 'react-icons/md';

const Item: React.FC<header_item> = ({ text, link }) => {
  return (
    <Link
      to={link}
      className={clsx(
        "before:bg-accent/30 before:h-0.5 before:w-0 before:content-['']",
        'before:absolute before:-bottom-1 before:transition-all before:delay-150 hover:before:w-full',
        'relative font-bold capitalize',
      )}
    >
      {text}
    </Link>
  );
};

interface ItemsProps {
  items: header_item[];
}
const Items: React.FC<ItemsProps> = ({ items }) => {
  return (
    <ul className="hidden items-center gap-6 md:flex">
      {items.map((el) => (
        <li key={`header_item_${el.link}`}>
          <Item {...el} />
        </li>
      ))}
    </ul>
  );
};

export const Header: React.FC = () => {
  const [isDark, setIsDark] = React.useState<boolean>(false);

  React.useEffect(() => {
    if (isDark) document.documentElement.classList.add('dark');
    else document.documentElement.classList.remove('dark');
  }, [isDark]);

  return (
    <header className="bg-foreground flex h-16 items-center">
      <div className="container flex items-center justify-between">
        <div className="flex items-center gap-20">
          <h1 className="font-ernesto text-4xl font-bold md:text-5xl">
            Toppira
          </h1>
          <Items items={header_items} />
        </div>

        <div>
          <button
            className="cursor-pointer text-2xl"
            onClick={() => setIsDark((prev) => !prev)}
          >
            {isDark ? <MdLightMode /> : <MdDarkMode />}
          </button>
        </div>
      </div>
    </header>
  );
};
