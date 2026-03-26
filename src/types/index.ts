export type LocalizedString = {
  en: string;
  es: string;
};

export type Zone = {
  id: string;
  slug: string;
  title: LocalizedString;
  shortDescription: LocalizedString;
  longDescription: LocalizedString;
  colorToken: string;
  icon: string;
  heroIllustration: string;
  learningGoals: string[];
  ageRanges: string[];
  featuredStations: string[];
};

export type Station = {
  id: string;
  slug: string;
  zoneId: string;
  title: LocalizedString;
  summary: LocalizedString;
  physicalDescription: LocalizedString;
  whatChildrenDo: LocalizedString;
  learningGoals: string[];
  caregiverPrompts: LocalizedString[];
  atHomeActivity: LocalizedString;
  ageMin: number;
  ageMax: number;
  skillTags: string[];
  heroImage: string;
  activityType?: string;
  relatedStations: string[];
  featured: boolean;
};

export type Activity = {
  id: string;
  slug: string;
  title: LocalizedString;
  activityType: string;
  estimatedMinutes: number;
  ageRanges: string[];
  skills: string[];
  materialsNeeded: LocalizedString[];
  steps: LocalizedString[];
  printablePdfUrl?: string;
  relatedStationId?: string;
  theme?: string;
  featured: boolean;
};

export type CaregiverGuide = {
  id: string;
  slug: string;
  title: LocalizedString;
  body: LocalizedString;
  topicTags: string[];
  relatedZones?: string[];
  relatedStations?: string[];
};
