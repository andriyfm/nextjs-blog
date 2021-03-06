import Layout from "../../components/layout";
import { getAllPostIds, getPostData } from "../../lib/posts";
import Head from "next/head";
import Date from "../../components/date";
import { GetStaticPaths, GetStaticProps } from "next";

type TProps = {
  postData: {
    id: string;
    title: string;
    date: string;
    contentHtml: string;
  };
};

export default function Post({ postData }: TProps) {
  return (
    <Layout>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <Date dateString={postData.date} />
      <br />
      {postData.title}
      <br />
      {postData.id}
      <br />
      {postData.date}
      <br />
      <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
    </Layout>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const postData = await getPostData(params.id as string);
  return {
    props: {
      postData,
    },
  };
};
