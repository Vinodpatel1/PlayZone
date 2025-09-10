import { Home, PlaySquare, ListVideo } from "lucide-react";
import { use } from "react";
import { useSelector } from "react-redux";

export default function Sidebar() {

  const isSidebarOpen = useSelector((store) => store.app.issidebarOpen);

  // if (!isSidebarOpen) return null;

  const sidebarItems = [
    {
      icon: <Home className="w-6 h-6 text-gray-700" />,
      label: "Home",
    },
    {
      icon: <PlaySquare className="w-6 h-6 text-gray-700" />,
      label: "Shorts",
    },
    {
      icon: <ListVideo className="w-6 h-6 text-gray-700" />,
      label: "Subscriptions",
    },

    {
      icon: <Home className="w-6 h-6 text-gray-700" />,
      label: "Home",
    },
    {
      icon: <PlaySquare className="w-6 h-6 text-gray-700" />,
      label: "Shorts",
    },
    {
      icon: <ListVideo className="w-6 h-6 text-gray-700" />,
      label: "Subscriptions",
    },

    {
      icon: <Home className="w-6 h-6 text-gray-700" />,
      label: "Home",
    },
    {
      icon: <PlaySquare className="w-6 h-6 text-gray-700" />,
      label: "Shorts",
    },
    {
      icon: <ListVideo className="w-6 h-6 text-gray-700" />,
      label: "Subscriptions",
    },

    {
      icon: <Home className="w-6 h-6 text-gray-700" />,
      label: "Home",
    },
    {
      icon: <PlaySquare className="w-6 h-6 text-gray-700" />,
      label: "Shorts",
    },
    {
      icon: <ListVideo className="w-6 h-6 text-gray-700" />,
      label: "Subscriptions",
    },

    {
      icon: <Home className="w-6 h-6 text-gray-700" />,
      label: "Home",
    },
    {
      icon: <PlaySquare className="w-6 h-6 text-gray-700" />,
      label: "Shorts",
    },
    {
      icon: <ListVideo className="w-6 h-6 text-gray-700" />,
      label: "Subscriptions",
    },

    {
      icon: <Home className="w-6 h-6 text-gray-700" />,
      label: "Home",
    },
    {
      icon: <PlaySquare className="w-6 h-6 text-gray-700" />,
      label: "Shorts",
    },
    {
      icon: <ListVideo className="w-6 h-6 text-gray-700" />,
      label: "Subscriptions",
    },

    {
      icon: <Home className="w-6 h-6 text-gray-700" />,
      label: "Home",
    },
    {
      icon: <PlaySquare className="w-6 h-6 text-gray-700" />,
      label: "Shorts",
    },
    {
      icon: <ListVideo className="w-6 h-6 text-gray-700" />,
      label: "Subscriptions",
    },
    {
      icon: <Home className="w-6 h-6 text-gray-700" />,
      label: "Home",
    },
    {
      icon: <PlaySquare className="w-6 h-6 text-gray-700" />,
      label: "Shorts",
    },
    {
      icon: <ListVideo className="w-6 h-6 text-gray-700" />,
      label: "Subscriptions",
    },
  ];

  return (
    <div className={`h-screen bg-white shadow-md flex flex-col py-4 fixed top-14 left-0 overflow-y-auto transition-all duration-300
        ${isSidebarOpen ? "w-56" : "w-20"}
      `}
    >
      <div className="flex flex-col space-y-1">
        {sidebarItems.map((item, index) => (
          <div
            key={index}
            className="flex items-center gap-4 cursor-pointer hover:bg-gray-100 p-3 rounded-lg transition"
          >
            {item.icon}
            { 
            isSidebarOpen &&
              <span className="text-sm font-medium text-gray-800">
              {item.label}
            </span>
            }
          </div>
        ))}
      </div>
    </div>
  );
}
