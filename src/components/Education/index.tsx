import React from 'react';
import EducationItem from './EducationItem';
import data from '../../../data.json'; 

const Education = () => {
  // data를 any로 캐스팅하여 구조적 엄격함을 해결합니다.
  const educationData = (data as any).education || [];

  return (
    <div className="flex flex-col gap-24">
      {[...educationData].reverse().map((item: any, index: number) => (
        <EducationItem
          key={item.id || index}
          name={item.name}
          period={item.period}
          // item에 description이 없을 수도 있으므로 안전하게 처리합니다.
          description={item.description || ""}
        />
      ))}
    </div>
  );
};

export default Education;