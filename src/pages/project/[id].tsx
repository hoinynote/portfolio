import fs from 'fs';
import path from 'path';
import Head from 'next/head';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

import Layout from '../../components/Layout';
import Data from '../../../data.json';

const MarkdownStyles = {
  h1: 'text-3xl font-bold mt-16 mb-6 border-b border-gray-200 pb-4 dark:border-gray-700 text-gray-900 dark:text-gray-100',
  h2: 'text-2xl font-bold mt-12 mb-4 text-gray-800 dark:text-gray-200',
  h3: 'text-xl font-semibold mt-8 mb-3 text-gray-800 dark:text-gray-300',
  p: 'mb-6 leading-8 text-lg text-gray-700 dark:text-gray-300',
  ul: 'list-disc list-outside mb-6 ml-6 space-y-2 text-gray-700 dark:text-gray-300',
  blockquote: 'border-l-4 border-blue-500 pl-6 py-4 my-8 bg-gray-50 dark:bg-gray-800 italic rounded-r-lg',
  img: 'rounded-xl shadow-lg w-full h-auto my-10 border dark:border-gray-700 block mx-auto',
  code: 'bg-gray-100 dark:bg-gray-800 rounded px-2 py-1 font-mono text-sm text-pink-600 dark:text-pink-400',
};

const ProjectDetail = ({ project, content }) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!project) return <Layout><div className="p-20 text-center">Project not found</div></Layout>;

  return (
    <Layout>
      <Head>
        <title>{project.name} | Portfolio</title>
      </Head>

      <div className="w-full max-w-4xl mx-auto px-6 py-12">
        <div className="mb-8">
          <Link href="/" className="text-gray-500 hover:text-black dark:hover:text-white transition-colors text-sm font-medium">
            ← 메인으로 돌아가기
          </Link>
        </div>

        <header className="flex flex-col gap-6 border-b border-gray-200 dark:border-gray-800 pb-10 mb-10">
          <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 dark:text-white leading-tight">
            {project.name}
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 font-light">
            {project.description}
          </p>
          <div className="flex flex-wrap gap-2">
            {project.stack.map((tech) => (
              <span key={tech} className="px-3 py-1.5 bg-gray-100 dark:bg-gray-800 rounded-full text-sm font-semibold border dark:border-gray-700">
                {tech}
              </span>
            ))}
          </div>
        </header>

        <article className="prose prose-lg dark:prose-invert max-w-none w-full">
          {/* 하이드레이션 에러 방지를 위해 클라이언트 마운트 후에만 렌더링 */}
          {mounted && (
            <ReactMarkdown 
              remarkPlugins={[remarkGfm]}
              components={{
                h1: ({node, ...props}) => <h1 className={MarkdownStyles.h1} {...props} />,
                h2: ({node, ...props}) => <h2 className={MarkdownStyles.h2} {...props} />,
                h3: ({node, ...props}) => <h3 className={MarkdownStyles.h3} {...props} />,
                p: ({node, ...props}) => <p className={MarkdownStyles.p} {...props} />,
                img: ({node, ...props}) => (
                  <span className="block w-full">
                    <img className={MarkdownStyles.img} {...props} alt={props.alt || "Project Image"} />
                  </span>
                ),
                blockquote: ({node, ...props}) => <blockquote className={MarkdownStyles.blockquote} {...props} />,
                code: ({node, inline, ...props}) => <code className={MarkdownStyles.code} {...props} />,
              }}
            >
              {content}
            </ReactMarkdown>
          )}
        </article>
      </div>
    </Layout>
  );
};

export async function getStaticPaths() {
  const paths = Data.project.map((p) => ({ params: { id: p.id.toString() } }));
  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const projectId = params.id;
  const project = Data.project.find((p) => p.id.toString() === projectId);
  
  // [중요] public/markdown/project 폴더 내부의 파일을 읽습니다.
  const markdownPath = path.join(process.cwd(), 'public', 'markdown', 'project', `${projectId}.md`);
  
  let content = '';
  try {
    content = fs.readFileSync(markdownPath, 'utf8');
  } catch (err) {
    console.error("File Read Error:", markdownPath);
    content = `## 내용을 불러올 수 없습니다.\n파일 경로: public/markdown/project/${projectId}.md`;
  }

  return { props: { project, content } };
}

export default ProjectDetail;