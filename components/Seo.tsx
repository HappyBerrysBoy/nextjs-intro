import Head from "next/head";

interface Title {
  title: string;
}

const Seo = ({ title }: Title) => {
  return (
    <Head>
      <title>{title} : Next Movies</title>
    </Head>
  );
};

export default Seo;
