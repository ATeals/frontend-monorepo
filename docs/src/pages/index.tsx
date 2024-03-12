import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />"
    >
      <main
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          padding: "5rem",
        }}
      >
        <img src="https://ateals.vercel.app/images/logo.webp" alt="logo" width={100} height={100} />
        <h1 style={{ margin: "5rem 0" }}>FrontEnd-Monorepo</h1>
        <p>리액트 학습을 위한 모노레포 리액트 라이브러리 제작</p>
      </main>
    </Layout>
  );
}
