import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import { getSortedPostsData } from "../lib/post";
import utilStyles from "../styles/utils.module.css";

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>

      <section className={utilStyles.headingMd}>
        <p>
          Occaecat cupidatat sint veniam ut Lorem nulla labore pariatur quis
          consectetur dolore. In duis in nostrud dolor. Excepteur reprehenderit
          excepteur excepteur do ad ut. Duis aliquip est ea consequat incididunt
          dolor qui velit officia aliqua quis adipisicing nostrud.
        </p>
        <p>
          (This is a sample website - you’ll be building a site like this on{" "}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>

      <section>
        {allPostsData.map(({ id, date, title }) => {
          return (
            <li key={id}>
              {title}
              <br />
              {id}
              <br />
              {date}
            </li>
          );
        })}
      </section>
    </Layout>
  );
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return { props: { allPostsData } };
}
