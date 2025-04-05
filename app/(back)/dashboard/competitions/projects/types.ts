export interface ProjectFormData {
  projectName: string;
  tagline: string;
  problem: string;
  challenges: string;
  technologies: string[];
  links: string[];
  videoDemo: string;
  coverImage: File | null;
  pictures: File[];
  logo: File | null;
  platforms: string[];
  builders: string[];
}

export interface ProjectFormProps {
  hackathonName: string;
  organizerName: string;
  initialData: Record<string, any>;
  onSubmit: (formData: any) => Promise<void>;
} 