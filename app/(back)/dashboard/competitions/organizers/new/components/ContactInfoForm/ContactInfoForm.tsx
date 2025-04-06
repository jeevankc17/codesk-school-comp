'use client';

import React, { useState } from 'react';
import { OrganizerCreateProps } from '@/types/types';
import { TextField } from '@mui/material';

interface ContactInfoFormProps {
  formData: OrganizerCreateProps;
  setFormData: React.Dispatch<React.SetStateAction<OrganizerCreateProps>>;
}

export const ContactInfoForm: React.FC<ContactInfoFormProps> = ({ formData, setFormData }) => {
  const handleInputChange = (field: keyof OrganizerCreateProps) => (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setFormData({ ...formData, [field]: event.target.value });
  };

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <TextField
          label="Street Address"
          value={formData.street}
          onChange={handleInputChange('street')}
          fullWidth
          required
        />
        <TextField
          label="City"
          value={formData.city}
          onChange={handleInputChange('city')}
          fullWidth
          required
        />
        <TextField
          label="State/Province"
          value={formData.state}
          onChange={handleInputChange('state')}
          fullWidth
          required
        />
        <TextField
          label="Postal Code"
          value={formData.zipCode}
          onChange={handleInputChange('zipCode')}
          fullWidth
          required
        />
      </div>
    </div>
  );
};