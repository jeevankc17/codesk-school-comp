import React from 'react';
import { redirect } from 'next/navigation';
import { getServerUser } from '@/actions/auth';
import ProjectFormClient from './components/ProjectFormClient';

export default async function CompetitionsProjectsPage() {
  const userData = await getServerUser();
  
  if (!userData) {
    redirect('/login');
  }

  const handleSubmit = async (formData: any) => {
    'use server';
    // Here you would typically send the data to your API
    console.log('Submitting form data:', formData);
    // Add API call here
  };

  return <ProjectFormClient initialData={{}} onSubmit={handleSubmit} hackathonName={''} organizerName={''} />;
}