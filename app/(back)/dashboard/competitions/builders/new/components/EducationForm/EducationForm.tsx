import React from 'react';
import { Box, TextField, Typography } from '@mui/material';
import { BuilderCreateProps } from '@/types/types';

const EducationForm: React.FC<{
  formData: BuilderCreateProps;
  setFormData: (data: BuilderCreateProps) => void;
}> = ({ formData, setFormData }) => {
  const handleEducationChange = (field: 'institution' | 'degree' | 'fieldOfStudy' | 'graduationYear', value: string | number) => {
    setFormData({
      ...formData,
      [field]: value
    });
  };

  return (
    <Box className="space-y-6">
      <div className="space-y-2">
        <Typography variant="h6">Institution Name*</Typography>
        <TextField
          fullWidth
          value={formData.institution}
          onChange={(e) => handleEducationChange('institution', e.target.value)}
          placeholder="University Name"
        />
      </div>

      <div className="space-y-2">
        <Typography variant="h6">Degree*</Typography>
        <TextField
          fullWidth
          value={formData.degree}
          onChange={(e) => handleEducationChange('degree', e.target.value)}
          placeholder="Bachelor's/Master's/PhD"
        />
      </div>

      <div className="space-y-2">
        <Typography variant="h6">Field of Study*</Typography>
        <TextField
          fullWidth
          value={formData.fieldOfStudy}
          onChange={(e) => handleEducationChange('fieldOfStudy', e.target.value)}
          placeholder="Computer Science/Engineering"
        />
      </div>

      <div className="space-y-2">
        <Typography variant="h6">Graduation Year*</Typography>
        <TextField
          fullWidth
          type="number"
          value={formData.graduationYear}
          onChange={(e) => handleEducationChange('graduationYear', parseInt(e.target.value))}
          placeholder="2025"
        />
      </div>
    </Box>
  );
};

export default EducationForm;