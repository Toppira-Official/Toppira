import React, { useState } from 'react';
import { usecases_data } from '../data/usecase';
import clsx from 'clsx';

export const UseCases: React.FC = () => {
  const [selectedId, setSelectedId] = useState(usecases_data[0].id);

  const selectedCase = usecases_data.find((c) => c.id === selectedId);

  return (
    <section id="usecases" className="container">
      <h2
        data-aos="fade-up"
        data-aos-duration="800"
        className="mb-8 text-center text-4xl"
      >
        Who Is It For?
      </h2>

      <div className="mb-12 flex flex-wrap justify-center gap-6">
        {usecases_data.map(({ id, label }, i) => {
          const isActive = selectedId === id;
          return (
            <button
              key={id}
              data-aos="fade-up"
              data-aos-delay={100 + i * 100}
              data-aos-duration="600"
              onClick={() => setSelectedId(id)}
              className={clsx(
                'cursor-pointer rounded-lg px-4 py-2',
                isActive
                  ? 'bg-primary text-primary-foreground shadow-md'
                  : 'bg-surface',
              )}
            >
              {label}
            </button>
          );
        })}
      </div>

      {selectedCase && (
        <div
          key={selectedId}
          data-aos="fade-up"
          data-aos-duration="800"
          className="bg-foreground mx-auto max-w-3xl rounded-lg p-6 shadow"
        >
          <ul className="list-inside list-disc space-y-3">
            {selectedCase.outcomes.map((item, i) => (
              <li
                key={i}
                data-aos="fade-right"
                data-aos-delay={200 + i * 100}
                data-aos-duration="600"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      )}
    </section>
  );
};
