import React from 'react';
import { Box, TextField, Typography, Select, MenuItem, Button, Avatar } from '@mui/material';
import { BuilderCreateProps, GenderEnum } from '@/types/types';
import { TShirtSize } from '@prisma/client';
import { UploadButton } from '@/lib/uploadthing';

interface BasicInfoFormProps {
  formData: BuilderCreateProps;
  setFormData: (data: BuilderCreateProps) => void;
}

const BasicInfoForm: React.FC<BasicInfoFormProps> = ({ formData, setFormData }) => {
  const handleProfilePictureChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const fileUrl = URL.createObjectURL(file);
      setFormData({ ...formData, avatarUrl: fileUrl });
      return () => URL.revokeObjectURL(fileUrl);
    }
  };

  return (
    <Box className="space-y-6">
      <div className="space-y-2">
        <Typography variant="h6">Full Name*</Typography>
        <TextField
          fullWidth
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          placeholder="John Doe"
        />
      </div>

      <div className="space-y-2">
        <Typography variant="h6">Email*</Typography>
        <TextField
          fullWidth
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          placeholder="john.doe@example.com"
        />
      </div>

      <div className="space-y-2">
        <Typography variant="h6">Phone*</Typography>
        <TextField
          fullWidth
          value={formData.phone}
          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
          placeholder="123-456-7890"
        />
      </div>

      <div className="space-y-2">
        <Typography variant="h6" sx={{ ml: 0 }}>
          Profile Picture
        </Typography>
        <Box sx={{ mb: 3, ml: 0 }}>
          <input
            type="file"
            accept="image/*"
            onChange={handleProfilePictureChange}
            style={{ display: 'none' }}
            id="profile-picture-upload"
          />
          <label htmlFor="profile-picture-upload">
            <Button
              variant="outlined"
              startIcon={<Avatar sx={{ width: 24, height: 24 }} />}
              sx={{ ml: 0 }}
              component="span"
            >
              {formData.avatarUrl ? 'Change Picture' : 'Upload Picture'}
            </Button>
          </label>
          {formData.avatarUrl && (
            <Typography variant="caption" color="text.secondary" sx={{ mt: 1, ml: 0 }}>
              Profile picture uploaded successfully
            </Typography>
          )}
        </Box>
      </div>

      <div className="space-y-2">
        <Typography variant="h6">Gender*</Typography>
        <Select
          fullWidth
          value={formData.gender}
          onChange={(e) => setFormData({ ...formData, gender: e.target.value as GenderEnum })}
        >
          <MenuItem value="male">Male</MenuItem>
          <MenuItem value="female">Female</MenuItem>
          <MenuItem value="other">Other</MenuItem>
        </Select>
      </div>

      <div className="space-y-2">
        <Typography variant="h6">T-Shirt Size*</Typography>
        <Select
          fullWidth
          value={formData.tShirtSize}
          onChange={(e) => setFormData({ ...formData, tShirtSize: e.target.value as TShirtSize })}
        >
          <MenuItem value="S">Small (S)</MenuItem>
          <MenuItem value="M">Medium (M)</MenuItem>
          <MenuItem value="L">Large (L)</MenuItem>
          <MenuItem value="XL">Extra Large (XL)</MenuItem>
          <MenuItem value="XXL">2X Large (XXL)</MenuItem>
        </Select>
      </div>

      <div className="space-y-2">
        <Typography variant="h6">Bio</Typography>
        <TextField
          fullWidth
          multiline
          rows={4}
          value={formData.bio}
          onChange={(e) => setFormData({ ...formData, bio: e.target.value })}
          placeholder="Tell us about yourself..."
        />
      </div>
    </Box>
  );
}

export default BasicInfoForm;