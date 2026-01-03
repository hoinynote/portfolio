import "@/styles/globals.css";
import { DefaultSeo } from "next-seo";
import { ThemeProvider } from "next-themes";
import type { AppProps } from "next/app";

/**
 * @description SEO 설정 (본인 정보에 맞게 수정 가능)
 */
const DEFAULT_SEO = {
  title: "유호인 | Data Engineer",
  description: "안녕하세요, 데이터 엔지니어 유호인입니다.",
  canonical: "https://your-portfolio-url.com/",
  openGraph: {
    type: "website",
    locale: "ko_KR",
    url: "https://your-portfolio-url.com/",
    title: "유호인 | Data Engineer",
    site_name: "유호인 | Data Engineer",
    images: [
      {
        url: "/share.png",
        width: 285,
        height: 167,
        alt: "유호인 | Data Engineer",
      },
    ],
  },
  additionalLinkTags: [
    {
      rel: "icon",
      href: "/favicon.ico",
    },
  ],
};

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <DefaultSeo {...DEFAULT_SEO} />
      {/* [핵심 수정] 
        forcedTheme="dark": 사용자의 브라우저 테마와 상관없이 무조건 다크 모드로 고정합니다.
        enableSystem={false}: 시스템 설정 감지를 끕니다.
      */}
      <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false} forcedTheme="dark">
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
};

export default App;