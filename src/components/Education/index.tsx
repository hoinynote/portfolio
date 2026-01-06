import React from 'react';
import EducationItem from './EducationItem';
import { education } from '@/data/content'; // ⚠️ 데이터 경로가 본인과 맞는지 확인해주세요

const Education = () => {
  return (
    <div className="flex flex-col gap-24">
      {[...education].reverse().map((item) => (
        <EducationItem
          key={item.id}
          // 👇 스프레드 연산자(...)를 먼저 쓰고
          {...item}
          // 👇 description이 없으면 강제로 빈 문자열("")을 덮어씌워서 보냅니다.
          // 이렇게 하면 자식 컴포넌트가 필수값(string)을 원하든 선택값(string?)을 원하든 모두 통과합니다.
          description={item.description || ""}
        />
      ))}
    </div>
  );
};

export default Education;