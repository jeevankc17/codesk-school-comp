import React from 'react';
import { BuilderFormData } from '../../types';

interface BasicInfoSectionProps {
  data: BuilderFormData;
}

export function BasicInfoSection({ data }: BasicInfoSectionProps) {
  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold text-gray-900">Basic Information</h3>
      <div className="flex items-start space-x-4">
        {data.avatar && (
          <img
            src={URL.createObjectURL(data.avatar)}
            alt="Profile"
            className="w-24 h-24 rounded-full object-cover"
          />
        )}
        <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-500">Full Name</label>
            <p className="mt-1">{data.name || 'Not provided'}</p>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-500">Email</label>
            <p className="mt-1">{data.email || 'Not provided'}</p>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-500">Phone</label>
            <p className="mt-1">{data.phone || 'Not provided'}</p>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-500">Gender</label>
            <p className="mt-1 capitalize">{data.gender || 'Not provided'}</p>
          </div>
        </div>
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-500">Bio</label>
        <p className="mt-1">{data.bio || 'No bio provided'}</p>
      </div>
    </div>
  );
} 