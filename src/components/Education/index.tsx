import React from 'react';
import EducationItem from './EducationItem';
import { education } from '@/data/content'; // ⚠️ 주의: 데이터 경로가 다르다면 본인 파일에 맞춰 수정해주세요 (예: @/data/resume)

const Education = () => {
  return (
    <div className="flex flex-col gap-24">
      {[...education].reverse().map((education) => (
        <EducationItem
          key={education.id}
          {...education}
          // 👇 이 부분이 수정되었습니다: description이 없으면 빈 문자열("")을 전달하여 에러 방지
          description={education.description || ""}
        />
      ))}
    </div>
  );
};

export default Education;