export interface Event {
  id: string;
  name: string;
  time: string;
  venue: string;
  address: string;
  icon: React.ReactNode;
  note?: string;
  isRestricted?: boolean;
}

export interface DressCode {
  family: string;
  colors: string[];
  colorClasses: string[];
}

export interface Contact {
  name: string;
  phone: string;
  role: string;
}

export interface WeddingDate {
  day: string;
  date: string;
  month: string;
  year: string;
}
