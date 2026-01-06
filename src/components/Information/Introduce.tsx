import React from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

// 에러 원인이었던 import { information } ... 라인을 삭제했습니다.

const Introduce = ({ markdown }: any) => {
  return (
    <ReactMarkdown remarkPlugins={[remarkGfm]}>
      {markdown ?? ""}
    </ReactMarkdown>
  );
};

export default Introduce;