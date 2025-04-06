import React from 'react';
import { BuilderCreateProps } from '@/types/types';

interface SkillsSectionProps extends BuilderCreateProps {}

export function SkillsSection({ 
  skills,
  experience,
  resumeUrl,
  portfolioUrl
}: SkillsSectionProps) {
  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold text-gray-900">Skills & Experience</h3>
      
      <div>
        <label className="block text-sm font-medium text-gray-500">Skills</label>
        <div className="mt-2 flex flex-wrap gap-2">
          {skills.map((skill) => (
            <span 
              key={skill}
              className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-500">Experience</label>
        <p className="mt-1">{experience || 'No experience provided'}</p>
      </div>

      {portfolioUrl && (
        <div>
          <label className="block text-sm font-medium text-gray-500">Portfolio</label>
          <a 
            href={portfolioUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-1 text-blue-600 hover:underline"
          >
            {portfolioUrl}
          </a>
        </div>
      )}

      {resumeUrl && (
        <div>
          <label className="block text-sm font-medium text-gray-500">Resume</label>
          <p className="mt-1 text-sm text-gray-500">{resumeUrl}</p>
        </div>
      )}
    </div>
  );
} 