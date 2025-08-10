
import React from 'react';
import { referencesContent } from '../data/content';
import { Reference } from '../types';

const ReferenceItem: React.FC<{ reference: Reference }> = ({ reference }) => (
  <li className="mb-4 leading-relaxed text-sm group">
    <p className="text-slate-600" dangerouslySetInnerHTML={{ __html: reference.citation }} />
    {reference.url && (
      <a href={reference.url} target="_blank" rel="noopener noreferrer" className="text-brand-secondary hover:underline break-words opacity-80 group-hover:opacity-100 transition-opacity">
        {reference.url}
      </a>
    )}
  </li>
);

const ReferencesPage: React.FC = () => {
  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
      <div className="p-8 sm:p-12">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-brand-primary mb-8 tracking-tight">
          References
        </h1>

        <section>
          <h2 className="text-3xl font-bold text-brand-dark mb-5 border-b-4 border-brand-accent pb-3">
            References (APA 7th Style)
          </h2>
          <ul className="list-none">
            {referencesContent.map((ref) => (
              <ReferenceItem key={ref.key} reference={ref} />
            ))}
          </ul>
        </section>
      </div>
    </div>
  );
};

export default ReferencesPage;
