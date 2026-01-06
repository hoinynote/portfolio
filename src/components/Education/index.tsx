import React from 'react';
import EducationItem from './EducationItem';
import { education } from '@/data/content';

const Education = () => {
  return (
    <div className="flex flex-col gap-24">
      {[...education].reverse().map((education) => (
        <EducationItem
          key={education.id}
          {...education}
          /* 👇 이 부분이 반드시 추가되어야 에러가 해결됩니다 */
          description={education.description || ""}
        />
      ))}
    </div>
  );
};

export default Education;