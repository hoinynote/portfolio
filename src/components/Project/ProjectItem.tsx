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
  description, // 회색 박스 요약글
  body,        // 상세 본문 (Markdown)
  webUrl,
  period,
  stack,
  imgSrc,
  isLink = true,
}: ExtendedProjectProps) => {

  return (
    <article className="grid grid-cols-1 md:grid-cols-[280px_1fr] items-start mb-24 md:mb-32 border-t border-zinc-200 dark:border-zinc-800 pt-12 first:border-0 first:pt-0">
      
      {/* [왼쪽] Sticky 영역 */}
      <div className="flex flex-col gap-6 md:sticky md:top-24 h-fit pr-6 mb-8 md:mb-0 text-left">
        {/* 썸네일 */}
        <div className="relative w-36 h-36 bg-white dark:bg-zinc-800 rounded-2xl overflow-hidden shadow-sm border border-zinc-200 dark:border-zinc-700">
          {imgSrc ? (
            <Image src={imgSrc} alt={name} fill className="object-cover hover:scale-105 transition-transform duration-500" />
          ) : (
            <div className="flex items-center justify-center w-full h-full text-zinc-300 text-sm">No Img</div>
          )}
        </div>

        {/* 정보 */}
        <div className="flex flex-col gap-2">
          <h3 className="text-2xl font-black text-zinc-900 dark:text-white leading-tight break-keep">
            {name}
          </h3>
          <span className="text-lg font-bold text-zinc-700 dark:text-zinc-300">
            Data Engineer
          </span>
          <span className="font-mono text-sm font-medium text-zinc-500 dark:text-zinc-500">
            {period[0]} - {period[1]}
          </span>
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
        <div className="flex flex-wrap gap-2.5 mb-10">
          {stack.map((tech) => (
            <span key={tech} className="px-3 py-1.5 text-xs font-bold text-teal-800 bg-teal-50 dark:text-teal-200 dark:bg-teal-900/30 rounded border border-teal-100 dark:border-teal-900/50">
              {tech}
            </span>
          ))}
        </div>

        {/* 상세 본문 */}
        <div className="prose prose-base dark:prose-invert max-w-none 
          text-zinc-700 dark:text-zinc-300 
          prose-headings:font-black prose-headings:text-zinc-900 dark:prose-headings:text-white prose-headings:text-xl prose-headings:mb-4 prose-headings:mt-12 first:prose-headings:mt-0
          prose-p:leading-relaxed prose-p:my-4
          prose-li:my-2 prose-ul:my-4 prose-ul:list-disc prose-ul:pl-5
          prose-strong:text-zinc-900 dark:prose-strong:text-white prose-strong:font-extrabold">
          <ReactMarkdown>{body || ""}</ReactMarkdown>
        </div>

        {/* [버튼] 확실한 CTA(Call To Action) 스타일로 변경 */}
        <div className="flex items-center gap-4 mt-16 pt-8 border-t border-zinc-200 dark:border-zinc-700">
          {isLink && (
            <Link 
              href={`/project/${id}`}
              className="group relative inline-flex items-center gap-2 px-8 py-3.5 text-base font-bold text-white bg-zinc-900 dark:bg-zinc-100 dark:text-zinc-900 rounded-xl hover:bg-zinc-800 dark:hover:bg-white transition-all duration-300 shadow-md hover:shadow-xl hover:-translate-y-0.5"
            >
              <span>자세히 보기</span>
              {/* 화살표 아이콘 (Hover시 이동) */}
              <svg 
                className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor" 
                strokeWidth={2.5}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
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