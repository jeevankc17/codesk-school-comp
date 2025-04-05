import React from 'react';
import { redirect } from 'next/navigation';
import { getServerUser } from '@/actions/auth';
import { BuilderFormClient } from './components/BuilderFormClient';

export default async function CompetitionsBuildersPage() {
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

  return <BuilderFormClient initialData={{}} onSubmit={handleSubmit} />;
}