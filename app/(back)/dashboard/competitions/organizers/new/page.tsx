import React from 'react';
import { redirect } from 'next/navigation';
import { getServerUser } from '@/actions/auth';
import { OrganizerFormClient } from './components/OrganizerFormClient';

export default async function CompetitionsOrganizersPage() {
  const userData = await getServerUser();
  
  if (!userData) {
    redirect('/login');
  }

  return <OrganizerFormClient initialData={{}} />;
}