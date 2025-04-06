export const ORGANIZER_FORM_TABS = {
  DETAILS: 'Basic Info',
  CONTACT: 'Contact Info',
  ORGANIZATION: 'Organization',
  SOCIAL_LINKS: 'Social Links',
  PREVIEW: 'Preview'
} as const;

export type OrganizerFormTabs = typeof ORGANIZER_FORM_TABS[keyof typeof ORGANIZER_FORM_TABS];