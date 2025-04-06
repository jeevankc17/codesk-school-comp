import React, { useEffect } from 'react';
import { Box, Typography, Chip, InputAdornment, Button } from '@mui/material';
import { BuilderCreateProps } from '@/types/types';
import { Attachment } from '@mui/icons-material';

const SkillsForm: React.FC<{
  formData: BuilderCreateProps;
  setFormData: (data: BuilderCreateProps) => void;
}> = ({ formData, setFormData }) => {
  const handleSkillAdd = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter' && event.currentTarget.value.trim()) {
      const newSkill = event.currentTarget.value.trim();
      if (!formData.skills.includes(newSkill)) {
        setFormData({
          ...formData,
          skills: [...formData.skills, newSkill]
        });
      }
      event.currentTarget.value = '';
    }
  };

  const handleSkillDelete = (skillToDelete: string) => {
    setFormData({
      ...formData,
      skills: formData.skills.filter(skill => skill !== skillToDelete)
    });
  };

  const handleResumeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const fileUrl = URL.createObjectURL(file);
      setFormData({ ...formData, resumeUrl: fileUrl });
      // Clean up the URL when the component unmounts
      return () => URL.revokeObjectURL(fileUrl);
    }
  };

  return (
    <Box className="space-y-6">
      <div className="space-y-2">
        <Typography variant="h6">Skills*</Typography>
        <Typography variant="body2" color="text.secondary">
          Press enter after each skill
        </Typography>
        <Box sx={{ mb: 2 }}>
          <input
            type="text"
            placeholder="e.g., React, TypeScript, Node.js"
            onKeyPress={handleSkillAdd}
            style={{ width: '100%', padding: '10px', fontSize: '16px' }}
          />
        </Box>
        <Box sx={{ mt: 2, display: 'flex', flexWrap: 'wrap', gap: 1 }}>
          {formData.skills.map((skill) => (
            <Chip
              key={skill}
              label={skill}
              onDelete={() => handleSkillDelete(skill)}
            />
          ))}
        </Box>
      </div>

      <div className="space-y-2">
        <Typography variant="h6">Experience*</Typography>
        <Box sx={{ mb: 2 }}>
          <textarea
            rows={4}
            value={formData.experience || ''}
            onChange={(e) => setFormData({ ...formData, experience: e.target.value || '' })}
            placeholder="Describe your relevant experience..."
            style={{ width: '100%', padding: '10px', fontSize: '16px' }}
          />
        </Box>
      </div>

      <div className="space-y-2">
        <Typography variant="h6">Portfolio URL</Typography>
        <Box sx={{ mb: 2 }}>
          <input
            type="url"
            value={formData.portfolioUrl || ''}
            onChange={(e) => setFormData({ ...formData, portfolioUrl: e.target.value || '' })}
            placeholder="https://your-portfolio.com"
            style={{ width: '100%', padding: '10px', fontSize: '16px' }}
          />
        </Box>
      </div>

      <div className="space-y-2">
        <Typography variant="h6" sx={{ ml: 0 }}>
          Resume
        </Typography>
        <Box sx={{ mb: 3, ml: 0 }}>
          <input
            type="file"
            accept=".pdf,.doc,.docx"
            onChange={handleResumeChange}
            style={{ display: 'none' }}
            id="resume-upload"
          />
          <label htmlFor="resume-upload">
            <Button
              variant="outlined"
              startIcon={<Attachment />}
              sx={{ ml: 0 }}
              component="span"
            >
              {formData.resumeUrl ? 'Change Resume' : 'Upload Resume'}
            </Button>
          </label>
          {formData.resumeUrl && (
            <Typography variant="caption" color="text.secondary" sx={{ mt: 1, ml: 0 }}>
              Resume uploaded successfully
            </Typography>
          )}
        </Box>
      </div>
    </Box>
  );
};

export default SkillsForm;