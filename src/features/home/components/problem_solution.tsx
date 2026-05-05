import type React from 'react';
import { problem_solution_data } from '../data/problem_solution';

interface ListProps {
  items: string[];
  icon: React.ReactNode;
  iconColor: string;
}

const List: React.FC<ListProps> = ({ items, icon, iconColor }) => (
  <ul className="space-y-5">
    {items.map((item, i) => (
      <li key={i} className="flex gap-3">
        <span className={`mt-1 font-mono ${iconColor}`}>{icon}</span>
        <span className="text-sm sm:text-base">{item}</span>
      </li>
    ))}
  </ul>
);

export const ProblemSolution: React.FC = () => {
  return (
    <section className="bg-foreground w-full py-8">
      <div className="mx-auto grid max-w-6xl gap-8 px-6 md:grid-cols-2 md:gap-16">
        <div>
          <h2 className="font-ernesto mb-6 text-4xl">The Problems Today</h2>
          <List
            items={problem_solution_data.problems}
            icon="•"
            iconColor="text-red-500"
          />
        </div>

        <div>
          <h2 className="font-ernesto mb-6 text-4xl">
            How Toppira Solves Them
          </h2>
          <List
            items={problem_solution_data.solutions}
            icon="✔"
            iconColor="text-green-500"
          />
        </div>
      </div>
    </section>
  );
};
