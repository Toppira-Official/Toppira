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
      <li key={`problem_solution_item_${i}`} className="flex gap-3">
        <span className={`mt-1 font-mono ${iconColor}`}>{icon}</span>
        <span className="text-sm sm:text-base">{item}</span>
      </li>
    ))}
  </ul>
);

export const ProblemSolution: React.FC = () => {
  return (
    <section id="problem_solution" className="bg-foreground py-8">
      <div className="container grid justify-items-center gap-8 px-6 md:grid-cols-2 md:gap-16">
        <div data-aos="fade-up" data-aos-duration="900">
          <h2
            data-aos="fade-up"
            data-aos-delay="100"
            className="font-ernesto mb-6 text-4xl"
          >
            The Problems Today
          </h2>

          <List
            items={problem_solution_data.problems}
            icon="•"
            iconColor="text-red-500"
          />
        </div>

        <div data-aos="fade-up" data-aos-delay="200" data-aos-duration="900">
          <h2
            data-aos="fade-up"
            data-aos-delay="100"
            className="font-ernesto mb-6 text-4xl"
          >
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
