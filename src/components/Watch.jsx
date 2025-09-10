import React from "react";
import { useSearchParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { API_KEY } from "../constants/api";
import Avatar from "react-avatar";
import { Bell } from "lucide-react";
import { MoreVertical } from "lucide-react";

import LiveChats from "./LiveChats";
import ChatBox from "./ChatBox";

function Watch() {
  const isSidebarOpen = useSelector((store) => store.app.issidebarOpen);
  const [searchParams] = useSearchParams();
  const vdoId = searchParams.get("v");

  const [singlevdoinfo, setSinglevdoInfo] = React.useState(null);

  const getSingleVdoInfo = async () => {
    if (!vdoId) return;

    try {
      const res = await fetch(
        `https://www.googleapis.com/youtube/v3/videos?part=snippet,statistics&id=${vdoId}&key=${API_KEY}`
      );
      const data = await res.json();
      setSinglevdoInfo(data.items[0]);
    } catch (error) {
      console.error(error);
    }
  };

  React.useEffect(() => {
    getSingleVdoInfo();
  }, [vdoId]);

  return (
    <div
      className={`mt-14 flex gap-4 p-4 ${isSidebarOpen ? "ml-56" : "ml-20"}`}
    >
      <div>
        <iframe
          width="900"
          height="500"
          src={`https://www.youtube.com/embed/${vdoId}?&autoplay=1`}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>

        <h1 className="mt-4 text-lg font-semibold">
          {singlevdoinfo ? singlevdoinfo.snippet.title : "Loading..."}
        </h1>

        {/* Video actions + Subscribe */}
        <div className="flex justify-between items-center mt-4 w-[900px]">
          {/* Left: Like, Dislike, Share */}

          {/* Right: Avatar + Subscribe */}
          <div className="flex items-center gap-3">
            <Avatar
              name={singlevdoinfo?.snippet?.channelTitle}
              size="40"
              round
              src={`https://i.pravatar.cc/150?u=${singlevdoinfo?.snippet?.channelId}`}
            />
            <div className="flex flex-col">
              <span className="font-semibold">
                {singlevdoinfo?.snippet?.channelTitle}
              </span>
              <span className="text-xs text-gray-500">
                {singlevdoinfo?.statistics?.viewCount
                  ? parseInt(
                      singlevdoinfo.statistics.viewCount
                    ).toLocaleString()
                  : 0}{" "}
                views •{" "}
                {singlevdoinfo?.snippet?.publishedAt
                  ? new Date(
                      singlevdoinfo.snippet.publishedAt
                    ).toLocaleDateString()
                  : ""}
              </span>
            </div>
            <button className="bg-red-600 text-white px-4 py-1 rounded font-medium hover:bg-red-700">
              Subscribe
            </button>
          </div>

          <div className="flex items-center gap-2">
            <button className="flex items-center gap-1 px-3 py-1 rounded hover:bg-gray-200">
              👍 Like
            </button>
            <button className="flex items-center gap-1 px-3 py-1 rounded hover:bg-gray-200">
              👎 Dislike
            </button>
            <button className="flex items-center gap-1 px-3 py-1 rounded hover:bg-gray-200">
              🔗 Share
            </button>
          </div>
        </div>
      </div>
      <div className="flex flex-col w-80 h-[500px] border rounded-lg bg-white shadow">
        {/* Chat Header */}
        <div className="flex justify-between items-center px-3 py-2 border-b">
          <span className="font-medium text-sm">Top Chat</span>
          <MoreVertical className="w-5 h-5 cursor-pointer" />
        </div>

        <div className="flex-1 flex-col-reverse overflow-y-auto px-2">
          <ChatBox></ChatBox>
        </div>
        <div>
          <LiveChats></LiveChats>
        </div>
      </div>
    </div>
  );
}

export default Watch;
