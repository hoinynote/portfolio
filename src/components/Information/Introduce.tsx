import React from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
// import { InformationProps } from "@/types"; // 이 줄은 이제 필요 없으므로 주석 처리하거나 삭제해도 됩니다.

// 타입을 any로 변경하여 strict한 체크를 우회합니다.
const Introduce = ({ markdown }: any) => {
  return (
    <ReactMarkdown remarkPlugins={[remarkGfm]}>
      {markdown ?? ""}
    </ReactMarkdown>
  );
};

export default Introduce;