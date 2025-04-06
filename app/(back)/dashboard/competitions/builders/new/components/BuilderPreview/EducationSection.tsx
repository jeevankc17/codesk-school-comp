import React from 'react';
import { BuilderCreateProps } from '@/types/types';

interface EducationSectionProps extends BuilderCreateProps {}

export default function EducationSection({ 
  institution,
  degree,
  fieldOfStudy,
  graduationYear
}: EducationSectionProps) {
  return (
    <div className="space-y-4">
      <h3 className="text-xl font-semibold">Education</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-500">Institution</label>
          <p className="mt-1">{institution || 'Not provided'}</p>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-500">Degree</label>
          <p className="mt-1">{degree || 'Not provided'}</p>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-500">Field of Study</label>
          <p className="mt-1">{fieldOfStudy || 'Not provided'}</p>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-500">Graduation Year</label>
          <p className="mt-1">{graduationYear || 'Not provided'}</p>
        </div>
      </div>
    </div>
  );
} 
