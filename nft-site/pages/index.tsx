import Link from 'next/link';
import { client } from '../libs/client';
import type { Blogs } from '../types/blogs';

type ArrayBlog = {
  blogs: Array<Blogs>;
};

export default function Home({ blogs }: ArrayBlog) {
  return (
    <div>
      <ul>
        {blogs.map((blog) => (
          <li key={blog.id}>
            <Link href={`/blogs/${blog.id}`}>
              <a>{blog.title}</a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

// データをテンプレートに受け渡す部分の処理
export const getStaticProps = async () => {
  const data = await client.get({ endpoint: 'blogs' });

  return {
    props: {
      blogs: data.contents
    }
  };
};
