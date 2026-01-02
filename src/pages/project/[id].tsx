import fs from 'fs';
import path from 'path';
import Head from 'next/head';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

import Layout from '../../components/Layout';
import Data from '../../../data.json';

// [수정 1] 데이터 타입 정의 (에러 해결 핵심)
interface ProjectData {
  id: number;
  name: string;
  description: string;
  stack: string[];
  repoUrl: string;
  webUrl: string;
  imgSrc?: string;
  period?: string[];
}

interface ProjectDetailProps {
  project: ProjectData;
  content: string;
}

const MarkdownStyles = {
  h1: 'text-3xl md:text-4xl font-extrabold mt-20 mb-8 border-b border-gray-200 dark:border-gray-700 pb-4 text-gray-900 dark:text-gray-50',
  h2: 'text-2xl md:text-3xl font-bold mt-16 mb-6 text-gray-800 dark:text-gray-200',
  h3: 'text-xl font-bold mt-10 mb-4 text-gray-800 dark:text-gray-200',
  p: 'mb-8 leading-relaxed text-lg text-gray-700 dark:text-gray-300 break-keep',
  ul: 'list-disc list-outside mb-8 ml-6 space-y-3 text-gray-700 dark:text-gray-300 text-lg leading-relaxed',
  ol: 'list-decimal list-outside mb-8 ml-6 space-y-3 text-gray-700 dark:text-gray-300 text-lg leading-relaxed',
  blockquote: 'border-l-4 border-blue-600 pl-6 py-4 my-10 bg-gray-50 dark:bg-gray-800/50 text-gray-700 dark:text-gray-300 italic rounded-r-lg',
  img: 'rounded-xl shadow-xl w-full max-w-5xl h-auto my-12 border border-gray-100 dark:border-gray-700 block mx-auto',
  strong: 'font-extrabold text-blue-600 dark:text-blue-400',
  a: 'text-blue-600 dark:text-blue-400 hover:underline font-medium decoration-2 underline-offset-4',
  code: 'bg-gray-100 dark:bg-gray-800 rounded px-2 py-1 font-mono text-sm text-pink-600 dark:text-pink-400',
  table: 'min-w-full border-collapse border border-gray-300 my-8 text-sm',
  th: 'border border-gray-300 px-4 py-3 bg-gray-100 dark:bg-gray-800 font-bold text-left',
  td: 'border border-gray-300 px-4 py-3',
};

// [수정 2] Props에 타입 적용 ({ project, content }: ProjectDetailProps)
const ProjectDetail = ({ project, content }: ProjectDetailProps) => {
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
          
          <div className="flex gap-4 pt-2">
            {project.repoUrl && (
              <a href={project.repoUrl} target="_blank" rel="noreferrer" 
                 className="inline-flex items-center gap-2 px-5 py-2.5 bg-black text-white dark:bg-white dark:text-black rounded-lg font-bold hover:opacity-80 transition-opacity">
                 GitHub Repo ↗
              </a>
            )}
            {project.webUrl && (
              <a href={project.webUrl} target="_blank" rel="noreferrer" 
                 className="inline-flex items-center gap-2 px-5 py-2.5 bg-gray-200 text-gray-900 dark:bg-gray-800 dark:text-white rounded-lg font-bold hover:bg-gray-300 dark:hover:bg-gray-700 transition-colors">
                 Live Demo ↗
              </a>
            )}
          </div>
        </header>

        <article className="prose prose-lg dark:prose-invert max-w-none w-full">
          {mounted && (
            <ReactMarkdown 
              remarkPlugins={[remarkGfm]}
              components={{
                // [수정 3] 불필요한 'node' 파라미터 제거 (ESLint 경고 해결)
                h1: (props) => <h1 className={MarkdownStyles.h1} {...props} />,
                h2: (props) => <h2 className={MarkdownStyles.h2} {...props} />,
                h3: (props) => <h3 className={MarkdownStyles.h3} {...props} />,
                p: (props) => <p className={MarkdownStyles.p} {...props} />,
                ul: (props) => <ul className={MarkdownStyles.ul} {...props} />,
                ol: (props) => <ol className={MarkdownStyles.ol} {...props} />,
                li: (props) => <li className="pl-2" {...props} />,
                blockquote: (props) => <blockquote className={MarkdownStyles.blockquote} {...props} />,
                img: (props) => (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img className={MarkdownStyles.img} {...props} alt={props.alt || "Project Image"} />
                ),
                a: (props) => <a className={MarkdownStyles.a} {...props} />,
                table: (props) => <table className={MarkdownStyles.table} {...props} />,
                th: (props) => <th className={MarkdownStyles.th} {...props} />,
                td: (props) => <td className={MarkdownStyles.td} {...props} />,
                code: ({inline, ...props}: any) => inline 
                  ? <code className={MarkdownStyles.code} {...props} /> 
                  : <code {...props} />,
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

export async function getStaticProps({ params }: any) {
  const projectId = params.id;
  const project = Data.project.find((p) => p.id.toString() === projectId);
  
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