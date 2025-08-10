
import React from 'react';
import { conclusionContent } from '../data/content';

const ConclusionPage: React.FC = () => {
  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
      <div className="p-8 sm:p-12">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-brand-primary mb-8 tracking-tight">
          Conclusion
        </h1>

        <section>
          <h2 className="text-3xl font-bold text-brand-dark mb-5 border-b-4 border-brand-accent pb-3">
            Concluding Thoughts
          </h2>
          {conclusionContent.map((p, i) => (
            <p key={i} className="mb-4 text-base leading-relaxed text-slate-600">{p}</p>
          ))}
        </section>
      </div>
    </div>
  );
};

export default ConclusionPage;
