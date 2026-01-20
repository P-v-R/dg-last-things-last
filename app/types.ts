export type ContainerType = 'filing-cabinet' | 'footlocker' | 'inbox';

export interface FileItem {
  id: string;
  name: string;
  type: 'folder' | 'document' | 'email' | 'photo' | 'evidence';
  priority: boolean;
  content?: string;
  imageUrl?: string; // For photos/evidence with actual images
  dateModified: string;
  size?: string;
  // For emails
  from?: string;
  to?: string;
  subject?: string;
  // For folders
  children?: FileItem[];
}

export interface Container {
  id: string;
  type: ContainerType;
  name: string;
  description: string;
  files: FileItem[];
  createdAt: string;
}

export const containerTypeLabels: Record<ContainerType, string> = {
  'filing-cabinet': 'Filing Cabinet',
  'footlocker': 'Footlocker',
  'inbox': 'Email Inbox',
};

export const fileTypeIcons: Record<FileItem['type'], string> = {
  folder: '📁',
  document: '📄',
  email: '✉️',
  photo: '🖼️',
  evidence: '📦',
};
