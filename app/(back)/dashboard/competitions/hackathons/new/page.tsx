import React from 'react';
import { redirect } from 'next/navigation';
import { getServerUser } from '@/actions/auth';
import { HackathonFormClient } from './components/HackathonFormClient';

export default async function HackathonsPage() {
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

  return <HackathonFormClient initialData={{}} onSubmit={handleSubmit} />;
}