import Image from "next/image";
import Link from "next/link";
import Links from "./Links";
import { ProjectProps } from "@/types";

interface ExtendedProjectProps extends ProjectProps {
  isLink?: boolean;
}

const ProjectItem = ({
  id,
  name,
  description,
  // repoUrl,  <-- 제거함 (경고 해결)
  webUrl,
  period,
  stack,
  imgSrc,
  isLink = true,
}: ExtendedProjectProps) => {

  const CardContent = (
    <div className={`flex flex-col md:flex-row w-full bg-white dark:bg-zinc-900 border border-gray-200 dark:border-zinc-800 rounded-xl overflow-hidden transition-all duration-300 ${isLink ? 'hover:shadow-lg hover:border-black/20 dark:hover:border-white/20 cursor-pointer' : ''}`}>
      
      {/* 1. 이미지 영역 */}
      {imgSrc ? (
        <div className="w-full md:w-64 h-52 md:h-auto relative flex-shrink-0 bg-gray-50 dark:bg-zinc-800 border-b md:border-b-0 md:border-r border-gray-100 dark:border-zinc-800">
          <Image
            src={imgSrc}
            alt={name}
            fill
            className={`object-cover ${isLink ? 'group-hover:scale-105' : ''} transition-transform duration-500`}
          />
        </div>
      ) : (
        <div className="w-full md:w-64 h-48 md:h-auto bg-gray-100 dark:bg-zinc-800 flex items-center justify-center text-gray-300 text-sm">
          No Image
        </div>
      )}

      {/* 2. 텍스트 정보 영역 */}
      <div className="flex flex-col flex-grow p-6 justify-between">
        <div>
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-3">
            <h3 className={`text-xl font-bold text-black dark:text-white ${isLink ? 'group-hover:underline underline-offset-4' : ''} transition-all`}>
              {name}
            </h3>
            <span className="text-xs font-semibold text-zinc-500 bg-zinc-100 dark:bg-zinc-800 px-2.5 py-1 rounded-md w-fit whitespace-nowrap">
              {period[0]} - {period[1]}
            </span>
          </div>

          <p className="text-zinc-700 dark:text-zinc-300 text-sm leading-relaxed mb-5 line-clamp-3 md:line-clamp-4 font-medium">
            {description}
          </p>
        </div>

        <div className="flex flex-wrap items-end justify-between gap-4 mt-2">
          {/* 스택 태그 */}
          <div className="flex flex-wrap gap-1.5">
            {stack.map((tech) => (
              <span key={tech} className="px-2 py-1 text-[11px] font-bold text-zinc-700 bg-zinc-100 dark:text-zinc-300 dark:bg-zinc-800 rounded">
                {tech}
              </span>
            ))}
          </div>

          {/* 클릭 유도 또는 링크 */}
          {isLink ? (
            <div className="flex items-center gap-1 text-sm font-bold text-black dark:text-white group-hover:underline decoration-2 underline-offset-4">
              View Detail <span className="text-lg leading-none">→</span>
            </div>
          ) : (
            webUrl && (
              <div onClick={(e) => e.preventDefault()}> 
                <Links repoUrl="" webUrl={webUrl} /> 
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );

  if (isLink) {
    return (
      <Link href={`/project/${id}`} className="group block h-full">
        {CardContent}
      </Link>
    );
  }

  return <div className="block h-full">{CardContent}</div>;
};

export default ProjectItem;