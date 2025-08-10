
import React from 'react';
import { PageContent, Resource, Partnership } from '../types';
import { BookIcon, MediaIcon, EducatorIcon } from '../components/icons';
import Accordion from '../components/Accordion';
import { PovertyRateChart, HousingStressChart, FamilyViolenceStats } from '../components/DataVisualizations';

const getYoutubeEmbedUrl = (url: string): string | null => {
    let videoId = null;
    const youtubeRegex = /(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|\S*?[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/;
    const match = url.match(youtubeRegex);
    if (match && match[1]) {
        videoId = match[1];
    }
    return videoId ? `https://www.youtube.com/embed/${videoId}` : null;
};


const ResourceCard: React.FC<{ resource: Resource }> = ({ resource }) => {
  const getIcon = () => {
    switch(resource.type) {
      case 'book': return <BookIcon />;
      case 'media': return <MediaIcon />;
      case 'educator': return <EducatorIcon />;
      default: return null;
    }
  };
  
  const youtubeEmbedUrl = resource.type === 'media' && resource.url ? getYoutubeEmbedUrl(resource.url) : null;

  if (youtubeEmbedUrl) {
    return (
      <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm flex flex-col h-full transition-shadow hover:shadow-md">
        <div className="flex items-center text-brand-primary mb-3">
          <div className="bg-brand-accent/20 p-2 rounded-full flex-shrink-0">{getIcon()}</div>
          <h4 className="ml-3 font-bold text-brand-dark">{resource.title}</h4>
        </div>
        <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0, overflow: 'hidden' }} className="mb-2 rounded-md bg-black">
           <iframe 
              style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
              src={youtubeEmbedUrl} 
              title={resource.title} 
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowFullScreen
            ></iframe>
        </div>
         <p className="text-sm text-brand-text flex-grow mt-2">{resource.description}</p>
      </div>
    );
  }

  const CardInnerContent = () => (
    <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm flex flex-col h-full transition-shadow hover:shadow-md">
      <div className="flex items-center text-brand-primary mb-2">
        <div className="bg-brand-accent/20 p-2 rounded-full flex-shrink-0">{getIcon()}</div>
        <h4 className="ml-3 font-bold text-brand-dark group-hover:underline">{resource.title}</h4>
      </div>
      {(resource.authorOrSource || resource.year) && (
        <p className="text-xs text-gray-500 mb-2 pl-12">
          {resource.authorOrSource}{resource.year && `, ${resource.year}`}
        </p>
      )}
      <p className="text-sm text-brand-text flex-grow pl-12">{resource.description}</p>
    </div>
  );

  if (resource.url) {
    return (
      <a href={resource.url} target="_blank" rel="noopener noreferrer" className="group block h-full">
        <CardInnerContent />
      </a>
    );
  }

  return <CardInnerContent />;
};

const PartnershipCard: React.FC<{ partnership: Partnership }> = ({ partnership }) => {
    const CardInnerContent = () => (
        <div className="bg-brand-primary/5 p-4 rounded-lg border border-brand-primary/20 transition-shadow hover:shadow-md h-full">
            <h4 className="font-bold text-brand-primary group-hover:underline">{partnership.name}</h4>
            <p className="text-sm text-brand-text mt-1">{partnership.description}</p>
        </div>
    );

    if (partnership.url) {
        return (
            <a href={partnership.url} target="_blank" rel="noopener noreferrer" className="group block h-full">
                <CardInnerContent />
            </a>
        );
    }
    
    return <CardInnerContent />;
};

interface ContentPageProps {
  content: PageContent;
}

const ContentPage: React.FC<ContentPageProps> = ({ content }) => {
  const Icon = content.icon;

  const renderVisualizations = () => {
    switch(content.id) {
      case 'economic':
        return (
          <>
            <PovertyRateChart />
            <HousingStressChart />
          </>
        );
      case 'crisis':
        return <FamilyViolenceStats />;
      default:
        return null;
    }
  };

  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
      <div className="p-6 sm:p-10">
        <header className="flex items-center gap-4 mb-6 text-brand-primary">
          <div className="w-16 h-16 bg-brand-accent/30 rounded-full flex items-center justify-center flex-shrink-0">
            <Icon />
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight">{content.title}</h1>
        </header>
        
        <div className="space-y-2">
          <Accordion title="Understanding the Context" startOpen={true}>
            {content.understanding.map((p, i) => <p key={i} className="mb-4">{p}</p>)}
            {renderVisualizations()}
          </Accordion>

          <Accordion title="Impact on Children and Families">
            <p className="mb-4">{content.impact.intro}</p>
            <ul className="list-disc list-inside space-y-2">
              {content.impact.points.map((p, i) => <li key={i}>{p}</li>)}
            </ul>
          </Accordion>

          <Accordion title="Social Policy and Australian Responses">
            <p className="mb-4">{content.policy.intro}</p>
            <ul className="list-disc list-inside space-y-2 mb-4">
              {content.policy.points.map((p, i) => <li key={i}>{p}</li>)}
            </ul>
            <blockquote className="text-base leading-relaxed bg-amber-50 p-4 rounded-lg border-l-4 border-amber-400">
                <p>{content.policy.conclusion}</p>
            </blockquote>
          </Accordion>

          <Accordion title="Strategies for Practice">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-2">
                {content.strategies.map((strategy, i) => (
                    <div key={i} className="bg-gray-50 p-4 rounded-lg border border-gray-200 hover:shadow-md transition-shadow h-full">
                        <p className="font-bold text-brand-secondary mb-2">Strategy {i+1}</p>
                        <p className="text-sm text-brand-text">{strategy}</p>
                    </div>
                ))}
            </div>
          </Accordion>

          <Accordion title="Community and Professional Partnerships">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
              {content.partnerships.map((p, i) => <PartnershipCard key={i} partnership={p} />)}
            </div>
          </Accordion>
          
          <Accordion title="Resources for Educators and Children">
            <div className="space-y-6 mt-2">
              <div>
                <h3 className="text-xl font-semibold text-brand-dark mb-3">For Educators</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {content.resources.educator.map((r, i) => <ResourceCard key={i} resource={r} />)}
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-brand-dark mt-6 mb-3">For Children (Birth–5 years)</h3>
                <h4 className="text-lg font-semibold text-gray-700 mb-3">Books</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {content.resources.children.books.map((r, i) => <ResourceCard key={i} resource={r} />)}
                </div>
                <h4 className="text-lg font-semibold text-gray-700 mt-6 mb-3">Media</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {content.resources.children.media.map((r, i) => <ResourceCard key={i} resource={r} />)}
                </div>
              </div>
            </div>
          </Accordion>
        </div>
      </div>
    </div>
  );
};

export default ContentPage;