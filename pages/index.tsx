import { EyeIcon, SearchIcon } from "@heroicons/react/solid";
import type { NextPage } from "next";
import Head from "next/head";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import { Post } from "../typings";
import { sanityClient, urlFor } from "../sanity";
import TimeAgo from "react-timeago";
import Link from "next/link";
import PostItem from "../components/PostItem";

interface Props {
  posts: [Post];
}

const Home: NextPage<Props> = ({ posts }: Props) => {
  console.log(posts);
  return (
    <div className="bg-zinc-800 min-h-screen">
      <Head>
        <title>
          Stack Overflow - Where Developers Learn, Share, & Build Careers
        </title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <div className="max-w-7xl mx-auto flex">
        <Sidebar />

        <main className="w-full space-y-5">
          <div className="flex flex-col space-y-6 p-2 m-3">
            <div className="justify-between flex mx-2 items-center">
              <h1 className="text-gray-300 text-2xl">Top Questions</h1>
              <button className="px-2 py-[0.4rem] bg-sky-500 rounded text-white text-sm">
                Ask Question
              </button>
            </div>
            <div className="flex space-x-4 border border-gray-500 rounded justify-center self-end text-gray-400 p-2 items-center text-sm">
              <h3 className="text-gray-300 bg-gray-500 bg-opacity-50 p-1">
                Interesting
              </h3>
              <h3>Bountied</h3>
              <h3>Hot</h3>
              <h3>Week</h3>
              <h3>Month</h3>
            </div>
          </div>
          {posts.map((post) => (
            <PostItem key={post._id} post={post} />
          ))}
        </main>

        <div className="hidden lg:block mx-auto space-y-4 mt-4">
          <div className="border border-gray-600 rounded-sm shadow-lg w-64">
            <h3 className="bg-zinc-700/40 text-gray-300 p-3">Custom Filters</h3>
            <div className="flex-col mx-auto space-y-6 mt-4 hidden md:flex">
              <p className="text-blue-500 text-sm p-3">
                Create a custom filter
              </p>
            </div>
          </div>
          <div className="border border-gray-600 rounded-sm shadow-lg w-64">
            <h3 className="bg-zinc-700/40 text-gray-300 p-3">Watched Tags</h3>
            <div className="flex items-center flex-col p-3 space-y-3">
              <SearchIcon className="h-20 text-blue-400" />
              <p className="text-gray-500 text-sm text-center">
                Watch tags to curate your list of questions.
              </p>
              <button className="px-2 py-2 bg-[#9cc1db]/20 border border-[#9cc1db] rounded-md text-[#9cc1db] text-sm flex items-center">
                <EyeIcon className="h-4 w-4 mr-1" />
                Watch a tag
              </button>
            </div>
          </div>
          <div className="border border-gray-600 rounded-sm shadow-lg w-64">
            <h3 className="bg-zinc-700/40 text-gray-300 p-3">Ignored Tags</h3>
            <div className="flex items-center flex-col p-3 space-y-3">
              <button className="px-2 py-2 bg-[#9cc1db]/20 border border-[#9cc1db] rounded-md text-[#9cc1db] text-sm">
                Add an ignored tag
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

export const getStaticProps = async () => {
  const query = `*[_type == "post"]{
  _id,
  _createdAt,
  title,
  views,
  upvotes,
  downvotes,
  slug,
  author-> {
    name,
    image
  },
  answers
}`;

  const posts = await sanityClient.fetch(query);

  return {
    props: {
      posts,
    },
    revalidate: 10,
  };
};
