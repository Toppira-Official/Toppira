import { Link } from 'react-router-dom';
import { footer_data } from '../data/footer';
import type React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="border-border bg-background border-t">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-1">
            <h3 className="text-primary text-xl font-semibold">
              {footer_data.brand.name}
            </h3>
            <p className="text-muted mt-4 max-w-sm text-sm leading-7">
              {footer_data.brand.description}
            </p>
          </div>

          {footer_data.sections.map((section) => (
            <div key={section.title}>
              <h4 className="text-primary text-sm font-semibold tracking-wide uppercase">
                {section.title}
              </h4>

              <ul className="mt-4 space-y-3">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.href}
                      className="text-muted hover:text-primary text-sm transition-colors duration-200"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-border mt-12 flex flex-col gap-4 border-t pt-6 md:flex-row md:items-center md:justify-between">
          <p className="text-muted text-sm">
            © {new Date().getFullYear()} {footer_data.brand.name}. All rights
            reserved.
          </p>

          <p className="text-muted text-sm">{footer_data.bottomText}</p>
        </div>
      </div>
    </footer>
  );
};
