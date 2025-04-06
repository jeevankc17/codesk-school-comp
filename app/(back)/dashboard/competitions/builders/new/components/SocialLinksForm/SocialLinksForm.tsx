import React from 'react';
import { Box, TextField, Typography, InputAdornment } from '@mui/material';
import { Github, Linkedin, Twitter, Globe } from 'lucide-react';
import { BuilderCreateProps } from '@/types/types';

const SocialLinksForm: React.FC<{
  formData: BuilderCreateProps;
  setFormData: (data: BuilderCreateProps) => void;
}> = ({ formData, setFormData }) => {
  const handleSocialLinkChange = (platform: 'github' | 'linkedin' | 'twitter' | 'website', value: string) => {
    setFormData({
      ...formData,
      [platform]: value
    });
  };

  return (
    <Box className="space-y-6">
      <div className="space-y-2">
        <Typography variant="h6">GitHub</Typography>
        <TextField
          fullWidth
          value={formData.github || ''}
          onChange={(e) => setFormData({ ...formData, github: e.target.value })}
          placeholder="GitHub username"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <Github className="h-5 w-5 text-gray-400" />
              </InputAdornment>
            )
          }}
        />
      </div>

      <div className="space-y-2">
        <Typography variant="h6">LinkedIn</Typography>
        <TextField
          fullWidth
          value={formData.linkedin || ''}
          onChange={(e) => setFormData({ ...formData, linkedin: e.target.value })}
          placeholder="LinkedIn profile URL"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <Linkedin className="h-5 w-5 text-gray-400" />
              </InputAdornment>
            )
          }}
        />
      </div>

      <div className="space-y-2">
        <Typography variant="h6">Twitter</Typography>
        <TextField
          fullWidth
          value={formData.twitter || ''}
          onChange={(e) => setFormData({ ...formData, twitter: e.target.value })}
          placeholder="Twitter username"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <Twitter className="h-5 w-5 text-gray-400" />
              </InputAdornment>
            )
          }}
        />
      </div>

      <div className="space-y-2">
        <Typography variant="h6">Website</Typography>
        <TextField
          fullWidth
          value={formData.website || ''}
          onChange={(e) => setFormData({ ...formData, website: e.target.value })}
          placeholder="Personal website URL"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <Globe className="h-5 w-5 text-gray-400" />
              </InputAdornment>
            )
          }}
        />
      </div>
    </Box>
  );
};

export default SocialLinksForm;