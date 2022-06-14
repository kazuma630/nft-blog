export type Blogs = {
  id: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  revisedAt: string;
  title: string;
  body: string;
  thumbnail: TagObj;
  tag: { key: string }[]; // 配列内にオブジェクト
};

interface TagObj {
  url: string;
  height: number;
  width: number;
}
