'use client';

import React, { useState } from 'react';
import { OrganizerCreateProps } from '@/types/types';
import { TextField } from '@mui/material';

interface BasicInfoFormProps {
  formData: OrganizerCreateProps;
  setFormData: React.Dispatch<React.SetStateAction<OrganizerCreateProps>>;
  requiredFields: (keyof OrganizerCreateProps)[];
}

export const BasicInfoForm: React.FC<BasicInfoFormProps> = ({ 
  formData, 
  setFormData,
  requiredFields 
}) => {
  const handleInputChange = (field: keyof OrganizerCreateProps) => (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setFormData({ ...formData, [field]: event.target.value });
  };

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <TextField
          label="Full Name"
          value={formData.name}
          onChange={handleInputChange('name')}
          fullWidth
          required={requiredFields.includes('name')}
        />
        <TextField
          label="Email"
          type="email"
          value={formData.email}
          onChange={handleInputChange('email')}
          fullWidth
          required={requiredFields.includes('email')}
        />
        <TextField
          label="Phone Number"
          type="tel"
          value={formData.phone}
          onChange={handleInputChange('phone')}
          fullWidth
          required={requiredFields.includes('phone')}
        />
      </div>
      <TextField
        label="About"
        multiline
        rows={4}
        value={formData.description}
        onChange={handleInputChange('description')}
        fullWidth
        required={requiredFields.includes('description')}
      />
    </div>
  );
};