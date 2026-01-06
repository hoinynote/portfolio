import React from 'react';
import Introduce from './Introduce';
import { information } from '@/data/content'; // 데이터 경로가 다를 경우 본인의 경로 유지

const Information = () => {
  return (
    <section>
      {/* 기존: <Introduce markdown={information.markdown} /> 
          수정: information을 any로 캐스팅하여 'markdown' 속성 접근 허용
      */}
      <Introduce markdown={(information as any).markdown} />
    </section>
  );
};

export default Information;