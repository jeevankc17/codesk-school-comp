import React from 'react';
import { 
  Linkedin, 
  Twitter, 
  Github, 
  Facebook, 
  Instagram 
} from 'lucide-react';
import { OrganizerCreateProps } from '@/types/types';

interface SocialLinksSectionProps {
  data: OrganizerCreateProps;
}

export function SocialLinksSection({ data }: SocialLinksSectionProps) {
  const socialLinks = [
    { icon: Linkedin, link: data.linkedin || undefined, label: 'LinkedIn' },
    { icon: Twitter, link: data.twitter || undefined, label: 'Twitter' },
    { icon: Github, link: data.github || undefined, label: 'GitHub' },
    { icon: Facebook, link: data.facebook || undefined, label: 'Facebook' },
    { icon: Instagram, link: data.instagram || undefined, label: 'Instagram' },
  ];

  const activeSocialLinks = socialLinks.filter(link => link.link);

  if (activeSocialLinks.length === 0) {
    return null;
  }

  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold text-gray-900">Social Links</h3>
      <div className="flex flex-wrap gap-4">
        {activeSocialLinks.map(({ icon: Icon, link, label }) => (
          <a
            key={label}
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 bg-gray-100 rounded-md hover:bg-gray-200 transition-colors"
          >
            <Icon className="w-5 h-5" />
            <span>{label}</span>
          </a>
        ))}
      </div>
    </div>
  );
}