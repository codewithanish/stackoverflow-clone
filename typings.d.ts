export interface Post {
  _id: string;
  _createdAt: string;
  title: string;
  author: {
    name: string;
    image: string;
  };
  slug: {
    current: string;
  };
  body: [object];
  upvotes: number;
  downvotes: number;
  views: number;
  answers: number;
}
