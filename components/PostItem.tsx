import Link from "next/link";
import TimeAgo from "react-timeago";
import { urlFor } from "../sanity";
import { Post } from "../typings";

interface Props {
  post: Post;
}

const PostItem: React.FC<Props> = ({ post }: Props) => {
  return (
    <div className="w-full border-t border-zinc-600 p-2 space-y-1 md:flex">
      <div className="flex space-x-1 md:flex-col md:text-right md:mr-4 text-sm text-gray-400">
        <p className="text-gray-300">{post.upvotes} votes</p>
        <p>{post.answers} answers</p>
        <p>{post.views} views</p>
      </div>
      <div className="space-y-1 flex-auto">
        <Link href={`/post/${post.slug.current}`}>
          <h1 className="text-blue-500 text-lg cursor-pointer">{post.title}</h1>
        </Link>
        <div className="flex justify-between">
          <div className="p-1 bg-[#9cc1db]/20 rounded-md text-[#9cc1db] text-xs inline-block">
            Tag
          </div>
          <div className="flex space-x-1 text-xs items-center text-gray-400 mr-1">
            <img
              className="w-6 h-6"
              src={urlFor(post.author.image).url()}
              alt={post.title}
            />
            <p className="text-blue-500">{post.author.name}</p>
            <p>1 asked</p>
            <TimeAgo date={post._createdAt} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostItem;
