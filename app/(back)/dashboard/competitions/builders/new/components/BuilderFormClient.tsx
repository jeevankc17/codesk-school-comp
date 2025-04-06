'use client';

import React, { useState } from 'react';
import { Box, Tab, Tabs } from '@mui/material';
import { BUILDER_FORM_TABS, BuilderFormTabs } from '../constants/tabs';
import { BuilderCreateProps, GenderEnum } from '@/types/types';
import { TShirtSize } from '@prisma/client';
import { ProgressBar } from '../../../commons/ProgressBar';
import { FormNavigation } from '../../../commons/FormNavigation';
import BasicInfoForm from '../components/BasicInfoForm/BasicInfoForm';
import EducationForm from '../components/EducationForm/EducationForm';
import SkillsForm from '../components/SkillsForm/SkillsForm';
import SocialLinksForm from '../components/SocialLinksForm/SocialLinksForm';
import AdditionalInfoForm from '../components/AdditionalInfoForm/AdditionalInfoForm';
import { BuilderPreview } from '../components/BuilderPreview/BuilderPreview';
import { createBuilder } from '@/actions/builders';
import { redirect } from 'next/navigation';

export const BuilderFormClient: React.FC<{
  initialData?: Partial<BuilderCreateProps>;
}> = ({ initialData }) => {
  const [activeTab, setActiveTab] = useState<BuilderFormTabs>(BUILDER_FORM_TABS.BASIC_INFO);
  const [formData, setFormData] = useState<BuilderCreateProps>({
    name: '',
    email: '',
    phone: '',
    avatarUrl: '',
    bio: '',
    gender: '' as GenderEnum,
    tShirtSize: '' as TShirtSize,
    institution: '',
    degree: '',
    fieldOfStudy: '',
    graduationYear: new Date().getFullYear(),
    skills: [],
    experience: '',
    resumeUrl: '',
    portfolioUrl: '',
    github: '',
    linkedin: '',
    twitter: '',
    website: '',
    interests: [],
    dietaryRestrictions: '',
    emergencyContactName: '',
    emergencyContactRelation: '',
    emergencyContactPhone: '',
  });

  const calculateProgress = () => {
    const sections = [
      {
        weight: 30,
        isComplete: () => Boolean(
          formData.name && 
          formData.email && 
          formData.phone && 
          formData.bio
        ),
      },
      {
        weight: 20,
        isComplete: () => Boolean(
          formData.institution &&
          formData.degree
        ),
      },
      {
        weight: 20,
        isComplete: () => Boolean(
          formData.skills.length &&
          formData.experience
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
          formData.emergencyContactName &&
          formData.emergencyContactPhone
        ),
      },
    ];

    return sections.reduce((acc, section) => 
      acc + (section.isComplete() ? section.weight : 0), 0
    );
  };

  const handleTabChange = (event: React.SyntheticEvent, newValue: BuilderFormTabs) => {
    setActiveTab(newValue);
  };

  const handlePrevious = () => {
    const tabs = Object.values(BUILDER_FORM_TABS);
    const currentIndex = tabs.indexOf(activeTab);
    if (currentIndex > 0) {
      setActiveTab(tabs[currentIndex - 1]);
    }
  };

  const handleNext = () => {
    const tabs = Object.values(BUILDER_FORM_TABS);
    const currentIndex = tabs.indexOf(activeTab);
    if (currentIndex < tabs.length - 1) {
      setActiveTab(tabs[currentIndex + 1]);
    }
  };

  const handleSubmit = async () => {
    try {
      await createBuilder(formData);
      // After successful submission, redirect to the builders list page
      window.location.href = '/dashboard/competitions/builders';
    } catch (error) {
      console.error('Error creating builder:', error);
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
              Create Builder Profile
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
            {Object.values(BUILDER_FORM_TABS).map((tab) => (
              <Tab key={tab} label={tab} value={tab} />
            ))}
          </Tabs>

          <Box sx={{ mt: 3 }}>
            {activeTab === BUILDER_FORM_TABS.BASIC_INFO && (
              <div className="space-y-6">
                <BasicInfoForm formData={formData} setFormData={setFormData} />
                <FormNavigation onPrevious={handlePrevious} onNext={handleNext} />
              </div>
            )}
            {activeTab === BUILDER_FORM_TABS.EDUCATION && (
              <div className="space-y-6">
                <EducationForm formData={formData} setFormData={setFormData} />
                <FormNavigation onPrevious={handlePrevious} onNext={handleNext} />
              </div>
            )}
            {activeTab === BUILDER_FORM_TABS.SKILLS && (
              <div className="space-y-6">
                <SkillsForm formData={formData} setFormData={setFormData} />
                <FormNavigation onPrevious={handlePrevious} onNext={handleNext} />
              </div>
            )}
            {activeTab === BUILDER_FORM_TABS.SOCIAL && (
              <div className="space-y-6">
                <SocialLinksForm formData={formData} setFormData={setFormData} />
                <FormNavigation onPrevious={handlePrevious} onNext={handleNext} />
              </div>
            )}
            {activeTab === BUILDER_FORM_TABS.ADDITIONAL && (
              <div className="space-y-6">
                <AdditionalInfoForm formData={formData} setFormData={setFormData} />
                <FormNavigation 
                  onPrevious={handlePrevious} 
                  onNext={handleNext}
                />
              </div>
            )}
            {activeTab === BUILDER_FORM_TABS.PREVIEW && (
              <div className="space-y-6">
                <BuilderPreview data={formData} />
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