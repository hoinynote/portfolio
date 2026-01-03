import fsPromises, * as fs from "fs/promises";
import path from "path";
import { NextPage } from "next";
import Image from "next/image";
import ReactMarkdown from "react-markdown";

import Footer from "@/components/Footer";
import Layout from "@/components/Layout";
import ResumeTitle from "@/components/ResumeTitle";
import ProjectItem from "@/components/Project/ProjectItem";
import { DataProps, ProjectProps, WorkExperienceProps } from "@/types";

const Home: NextPage<DataProps> = ({
  resumeTitle,
  information,
  workExperience,
  project,
  activity,
  education,
  certificate,
  award,
}) => {
  const featuredProjects = project.slice(0, 3);
  const otherProjects = project.slice(3);

  return (
    <>
      <ResumeTitle resumeTitle={resumeTitle} />
      
      <Layout>
        
        {/* Intro Section */}
        <section className="pt-8 pb-20 animate-fade-in-up">
          
          {/* 포부 문구: 아주 진하고 선명하게 */}
          <div className="mb-16">
            <h1 className="text-3xl md:text-5xl font-black text-black dark:text-white leading-tight tracking-tight">
              데이터의 무게를 견디는 <br />
              <span className="text-zinc-500 dark:text-zinc-400">단단한 엔지니어링</span>을 지향합니다.
            </h1>
          </div>

          <div className="flex flex-col md:flex-row gap-10 md:gap-16 items-start mb-24">
            
            {/* [왼쪽] 사진 */}
            <div className="flex-shrink-0">
               <div className="relative w-36 h-48 md:w-40 md:h-52 bg-gray-100 dark:bg-zinc-800 overflow-hidden shadow-sm border border-gray-200 dark:border-zinc-700">
                 <Image 
                   src="/images/profile.png" 
                   alt="Profile"
                   fill
                   className="object-cover"
                   priority
                 />
               </div>
            </div>

            {/* [오른쪽] 정보 영역 */}
            <div className="flex-1 w-full flex flex-col gap-8 pt-2">
              
              {/* 이름 및 직무 */}
              <div className="border-b-2 border-black dark:border-white pb-6">
                <h2 className="text-4xl font-black text-black dark:text-white mb-2 tracking-tight">
                  유호인
                </h2>
                <p className="text-xl text-zinc-800 dark:text-zinc-300 font-bold">
                  Data Engineer / DBA
                </p>
              </div>

              {/* 기본 정보: 글씨를 진하게 변경 */}
              <div className="flex flex-col gap-4">
                <h3 className="font-bold text-black dark:text-white text-sm uppercase tracking-wider mb-1">
                  기본 정보
                </h3>
                {/* 텍스트 색상을 zinc-800(진한 회색)으로 변경하여 가독성 강화 */}
                <div className="grid grid-cols-[80px_1fr] gap-y-3 text-base text-zinc-900 dark:text-zinc-200 font-medium">
                  <span className="font-bold text-zinc-500 dark:text-zinc-500">생년월일</span>
                  <span>1998. 04. 13</span>
                  
                  <span className="font-bold text-zinc-500 dark:text-zinc-500">전화번호</span>
                  <span>010-3339-6022</span>
                  
                  <span className="font-bold text-zinc-500 dark:text-zinc-500">이메일</span>
                  <a href="mailto:ghdls3070@naver.com" className="hover:text-black dark:hover:text-white underline underline-offset-4 transition-colors">
                    ghdls3070@naver.com
                  </a>
                </div>
              </div>

            </div>
          </div>

          {/* 2. 학력 (Education) - 설명 제거 및 가독성 강화 */}
          <div className="mb-24">
            <h3 className="text-2xl font-black text-black dark:text-white border-b-2 border-black dark:border-white pb-4 mb-8">
              Education
            </h3>
            
            <div className="flex flex-col gap-6">
              {education.map((edu) => (
                <div key={edu.id} className="flex flex-col md:flex-row md:justify-between md:items-end border-b border-gray-200 dark:border-zinc-800 pb-4 last:border-0">
                  {/* 학교명: 아주 진하게 */}
                  <h4 className="text-xl md:text-2xl font-bold text-black dark:text-white tracking-tight">
                    {edu.name}
                  </h4>
                  {/* 기간: 폰트 조금 키우고 진하게 */}
                  <span className="font-mono text-zinc-600 dark:text-zinc-400 text-sm md:text-base font-medium whitespace-nowrap mt-1 md:mt-0">
                    {edu.period[0]} ~ {edu.period[1]}
                  </span>
                  {/* description 부분 삭제됨 */}
                </div>
              ))}
            </div>
          </div>

          {/* 3. 자기소개 (About Me) - 본문 글씨 진하게 */}
          <div className="mb-24">
            <h3 className="text-2xl font-black text-black dark:text-white border-b-2 border-black dark:border-white pb-4 mb-10">
              About Me
            </h3>
            {/* prose-lg, text-black 적용으로 가독성 극대화 */}
            <div className="prose prose-lg dark:prose-invert max-w-none text-black dark:text-zinc-100 leading-relaxed font-medium">
              <ReactMarkdown>{information.markdown}</ReactMarkdown>
            </div>
          </div>

        </section>

        {/* 4. 주요 프로젝트 (Featured Projects) */}
        <section className="flex flex-col gap-10 mb-24">
          <div className="border-b-2 border-black dark:border-white pb-4">
            <h2 className="text-2xl font-black text-black dark:text-white mb-1">
              Featured Projects
            </h2>
            <p className="text-zinc-600 dark:text-zinc-400 text-base font-medium">
              핵심 데이터 엔지니어링 프로젝트
            </p>
          </div>
          
          <div className="grid grid-cols-1 gap-16 pt-6">
            {featuredProjects.map((item) => (
              <ProjectItem key={item.id} {...item} isLink={true} />
            ))}
          </div>
        </section>

        {/* 5. 기타 프로젝트 (Additional Projects) */}
        <section className="flex flex-col gap-10 mb-24">
          <div className="border-b-2 border-black dark:border-white pb-4">
            <h2 className="text-xl font-black text-black dark:text-white mb-1">
              Additional Projects
            </h2>
            <p className="text-zinc-600 dark:text-zinc-400 text-sm font-medium">
              학사 및 팀 프로젝트 아카이브
            </p>
          </div>

          <div className="flex flex-col gap-8">
            {otherProjects.map((item) => (
              <ProjectItem key={item.id} {...item} isLink={false} />
            ))}
          </div>
        </section>

      </Layout>
      <Footer contact={information.contact} name={information.name} />
    </>
  );
};

export default Home;

export const getStaticProps = async () => {
  const filePath = path.join(process.cwd(), "data.json");
  const jsonData = await fsPromises.readFile(filePath, "utf8");
  const objectData = JSON.parse(jsonData);
  const informationWithData = { ...objectData.information };
  const projectWithData = objectData.project.map(async (item: ProjectProps) => {
    return getImgSrc({ section: "project", item: await getMd({ section: "project", item }) });
  });

  return {
    props: {
      ...objectData,
      information: informationWithData,
      workExperience: [],
      project: await Promise.all(projectWithData),
    },
  };
};

const getMd = async ({ section, item }: { section: string; item: any }) => {
  try {
    const markdownModule = await import(`../../public/markdown/${section}/${"id" in item ? item.id : "introduce"}.md`);
    return { ...item, markdown: markdownModule.default as string };
  } catch { return item; }
};

const getImgSrc = async ({ section, item }: { section: string; item: any }) => {
  if (item.imgSrc) return item;
  const imgSrc = `/images/${section}/${"id" in item ? item.id : "profile"}.png`;
  const filePath = path.join(process.cwd(), "public", imgSrc);
  try {
    await fs.stat(filePath);
    return { ...item, imgSrc: imgSrc };
  } catch { return item; }
};