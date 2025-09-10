import React, { useEffect, useState } from "react";
import axios from "axios";
import Avatar from "react-avatar";
import { API_KEY } from "../constants/api";

export default function VdoCard({ video }) {
  const { snippet, statistics } = video;
  const { title, thumbnails, channelTitle, channelId } = snippet;

  const [channelIcon, setChannelIcon] = useState(null);

  useEffect(() => {
    const fetchChannelIcon = async () => {
      try {
        const res = await axios.get(
          `https://www.googleapis.com/youtube/v3/channels?part=snippet&id=${channelId}&key=${API_KEY}`
        );
        const iconUrl =
          res.data.items[0]?.snippet?.thumbnails?.default?.url || null;
        setChannelIcon(iconUrl);
      } catch (error) {
        console.error("Error fetching channel icon:", error);
      }
    };

    if (channelId) {
      fetchChannelIcon();
    }
  }, [channelId]);

  return (
    <div className="w-full max-w-sm cursor-pointer">
      {/* Thumbnail */}
      <img
        src={thumbnails.medium.url}
        alt={title}
        className="w-full h-40 object-cover rounded-xl"
      />

      {/* Details */}
      <div className="flex mt-3 gap-3">
        {/* Channel Avatar */}
        {channelIcon ? (
          <img
            src={channelIcon}
            alt={channelTitle}
            className="w-10 h-10 rounded-full"
          />
        ) : (
          <Avatar name={channelTitle} size="40" round={true} />
        )}

        {/* Title + Channel Info */}
        <div className="flex flex-col">
          <h3 className="text-sm font-semibold line-clamp-2">{title}</h3>
          <p className="text-xs text-gray-600">{channelTitle}</p>
          {statistics && (
            <p className="text-xs text-gray-500">
              {parseInt(statistics.viewCount).toLocaleString()} views
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
