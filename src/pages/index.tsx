import fsPromises, * as fs from "fs/promises";
import path from "path";
import { NextPage } from "next";
import Image from "next/image";
import ReactMarkdown from "react-markdown";

import Footer from "@/components/Footer";
import Layout from "@/components/Layout";
import ResumeTitle from "@/components/ResumeTitle";
import ProjectItem from "@/components/Project/ProjectItem";
import { DataProps, ProjectProps } from "@/types";

const Home: NextPage<DataProps> = ({
  resumeTitle,
  information,
  project,
  education,
}) => {
  const featuredProjects = project.slice(0, 3);
  const otherProjects = project.slice(3);

  return (
    <>
      <ResumeTitle resumeTitle={resumeTitle} />
      
      <Layout>
        {/* 배경 은은한 빛 효과 */}
        <div className="fixed top-0 left-0 w-full h-full overflow-hidden -z-50 pointer-events-none">
          <div className="absolute top-[-10%] right-[-10%] w-[600px] h-[600px] rounded-full bg-blue-400/5 dark:bg-blue-600/5 blur-[120px]"></div>
          <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] rounded-full bg-cyan-400/5 dark:bg-cyan-600/5 blur-[120px]"></div>
        </div>
        
        {/* Intro Section */}
        <section className="pt-20 pb-16 animate-fade-in-up relative">
          
          {/* 타이틀 영역 */}
          <div className="mb-24 text-left">
            <h1 className="text-4xl md:text-7xl font-black text-black dark:text-white leading-tight tracking-tighter mb-6">
              데이터의 무게를 견디는 <br />
              <span className="text-blue-600 dark:text-blue-500">단단한 엔지니어링</span>
            </h1>
            <p className="text-xl text-zinc-600 dark:text-zinc-400 font-medium">
               비즈니스의 성장을 견인하는 Data Engineer 유호인입니다.
            </p>
          </div>

          {/* 프로필 사진 & 기본 정보 & 학력 */}
          <div className="flex flex-col md:flex-row gap-12 md:gap-20 items-start mb-8">
            
            {/* [왼쪽] 사진 */}
            <div className="flex-shrink-0 mx-auto md:mx-0">
               <div className="relative w-48 h-64 md:w-56 md:h-72 bg-gray-100 dark:bg-zinc-800 overflow-hidden shadow-xl rounded-sm">
                 <Image 
                   src="/images/profile.png" 
                   alt="Profile"
                   fill
                   className="object-cover"
                   priority
                 />
               </div>
            </div>

            {/* [오른쪽] 정보 영역 (Contact & Education) */}
            <div className="flex-1 w-full flex flex-col gap-10 pt-2">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                {/* Contact */}
                <div className="flex flex-col gap-4">
                  <h3 className="font-bold text-black dark:text-white text-sm uppercase tracking-wider border-b border-gray-200 dark:border-zinc-800 pb-2">
                    Contact
                  </h3>
                  <div className="flex flex-col gap-3 text-lg font-medium text-zinc-800 dark:text-zinc-200">
                    <div className="flex justify-between md:block">
                      <span className="text-zinc-400 text-sm block mb-1">Email</span>
                      <a href="mailto:ghdls3070@naver.com" className="hover:text-blue-600 underline underline-offset-4 break-all">ghdls3070@naver.com</a>
                    </div>
                    <div className="flex justify-between md:block">
                      <span className="text-zinc-400 text-sm block mb-1">Phone</span>
                      <span>010-3339-6022</span>
                    </div>
                  </div>
                </div>

                {/* Education */}
                <div className="flex flex-col gap-4">
                  <h3 className="font-bold text-black dark:text-white text-sm uppercase tracking-wider border-b border-gray-200 dark:border-zinc-800 pb-2">
                    Education
                  </h3>
                  <div className="flex flex-col gap-4">
                    {education.map((edu) => (
                      <div key={edu.id}>
                        <h4 className="text-lg font-bold text-black dark:text-white">{edu.name}</h4>
                        <span className="text-sm text-zinc-500 font-mono">{edu.period[0]} ~ {edu.period[1]}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* [수정] 소개 섹션: 구조화된 데이터(intro) 렌더링 */}
          <div className="flex flex-col items-start justify-start text-left mb-24 w-full">
            <h3 className="font-black text-black dark:text-white text-2xl uppercase tracking-widest mb-10 border-b-2 border-zinc-800 dark:border-zinc-200 pb-2">
              소개
            </h3>
            
            <div className="flex flex-col gap-0 max-w-4xl">
              {information.intro && information.intro.map((item) => (
                <div key={item.id} className="flex flex-col gap-3 mb-12 last:mb-0">
                  {/* 소제목: 크기 줄임(text-xl), 파란색 강조 */}
                  <h4 className="text-xl font-bold text-blue-600 dark:text-blue-400">
                    {item.title}
                  </h4>
                  {/* 본문: 줄 간격 넓힘(leading-loose), 색상(zinc-400) */}
                  <p className="text-base md:text-lg text-zinc-600 dark:text-zinc-300 leading-loose font-medium">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </section>

        {/* Featured Projects */}
        <section className="flex flex-col gap-16 mb-32">
          <div className="border-b-4 border-black dark:border-white pb-6">
            <h2 className="text-3xl md:text-5xl font-black text-black dark:text-white mb-2 tracking-tight">
              Featured Projects
            </h2>
            <p className="text-zinc-600 dark:text-zinc-400 text-lg font-medium">
              핵심 데이터 엔지니어링 프로젝트
            </p>
          </div>
          
          <div className="flex flex-col">
            {featuredProjects.map((item) => (
              <ProjectItem key={item.id} {...item} isLink={true} />
            ))}
          </div>
        </section>

        {/* Other Projects */}
        <section className="flex flex-col gap-16 mb-32">
          <div className="border-b-4 border-black dark:border-white pb-6">
            <h2 className="text-2xl md:text-4xl font-black text-black dark:text-white mb-2 tracking-tight">
              Other Projects
            </h2>
          </div>

          <div className="flex flex-col">
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