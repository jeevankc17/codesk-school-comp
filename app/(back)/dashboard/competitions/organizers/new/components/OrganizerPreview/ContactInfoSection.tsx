import React from 'react';
import { OrganizerCreateProps } from '@/types/types';

interface ContactInfoSectionProps {
  data: OrganizerCreateProps;
}

export function ContactInfoSection({ data }: ContactInfoSectionProps) {
  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold text-gray-900">Contact Information</h3>
      <div className="space-y-3">
        <div>
          <label className="block text-sm font-medium text-gray-500">Address</label>
          {data.street}<br />
          {data.city}, {data.state} {data.zipCode}<br />
          {data.country}
        </div>
      </div>
    </div>
  );
} 