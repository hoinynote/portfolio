import Image from "next/image";
import Link from "next/link";
import ReactMarkdown from "react-markdown";
import Links from "./Links";
import { ProjectProps } from "@/types";

interface ExtendedProjectProps extends ProjectProps {
  isLink?: boolean;
}

const ProjectItem = ({
  id,
  name,
  description,
  body, // 본문 내용 (다시 복구됨)
  webUrl,
  period,
  stack,
  imgSrc,
  member,
  role,
  isLink = true,
}: ExtendedProjectProps) => {

  return (
    <article className="grid grid-cols-1 md:grid-cols-[280px_1fr] items-start mb-24 md:mb-32 border-t border-zinc-200 dark:border-zinc-800 pt-12 first:border-0 first:pt-0">
      
      {/* [왼쪽] Sticky 영역: 썸네일 및 메타 정보 */}
      <div className="flex flex-col gap-6 md:sticky md:top-24 h-fit pr-6 mb-8 md:mb-0 text-left">
        {/* 썸네일 */}
        <div className="relative w-36 h-36 bg-white dark:bg-zinc-800 rounded-2xl overflow-hidden shadow-sm border border-zinc-200 dark:border-zinc-700">
          {imgSrc ? (
            <Image src={imgSrc} alt={name} fill className="object-cover hover:scale-105 transition-transform duration-500" />
          ) : (
            <div className="flex items-center justify-center w-full h-full text-zinc-300 text-sm">No Img</div>
          )}
        </div>

        {/* 정보 영역 */}
        <div className="flex flex-col gap-2">
          <h3 className="text-2xl font-black text-zinc-900 dark:text-white leading-tight break-keep">
            {name}
          </h3>
          
          <div className="flex flex-col gap-1">
            {/* 인원 정보 */}
            {member && (
              <span className="text-sm font-medium text-zinc-500 dark:text-zinc-400">
                {member}
              </span>
            )}

            {/* 역할 (Role) */}
            <span className="text-lg font-bold text-blue-600 dark:text-blue-400">
              {role || "Data Engineer"}
            </span>

            {/* 기간 */}
            <span className="font-mono text-sm font-medium text-zinc-400 dark:text-zinc-500 mt-1">
              {period[0]} - {period[1]}
            </span>
          </div>
        </div>
      </div>

      {/* [오른쪽] 상세 콘텐츠 영역 */}
      <div className="flex flex-col md:border-l-2 border-zinc-300 dark:border-zinc-600 pl-0 md:pl-12 pb-4">
        
        {/* 회색 요약 박스 */}
        <div className="bg-zinc-100 dark:bg-[#2C2C2C] rounded-lg p-6 mb-6 border border-zinc-200 dark:border-zinc-700/50 shadow-sm">
          <p className="text-zinc-700 dark:text-zinc-300 text-base leading-relaxed font-medium">
            {description}
          </p>
        </div>

        {/* 기술 스택 */}
        <div className="flex flex-wrap gap-2.5 mb-8">
          {stack.map((tech) => (
            <span key={tech} className="px-3 py-1.5 text-xs font-bold text-teal-800 bg-teal-50 dark:text-teal-200 dark:bg-teal-900/30 rounded border border-teal-100 dark:border-teal-900/50">
              {tech}
            </span>
          ))}
        </div>

        {/* [복구됨] 본문 텍스트 렌더링 영역 */}
        <div className="prose prose-base dark:prose-invert max-w-none 
          text-zinc-700 dark:text-zinc-300 
          prose-headings:font-black prose-headings:text-zinc-900 dark:prose-headings:text-white prose-headings:text-xl prose-headings:mb-4 prose-headings:mt-8 first:prose-headings:mt-0
          prose-p:leading-relaxed prose-p:my-4
          prose-li:my-2 prose-ul:my-4 prose-ul:list-disc prose-ul:pl-5
          prose-strong:text-zinc-900 dark:prose-strong:text-white prose-strong:font-extrabold
          prose-img:rounded-xl prose-img:shadow-lg prose-img:border prose-img:border-zinc-200 dark:prose-img:border-zinc-700">
          <ReactMarkdown>{body || ""}</ReactMarkdown>
        </div>

        {/* 버튼 영역 (업그레이드된 디자인 유지) */}
        <div className="flex items-center gap-6 mt-12 pt-0">
          {isLink && (
            <Link 
              href={`/project/${id}`}
              className="group relative inline-flex items-center justify-between gap-6 px-8 py-4 overflow-hidden rounded-2xl bg-white/60 dark:bg-zinc-900/60 backdrop-blur-md border-2 border-blue-500/30 hover:border-blue-600 transition-all duration-300 hover:shadow-[0_0_30px_rgba(37,99,235,0.25)] hover:-translate-y-1 w-full md:w-auto"
            >
              {/* 텍스트: 굵고 크게 */}
              <span className="text-lg font-black text-zinc-800 dark:text-zinc-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors tracking-tight">
                프로젝트 자세히 보기
              </span>
              
              {/* 아이콘 원형 배경: 진한 파란색 포인트 */}
              <span className="flex items-center justify-center w-10 h-10 rounded-full bg-blue-600 text-white shadow-lg group-hover:scale-110 group-hover:bg-blue-500 transition-all duration-300">
                <svg 
                  className="w-5 h-5 -rotate-45 group-hover:rotate-0 transition-transform duration-300" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor" 
                  strokeWidth={3}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </span>
            </Link>
          )}
          
          {webUrl && (
             <div onClick={(e) => e.preventDefault()}>
               <Links repoUrl="" webUrl={webUrl} />
             </div>
           )}
        </div>

      </div>
    </article>
  );
};

export default ProjectItem;