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

// [중요] ProjectProps는 여기서 딱 한 번만 정의합니다.
export interface ProjectProps {
  id: number;
  name: string;
  description: string; // 회색 박스 요약
  body?: string;       // 상세 내용 (마크다운)
  repoUrl: string;
  webUrl?: string;     // 물음표(?)가 있어야 합니다
  isTeam?: boolean;
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