
import React from 'react';

export interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  tags: string[];
}

export interface ChatMessage {
  role: 'user' | 'model';
  content: string;
}

export enum Section {
  HERO = 'hero',
  SERVICES = 'services',
  WHY_US = 'why-us',
  STATS = 'stats',
  CONTACT = 'contact'
}
