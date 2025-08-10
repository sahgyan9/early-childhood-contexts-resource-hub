
import React from 'react';
import { introContent, pagesData } from '../data/content';
import { Link } from 'react-router-dom';

const HomePage: React.FC = () => {
  return (
    <div>
      {/* Hero Section */}
      <div className="relative rounded-2xl shadow-lg overflow-hidden mb-8">
        <img 
          src="https://images.pexels.com/photos/8613059/pexels-photo-8613059.jpeg?auto=compress&cs=tinysrgb&w=1920" 
          alt="An early childhood educator painting with two young children in a bright, colorful classroom."
          className="absolute inset-0 w-full h-full object-cover"
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-gradient-to-l from-black/10 via-black/20 to-black/50"></div>
        <div className="relative flex items-center min-h-[450px] md:min-h-[500px] p-6 sm:p-8">
            <div className="w-full max-w-7xl mx-auto flex justify-center md:justify-end">
                <div className="bg-brand-bg/95 p-8 md:p-10 rounded-xl shadow-2xl w-full max-w-xl lg:max-w-2xl backdrop-blur-sm border border-white/20">
                    <h1 className="text-4xl sm:text-5xl font-extrabold text-brand-primary mb-4 tracking-tight !leading-tight">
                        {introContent.heroTitle}
                    </h1>
                    <p className="text-lg sm:text-xl text-brand-text font-light">
                        {introContent.heroSubtitle}
                    </p>
                </div>
            </div>
        </div>
      </div>
      
      {/* Main Content */}
      <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
        <div className="p-8 sm:p-12">
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-brand-dark mb-5 border-b-4 border-brand-accent pb-3">
              Introduction
            </h2>
            <p className="mb-4 text-base leading-relaxed text-slate-600">
              The title of this resource is: <strong className="font-semibold text-brand-dark">{introContent.title}</strong>.
            </p>
            {introContent.introduction.map((p, i) => (
              <p key={i} className="mb-4 text-base leading-relaxed text-slate-600">{p}</p>
            ))}
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-brand-dark mb-5 border-b-4 border-brand-accent pb-3">
              Relevance to Early Childhood Education
            </h2>
            {introContent.relevance.map((p, i) => (
              <p key={i} className="mb-4 text-base leading-relaxed text-slate-600">{p}</p>
            ))}
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-brand-dark mb-5 border-b-4 border-brand-accent pb-3">
              Purpose of This Digital Portfolio
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {introContent.purpose.map((item, i) => (
                <div key={i} className="bg-brand-bg p-6 rounded-lg border border-gray-200">
                  <h3 className="font-bold text-lg text-brand-primary mb-2">{item.title}</h3>
                  <p className="text-sm text-slate-600">{item.description}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-brand-dark mb-5 border-b-4 border-brand-accent pb-3">
              Navigation and Structure
            </h2>
            <p className="mb-6 text-base leading-relaxed text-slate-600">{introContent.navigation.intro}</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {introContent.navigation.pages
                .filter(p => p.link !== '/') // Exclude home from the grid
                .map((page, i) => {
                  const pageId = page.link.replace('/', '');
                  const pageData = pagesData[pageId as keyof typeof pagesData];
                  if (!pageData) return null;
                  const Icon = pageData.icon;
                  return (
                    <Link key={i} to={page.link} className="group block p-4 bg-brand-bg hover:bg-brand-accent/30 rounded-lg transition-colors duration-200 border border-transparent hover:border-brand-accent">
                      <div className="flex items-center gap-3">
                        <div className="bg-brand-primary/10 p-2 rounded-full text-brand-primary group-hover:bg-white transition-colors">
                          <Icon />
                        </div>
                        <p className="font-semibold text-brand-primary">{page.title}</p>
                      </div>
                      <p className="text-sm text-brand-text mt-2 pl-12">{page.description}</p>
                    </Link>
                  );
              })}
            </div>
            <p className="mt-6 text-base leading-relaxed text-slate-600">{introContent.navigation.structure}</p>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-brand-dark mb-5 border-b-4 border-brand-accent pb-3">
              Theoretical Framework
            </h2>
            <p className="mb-6 text-base leading-relaxed text-slate-600">{introContent.framework.intro}</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {introContent.framework.theories.map((theory, i) => (
                <div key={i} className="p-4 bg-gray-50 border-l-4 border-brand-secondary rounded-r-lg">
                  <h4 className="font-bold text-brand-secondary">{theory.name}</h4>
                  <p className="text-sm text-slate-600 mt-1">{theory.description}</p>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default HomePage;