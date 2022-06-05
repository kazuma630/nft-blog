import { client } from '../../libs/client';
import type { Blogs } from '../../types/blogs';

type Blog = {
  blog: Blogs;
};

export default function BlogId({ blog }: Blog) {
  return (
    <main>
      <h1>{blog.title}</h1>
      <p>{blog.publishedAt}</p>
      <div
        dangerouslySetInnerHTML={{
          __html: `${blog.body}`
        }}
      />
    </main>
  );
}

// 動的なパスの定義
export const getStaticPaths = async () => {
  const data = await client.get({ endpoint: 'blogs' });

  const paths = data.contents.map((content: Blogs) => `/blogs/${content.id}`);
  return { paths, fallback: false };
};

export const getStaticProps = async (context: any) => {
  const id = context.params.id;
  const data = await client.get({ endpoint: 'blogs', contentId: id });

  return {
    props: {
      blog: data
    }
  };
};
