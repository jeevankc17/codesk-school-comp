'use client';

import React, { useState } from 'react';
import { Box, Tab, Tabs } from '@mui/material';
import { ORGANIZER_FORM_TABS, OrganizerFormTabs } from '../constants/tabs';
import { OrganizerCreateProps } from '@/types/types';
import { OrganizerType } from '@prisma/client';
import { ProgressBar } from '../../../commons/ProgressBar';
import { FormNavigation } from '../../../commons/FormNavigation';
import { BasicInfoForm } from '../components/BasicInfoForm/BasicInfoForm';
import { ContactInfoForm } from '../components/ContactInfoForm/ContactInfoForm';
import { OrganizationDetailsForm } from '../components/OrganizationDetailsForm/OrganizationDetailsForm';
import { SocialLinksForm } from '../components/SocialLinksForm/SocialLinksForm';
import { OrganizerPreview } from '../components/OrganizerPreview/OrganizerPreview';
import { createOrganizer } from '@/actions/organizers';

export const OrganizerFormClient: React.FC<{
  initialData?: Partial<OrganizerCreateProps>;
}> = ({ initialData }) => {
  const [activeTab, setActiveTab] = useState<OrganizerFormTabs>(ORGANIZER_FORM_TABS.DETAILS);
  const [formData, setFormData] = useState<OrganizerCreateProps>({
    name: '',
    email: '',
    phone: '',
    role: '',
    street: '',
    city: '',
    state: '',
    country: '',
    zipCode: '',
    organizationName: '',
    organizationType: 'educational' as OrganizerType,
    description: '',
    website: '',
    logoUrl: '',
    establishedYear: new Date().getFullYear(),
    teamSize: 1,
    previousHackathons: 0,
    requiredSkills: [] as string[],
    github: '',
    linkedin: '',
    twitter: '',
    facebook: '',
    instagram: '',
  });

  const calculateProgress = () => {
    const sections = [
      {
        weight: 30,
        isComplete: () => Boolean(
          formData.name && 
          formData.email && 
          formData.phone && 
          formData.description
        ),
      },
      {
        weight: 20,
        isComplete: () => Boolean(
          formData.street &&
          formData.city &&
          formData.state &&
          formData.zipCode
        ),
      },
      {
        weight: 20,
        isComplete: () => Boolean(
          formData.organizationName &&
          formData.organizationType &&
          formData.description
        ),
      },
      {
        weight: 15,
        isComplete: () => Boolean(
          formData.github ||
          formData.linkedin
        ),
      },
      {
        weight: 15,
        isComplete: () => Boolean(
          formData.logoUrl
        ),
      },
    ];

    return sections.reduce((acc, section) => 
      acc + (section.isComplete() ? section.weight : 0), 0
    );
  };

  const handleTabChange = (event: React.SyntheticEvent, newValue: OrganizerFormTabs) => {
    setActiveTab(newValue);
  };

  const handlePrevious = () => {
    const tabs = Object.values(ORGANIZER_FORM_TABS);
    const currentIndex = tabs.indexOf(activeTab);
    if (currentIndex > 0) {
      setActiveTab(tabs[currentIndex - 1]);
    }
  };

  const handleNext = () => {
    const tabs = Object.values(ORGANIZER_FORM_TABS);
    const currentIndex = tabs.indexOf(activeTab);
    if (currentIndex < tabs.length - 1) {
      setActiveTab(tabs[currentIndex + 1]);
    }
  };

  const handleSubmit = async () => {
    try {
      await createOrganizer(formData);
      // After successful submission, redirect to the organizers list page
      window.location.href = '/dashboard/competitions/organizers';
    } catch (error) {
      console.error('Error creating organizer:', error);
      if (error instanceof Error) {
        alert(error.message);
      }
    }
  };

  const progress = calculateProgress();

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row justify-between items-center py-4 space-y-4 sm:space-y-0">
            <h1 className="text-xl sm:text-2xl font-bold text-gray-900">
              Create Organizer Profile
            </h1>
            <div className="w-full sm:w-1/3">
              <ProgressBar progress={progress} />
            </div>
            {progress === 100 ? (
              <button
                onClick={handleSubmit}
                className="w-full sm:w-auto px-6 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors"
              >
                Complete Profile
              </button>
            ) : (
              <div className="w-full sm:w-auto text-sm text-blue-600 bg-blue-50 px-4 py-2 rounded-md text-center">
                Complete all sections to proceed
              </div>
            )}
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Box sx={{ width: '100%' }}>
          <Tabs
            value={activeTab}
            onChange={handleTabChange}
            variant="scrollable"
            scrollButtons="auto"
          >
            {Object.entries(ORGANIZER_FORM_TABS).map(([key, label]) => (
              <Tab key={key} label={label} value={label} />
            ))}
          </Tabs>

          <Box sx={{ mt: 3 }}>
            {activeTab === ORGANIZER_FORM_TABS.DETAILS && (
              <div className="space-y-6">
                <BasicInfoForm 
                  formData={formData} 
                  setFormData={setFormData}
                  requiredFields={['name', 'email', 'phone', 'description']}
                />
                <FormNavigation onPrevious={handlePrevious} onNext={handleNext} />
              </div>
            )}
            {activeTab === ORGANIZER_FORM_TABS.CONTACT && (
              <div className="space-y-6">
                <ContactInfoForm 
                  formData={formData} 
                  setFormData={setFormData}
                />
                <FormNavigation onPrevious={handlePrevious} onNext={handleNext} />
              </div>
            )}
            {activeTab === ORGANIZER_FORM_TABS.ORGANIZATION && (
              <div className="space-y-6">
                <OrganizationDetailsForm 
                  formData={formData} 
                  setFormData={setFormData}
                />
                <FormNavigation onPrevious={handlePrevious} onNext={handleNext} />
              </div>
            )}
            {activeTab === ORGANIZER_FORM_TABS.SOCIAL_LINKS && (
              <div className="space-y-6">
                <SocialLinksForm 
                  formData={formData} 
                  setFormData={setFormData}
                />
                <FormNavigation onPrevious={handlePrevious} onNext={handleNext} />
              </div>
            )}
            {activeTab === ORGANIZER_FORM_TABS.PREVIEW && (
              <div className="space-y-6">
                <OrganizerPreview data={formData} />
                <div className="flex justify-center space-x-4">
                  <button
                    onClick={handleSubmit}
                    className="px-6 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors"
                  >
                    Submit
                  </button>
                </div>
              </div>
            )}
          </Box>
        </Box>
      </main>
    </div>
  );
};