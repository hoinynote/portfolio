import React from 'react';
import EducationItem from './EducationItem';
import { education } from '@/data/content';

const Education = () => {
  return (
    <div className="flex flex-col gap-24">
      {[...education].reverse().map((item) => (
        <EducationItem
          key={item.id}
          name={item.name}
          period={item.period}
          // description이 undefined일 경우 빈 문자열을 넘겨 타입 안정성 확보
          description={item.description || ""}
        />
      ))}
    </div>
  );
};

export default Education;