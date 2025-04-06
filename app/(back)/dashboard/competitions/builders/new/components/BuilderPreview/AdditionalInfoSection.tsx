import React from 'react';
import { BuilderCreateProps } from '@/types/types';

interface AdditionalInfoSectionProps extends BuilderCreateProps {}

export function AdditionalInfoSection({ 
  interests,
  dietaryRestrictions,
  emergencyContactName,
  emergencyContactRelation,
  emergencyContactPhone
}: AdditionalInfoSectionProps) {
  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold text-gray-900">Additional Information</h3>
      
      <div>
        <label className="block text-sm font-medium text-gray-500">Interests</label>
        <div className="mt-2 flex flex-wrap gap-2">
          {interests.map((interest) => (
            <span 
              key={interest}
              className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm"
            >
              {interest}
            </span>
          ))}
        </div>
      </div>

      {dietaryRestrictions && (
        <div>
          <label className="block text-sm font-medium text-gray-500">Dietary Restrictions</label>
          <p className="mt-1">{dietaryRestrictions}</p>
        </div>
      )}

      <div>
        <label className="block text-sm font-medium text-gray-500">Emergency Contact</label>
        <div className="mt-2 space-y-2">
          <p>Name: {emergencyContactName || 'Not provided'}</p>
          <p>Relationship: {emergencyContactRelation || 'Not provided'}</p>
          <p>Phone: {emergencyContactPhone || 'Not provided'}</p>
        </div>
      </div>
    </div>
  );
} 