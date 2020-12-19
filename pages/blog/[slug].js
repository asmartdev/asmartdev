import dynamic from "next/dynamic";
import Head from "next/head";
import moment from "moment";
import Header from "../../components/Header";

function importAll(r) {
  return r.keys().map((fileName) => ({
    slug: fileName
      .substr(1)
      .replace(/\/index\.mdx$/, "")
      .replace("/", ""),
    module: r(fileName),
  }));
}

async function getPosts() {
  return importAll(require.context("./", true, /\.mdx$/)).sort();
}

export async function getStaticPaths() {
  const posts = await getPosts();

  const paths = posts.map((p) => ({
    params: { slug: p.slug },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const posts = await getPosts();
  const post = posts.find((p) => p.slug === params.slug);
  const metadata = post.module.metadata;

  metadata.slug = params.slug;
  return { props: metadata };
}

const Post = (props) => {
  const MDXContent = dynamic(() => import(`./${props.slug}/index.mdx`));

  return (
    <div class="bg-gray-50 min-h-screen">
      <Head>
        <title>{props.title} | Amber Smart</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://rsms.me/inter/inter.css"></link>
      </Head>
      <Header />
      <article class="container mx-auto prose mt-16">
        <div class="text-center mb-24">
          <h1>{props.title}</h1>
          <p>{moment(props.date).format("Do MMMM YYYY")}</p>
        </div>
        <MDXContent />
      </article>
    </div>
  );
};

export default Post;
