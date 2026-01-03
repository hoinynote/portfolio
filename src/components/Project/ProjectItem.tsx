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
  repoUrl,
  webUrl,
  period,
  stack,
  imgSrc,
  isLink = true,
}: ExtendedProjectProps) => {

  const CardContent = (
    <div className={`flex flex-col md:flex-row w-full bg-white dark:bg-zinc-900 border border-gray-200 dark:border-zinc-800 rounded-xl overflow-hidden transition-all duration-300 ${isLink ? 'hover:shadow-lg hover:border-blue-500/30 cursor-pointer' : ''}`}>
      
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
            <h3 className={`text-xl font-bold text-gray-900 dark:text-gray-100 ${isLink ? 'group-hover:text-blue-600' : ''} transition-colors`}>
              {name}
            </h3>
            <span className="text-xs font-semibold text-gray-500 bg-gray-100 dark:bg-zinc-800 px-2.5 py-1 rounded-md w-fit whitespace-nowrap">
              {period[0]} - {period[1]}
            </span>
          </div>

          <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-5 line-clamp-3 md:line-clamp-4">
            {description}
          </p>
        </div>

        <div className="flex flex-wrap items-end justify-between gap-4 mt-2">
          {/* 스택 태그 */}
          <div className="flex flex-wrap gap-1.5">
            {stack.map((tech) => (
              <span key={tech} className="px-2 py-1 text-[11px] font-medium text-blue-600 bg-blue-50 dark:text-blue-300 dark:bg-blue-900/20 rounded border border-blue-100 dark:border-blue-900/30">
                {tech}
              </span>
            ))}
          </div>

          {/* [추가된 부분] 클릭 가능한 프로젝트일 경우 안내 문구 표시 */}
          {isLink ? (
            <div className="flex items-center gap-1 text-sm font-bold text-blue-600 dark:text-blue-400 group-hover:underline decoration-2 underline-offset-4">
              View Detail <span className="text-lg leading-none">→</span>
            </div>
          ) : (
            // 링크가 아닐 때 webUrl(배포 사이트)이 있다면 표시
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