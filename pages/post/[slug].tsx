import { GetStaticPaths, GetStaticProps } from "next";
import { sanityClient } from "../../sanity";
import { Post } from "../../typings";

interface Props {
  post: Post;
}

const Post: React.FC<Props> = ({ post }: Props) => {
  return <div>{post.title}</div>;
};

export default Post;

export const getStaticPaths: GetStaticPaths = async () => {
  const query = `*[_type == "post"]{
    _id,
    slug {
      current
    }
  }`;

  const posts = await sanityClient.fetch(query);

  const paths = posts.map((post: Post) => ({
    params: { slug: post.slug.current },
  }));

  return {
    paths,
    fallback: "blocking",
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const query = `*[_type == "post" && slug.current == $slug][0] {
  _id,
  _createdAt,
  title,
  author-> {
    name,
    image
  },
  slug,
  body,
  upvotes,
  views,
  downvotes,
}`;

  const post = await sanityClient.fetch(query, { slug: params?.slug });

  if (!post) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      post,
    },
    revalidate: 60, // 60 seconds
  };
};
