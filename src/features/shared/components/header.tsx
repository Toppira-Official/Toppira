import type React from 'react';
import type { header_item } from '../types/header_item';
import { header_items } from '../data/header_items';
import { Link } from 'react-router-dom';
import clsx from 'clsx';

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
    <ul className="flex items-center gap-6">
      {items.map((el) => (
        <li key={`header_item_${el.link}`}>
          <Item {...el} />
        </li>
      ))}
    </ul>
  );
};

export const Header: React.FC = () => {
  return (
    <header className="bg-foreground flex h-16 items-center">
      <div className="container flex items-center gap-20">
        <h1 className="font-ernesto text-5xl font-bold">Toppira</h1>
        <Items items={header_items} />
      </div>
    </header>
  );
};
