import {
  MenuIcon,
  SearchIcon,
  UserCircleIcon,
  InboxIcon,
  StarIcon,
  QuestionMarkCircleIcon,
  ChatAltIcon,
} from "@heroicons/react/solid";

const Header: React.FC = () => {
  return (
    <header className="bg-zinc-700/40">
      <div className="py-1 shadow-md flex items-center px-1 max-w-7xl mx-auto justify-around">
        <div className="flex items-center space-x-3 sm:sapce-x-5 mr-1">
          <MenuIcon className="w-6 h-6 text-gray-300 sm:hidden" />
          <div className="flex items-center">
            <img
              className="h-12 w-12"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/Stack_Overflow_icon.svg/2048px-Stack_Overflow_icon.svg.png"
              alt=""
            />
            <h1 className="hidden sm:inline-flex text-gray-300 text-lg">
              stack <span className="font-bold ml-[0.2rem]">overflow</span>
            </h1>
          </div>
        </div>
        <div className="mx-4">
          <h3 className="text-gray-300 text-xs">Products</h3>
        </div>
        <div className="hidden sm:inline-block w-28 md:flex-auto max-w-6xl">
          <div className="relative">
            <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
              <SearchIcon className="w-5 h-5 text-gray-400" />
            </div>
            <input
              type="search"
              id="default-search"
              className="block p-2 pl-10 w-full text-sm bg-zinc-800 text-gray-300 focus:outline-none rounded-md border border-gray-500 focus:ring ring-0 ring-cyan-800"
              placeholder="Search..."
            />
          </div>
        </div>

        <div className="flex items-center space-x-3 ml-2">
          <SearchIcon className="w-6 h-6 text-gray-300 scale-100 hover:scale-105 ease-in duration-200 sm:hidden" />
          <UserCircleIcon className="w-6 h-6 text-gray-300 scale-100 hover:scale-105 ease-in duration-200" />
          <div className="hidden sm:flex text-sm space-x-2">
            <p className="font-semibold text-gray-300">55</p>
            <p className="text-gray-400">•1</p>
            <p className="text-orange-300/80">•8</p>
          </div>
          <InboxIcon className="w-6 h-6 text-gray-300 scale-100 hover:scale-105 ease-in duration-200" />
          <StarIcon className="w-6 h-6 text-gray-300 scale-100 hover:scale-105 ease-in duration-200" />
          <QuestionMarkCircleIcon className="w-6 h-6 text-gray-300 scale-100 hover:scale-105 ease-in duration-200" />
          <ChatAltIcon className="w-6 h-6 text-gray-300 scale-100 hover:scale-105 ease-in duration-200" />
        </div>
      </div>
    </header>
  );
};

export default Header;
