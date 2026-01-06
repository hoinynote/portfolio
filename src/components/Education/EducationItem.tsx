import React from 'react';

// interface를 확실하게 정의하여 외부에서 들어오는 id와 key 대응
interface EducationItemProps {
  id?: number;
  name: string;
  description?: string; // Optional로 설정
  period: string[];
}

const EducationItem = ({ name, description, period }: EducationItemProps) => {
  return (
    <div className="flex flex-col md:flex-row gap-2 md:gap-0 justify-between">
      <div className="flex flex-col gap-2">
        <h3 className="text-xl font-bold text-gray-700 dark:text-gray-100">
          {name}
        </h3>
        {/* 데이터가 있을 때만 렌더링하도록 조건부 처리 */}
        {description && (
          <p className="text-gray-500 dark:text-gray-300 text-sm whitespace-pre-wrap">
            {description}
          </p>
        )}
      </div>
      <div className="flex flex-col gap-2 shrink-0 md:text-right">
        {period.map((date) => (
          <span key={date} className="text-sm text-gray-400">
            {date}
          </span>
        ))}
      </div>
    </div>
  );
};

export default EducationItem;