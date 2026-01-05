export interface InformationProps {
  name: string;
  contact: { id: number; name: string; href: string; isEmail?: boolean }[];
  intro: { id: number; title: string; description: string }[];
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
  webUrl: string;
  isTeam: boolean;
  period: string[];
  stack: string[];
  imgSrc: string;
  member?: string; // [추가] 인원 정보 (예: "3인 팀 프로젝트")
  role?: string;   // [추가] 역할 정보
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