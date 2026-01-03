export interface InformationProps {
  name: string;
  contact: { id: number; name: string; href: string; isEmail?: boolean }[];
  markdown?: string;
  imgSrc?: string;
}

export interface WorkExperienceProps {
  id: number;
  name: string;
  description?: string;
  position: string;
  period: string[];
  markdown?: string;
  imgSrc?: string;
}

export interface ProjectProps {
  id: number;
  name: string;
  description: string;
  body?: string;
  repoUrl: string;
  webUrl: string;      // [수정됨] ?가 없어야 합니다!
  isTeam: boolean;     // [수정됨] ?가 없어야 합니다!
  period: string[];
  stack: string[];
  imgSrc: string;
}

export interface AwardProps {
  id: number;
  name: string;
  date: string;
  organizer: string;
  description: string;
}

export interface DataProps {
  resumeTitle: {
    title: string;
  };
  information: InformationProps;
  workExperience: WorkExperienceProps[];
  project: ProjectProps[];
  activity: {
    id: number;
    name: string;
    description: string;
    period: string[];
  }[];
  education: {
    id: number;
    name: string;
    description?: string;
    period: string[];
  }[];
  certificate: {
    id: number;
    name: string;
    date: string;
    organizer: string;
  }[];
  award: AwardProps[];
}