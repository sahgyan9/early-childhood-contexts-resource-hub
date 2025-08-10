
import React from 'react';

export interface Resource {
  type: 'book' | 'media' | 'educator';
  title: string;
  authorOrSource: string;
  year?: number;
  description: string;
  url?: string;
}

export interface Partnership {
  name:string;
  description: string;
  url?: string;
}

export interface PageContent {
  id: string;
  title: string;
  icon: React.FC;
  understanding: string[];
  impact: {
    intro: string;
    points: string[];
  };
  policy: {
    intro: string;
    points: string[];
    conclusion: string;
  };
  strategies: string[];
  partnerships: Partnership[];
  resources: {
    educator: Resource[];
    children: {
      books: Resource[];
      media: Resource[];
    };
  };
}

export interface Reference {
    key: string;
    citation: string;
    url?: string;
}