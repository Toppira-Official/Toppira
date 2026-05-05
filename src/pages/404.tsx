import type React from 'react';
import { Link } from 'react-router-dom';

export const NotFound: React.FC = () => {
  return (
    <main className="bg-background flex min-h-screen items-center justify-center px-6">
      <div className="text-center">
        <p className="text-muted text-sm">Error 404</p>

        <h1 className="text-primary mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
          This page does not exist or is still under development.
        </h1>

        <p className="text-muted mt-4 text-sm sm:text-base">
          The URL you visited is not available right now. It may be part of a
          future Toppira release.
        </p>

        <div className="mt-8 flex items-center justify-center gap-4">
          <Link
            to="/"
            className="bg-primary text-primary-foreground inline-flex items-center justify-center rounded-xl px-5 py-2.5 text-sm transition-colors hover:opacity-90"
          >
            Back to home
          </Link>
        </div>
      </div>
    </main>
  );
};
