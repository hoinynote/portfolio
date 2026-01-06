import React from 'react';

interface EducationItemProps {
  id?: number;
  name: string;
  description?: string;  // 👈 여기에 물음표(?)가 있는지 꼭 확인하세요!
  period: string[];
}

const EducationItem = ({ name, description, period }: EducationItemProps) => {
  return (
    <div className="flex flex-col md:flex-row gap-2 md:gap-0 justify-between">
      <div className="flex flex-col gap-2">
        <h3 className="text-xl font-bold text-gray-700 dark:text-gray-100">
          {name}
        </h3>
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