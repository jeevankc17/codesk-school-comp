import React from 'react';
import { redirect } from 'next/navigation';
import { getServerUser } from '@/actions/auth';
import { BuilderFormClient } from './components/BuilderFormClient';
import { createBuilder } from '@/actions/builders';

export default async function CompetitionsBuildersPage() {
  const userData = await getServerUser();
  
  if (!userData) {
    redirect('/login');
  }

  return <BuilderFormClient initialData={{}} />;
}