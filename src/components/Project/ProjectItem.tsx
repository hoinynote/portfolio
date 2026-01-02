import Image from "next/image";
import Link from "next/link";
import Links from "./Links";
import { ProjectProps } from "@/types";

const ProjectItem = ({
  id,
  name,
  description,
  repoUrl,
  webUrl,
  period,
  stack,
  imgSrc,
}: ProjectProps) => {
  return (
    // 1. 카드 전체를 링크로 감싸고, hover 시 살짝 떠오르는 효과 추가
    <Link href={`/project/${id}`} className="group block mb-8">
      <div className="flex flex-col md:flex-row gap-6 p-6 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-2xl shadow-sm transition-all duration-300 hover:shadow-xl hover:-translate-y-1 hover:border-blue-500/50">
        
        {/* 2. 이미지 영역: 고정 크기를 유지하면서 이미지가 꽉 차게 설정 */}
        <div className="flex-shrink-0">
          <div className="relative w-full md:w-56 h-48 overflow-hidden rounded-xl border border-zinc-100 dark:border-zinc-800">
            {imgSrc ? (
              <Image
                src={imgSrc}
                alt={name}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
            ) : (
              <div className="w-full h-full bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center text-zinc-400">
                No Project Image
              </div>
            )}
          </div>
        </div>

        {/* 3. 텍스트 정보 영역 */}
        <div className="flex flex-col flex-grow gap-3">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <h3 className="text-2xl font-bold text-zinc-900 dark:text-zinc-100 group-hover:text-blue-500 transition-colors leading-tight">
              {name}
            </h3>
            <span className="text-sm font-medium text-zinc-500 dark:text-zinc-400 bg-zinc-100 dark:bg-zinc-800 px-3 py-1 rounded-full shrink-0">
              {period[0]} — {period[1]}
            </span>
          </div>

          {/* 설명글: 3줄까지만 노출하고 생략 처리 */}
          <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed line-clamp-3">
            {description}
          </p>

          {/* 4. 스택 태그: 파란색 계열의 깔끔한 뱃지 스타일 */}
          <div className="flex flex-wrap gap-2 mt-auto pt-2">
            {stack.map((tech) => (
              <span
                key={tech}
                className="px-2.5 py-1 text-xs font-semibold rounded-md bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 border border-blue-100 dark:border-blue-800/50"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* 5. 외부 링크: 클릭 시 상세페이지 이동 방지(stopPropagation) */}
          <div 
            className="mt-4 pt-4 border-t border-zinc-100 dark:border-zinc-800 flex justify-end" 
            onClick={(e) => e.preventDefault()} // 링크 영역에서는 카드 클릭 무시
          >
            <Links repoUrl={repoUrl} webUrl={webUrl} />
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProjectItem;