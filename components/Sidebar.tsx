import { GlobeIcon, InformationCircleIcon } from "@heroicons/react/solid";

const Sidebar: React.FC = () => {
  return (
    <div className="hidden sm:flex border-r border-gray-500 flex-col text-gray-300 text-sm space-y-4 min-w-[12rem] p-4 flex-initial">
      <h3 className="font-bold bg-gray-600 p-2 bg-opacity-40 border-r-2 border-orange-500 w-full">
        Home
      </h3>
      <div>
        <h2 className="text-gray-400 text-xs my-1">PUBLIC</h2>
        <div className="ml-3 space-y-4">
          <div className="flex items-center">
            <GlobeIcon className="w-6 h-6 mr-1" />
            <h3>Questions</h3>
          </div>
          <h3>Tags</h3>
          <h3>Users</h3>
          <h3>Companies</h3>
        </div>
      </div>
      <div>
        <div className="flex items-center justify-between">
          <h2 className="text-gray-400 text-sm my-1">COLLECTIVES</h2>
          <InformationCircleIcon className="w-4 h-4" />
        </div>
        <h3 className="ml-3">Explore Collectives</h3>
      </div>
      <div>
        <div className="flex items-center justify-between">
          <h2 className="text-gray-400 text-sm my-1">TEAMS</h2>
          <InformationCircleIcon className="w-4 h-4" />
        </div>
        <h3 className="ml-3">Create free Team</h3>
      </div>
    </div>
  );
};

export default Sidebar;
