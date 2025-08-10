
import React, { useState, useEffect, useRef } from 'react';
import { HashRouter, Routes, Route, NavLink, useLocation } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ContentPage from './pages/ContentPage';
import ReferencesPage from './pages/ReferencesPage';
import ConclusionPage from './pages/ConclusionPage';
import { pagesData } from './data/content';

const navLinks = [
  { path: '/', label: 'Home', icon: pagesData.home.icon },
  { path: '/economic', label: 'Economic', icon: pagesData.economic.icon },
  { path: '/social', label: 'Social', icon: pagesData.social.icon },
  { path: '/cultural', label: 'Cultural', icon: pagesData.cultural.icon },
  { path: '/health', label: 'Health', icon: pagesData.health.icon },
  { path: '/crisis', label: 'Crisis', icon: pagesData.crisis.icon },
  { path: '/conclusion', label: 'Conclusion', icon: pagesData.conclusion.icon },
  { path: '/references', label: 'References', icon: pagesData.references.icon },
];

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <header className="bg-brand-primary sticky top-0 z-50 shadow-md">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0">
            <NavLink to="/" className="text-white text-xl font-bold">
              ECE Resource Hub
            </NavLink>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-2">
              {navLinks.map(link => {
                const Icon = link.icon;
                return (
                    <NavLink
                      key={link.path}
                      to={link.path}
                      className={({ isActive }) =>
                        `px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 flex items-center gap-2 ${
                          isActive
                            ? 'bg-brand-secondary text-white'
                            : 'text-gray-300 hover:bg-brand-secondary/50 hover:text-white'
                        }`
                      }
                    >
                      <Icon className="h-5 w-5" />
                      <span>{link.label}</span>
                    </NavLink>
                );
              })}
            </div>
          </div>
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-300 hover:text-white hover:bg-brand-secondary/50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-brand-primary focus:ring-white"
              aria-label="Open main menu"
            >
              {isOpen ? (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
              ) : (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" /></svg>
              )}
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map(link => {
              const Icon = link.icon;
              return (
                <NavLink
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={({ isActive }) =>
                    `block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200 flex items-center gap-3 ${
                      isActive ? 'bg-brand-secondary text-white' : 'text-gray-300 hover:bg-brand-secondary/50 hover:text-white'
                    }`
                  }
                >
                  <Icon /> {link.label}
                </NavLink>
              );
            })}
          </div>
        </div>
      )}
    </header>
  );
};

const Footer: React.FC = () => (
  <footer className="bg-brand-dark text-white mt-auto">
    <div className="container mx-auto py-6 px-4 sm:px-6 lg:px-8 text-center text-sm">
      <p>&copy; {new Date().getFullYear()} Early Childhood Contexts Resource Hub. A professional development tool.</p>
    </div>
  </footer>
);

const ScrollToTop: React.FC = () => {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0,0);
    }, [pathname]);

    return null;
};


const App: React.FC = () => {
  return (
    <HashRouter>
        <ScrollToTop />
        <div className="min-h-screen flex flex-col bg-brand-bg">
            <Header />
            <main className="flex-grow container mx-auto p-4 sm:p-6 lg:p-8">
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/economic" element={<ContentPage content={pagesData.economic} />} />
                    <Route path="/social" element={<ContentPage content={pagesData.social} />} />
                    <Route path="/cultural" element={<ContentPage content={pagesData.cultural} />} />
                    <Route path="/health" element={<ContentPage content={pagesData.health} />} />
                    <Route path="/crisis" element={<ContentPage content={pagesData.crisis} />} />
                    <Route path="/conclusion" element={<ConclusionPage />} />
                    <Route path="/references" element={<ReferencesPage />} />
                </Routes>
            </main>
            <Footer />
        </div>
    </HashRouter>
  );
};

export default App;
