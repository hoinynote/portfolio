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
  repoUrl: string;
  webUrl?: string;
  isTeam?: boolean;
  period: string[];
  stack: string[];
  markdown?: string;
  imgSrc?: string;
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
    description: string;
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

export interface ProjectProps {
  id: number;
  name: string;
  description: string; // 회색 박스에 들어갈 요약글
  body?: string;       // 아래쪽에 나올 상세 설명 (불렛 포인트 등)
  webUrl: string;
  repoUrl: string;
  isTeam: boolean;
  period: string[];
  stack: string[];
  imgSrc: string;
}

// ... 나머지 코드는 그대로 유지
