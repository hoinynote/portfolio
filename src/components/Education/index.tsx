import React from 'react';
import EducationItem from './EducationItem';
// 최상위 루트에 있는 data.json을 직접 불러옵니다. 
// 경로가 다르다면 ../../../data.json 등으로 조정이 필요할 수 있습니다.
import data from '../../../data.json'; 

const Education = () => {
  // data.json 구조에 따라 data.education 또는 data로 접근합니다.
  const educationData = data.education || [];

  return (
    <div className="flex flex-col gap-24">
      {[...educationData].reverse().map((item, index) => (
        <EducationItem
          key={item.id || index}
          name={item.name}
          period={item.period}
          // description이 없거나 undefined일 경우 빈 문자열 전달
          description={item.description || ""}
        />
      ))}
    </div>
  );
};

export default Education;