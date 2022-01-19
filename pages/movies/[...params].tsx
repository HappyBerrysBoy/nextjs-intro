import { NextPage } from "next";
import { useRouter } from "next/router";
import Seo from "../../components/Seo";

const Detail: NextPage = ({ params }) => {
  const router = useRouter();
  console.log(router);
  const [title, id] = params || [];

  return (
    <div>
      <Seo title={title} />
      <h4>{title || "loading......"}</h4>
    </div>
  );
};

export default Detail;

export async function getServerSideProps(context) {
  console.log(context);
  const params = context.params.params;

  console.log("params", params);

  const { results } = await (
    await fetch("http://localhost:3000/api/movies")
  ).json();
  return {
    props: {
      params,
    },
  };
}
