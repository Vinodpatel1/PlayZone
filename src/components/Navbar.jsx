import { Menu, Search, Mic, Bell, Video } from "lucide-react";
import Avatar from "react-avatar";
import { useDispatch, useSelector } from "react-redux";
import {
  setCatgeory,
  setSearchSuggestion,
  toggleSidebar,
} from "../utils/appslice";
import { useEffect, useState, useRef } from "react";
import axios from "axios";
import { API_KEY, YT_SEARCH_API } from "../constants/api"; // make sure API_KEY is defined

export default function Navbar() {
  const dispatch = useDispatch();
  const [input, setInput] = useState("");
  const wrapperRef = useRef(null);

  // Read suggestions from store
  const searchSuggestion = useSelector((store) => store.app?.searchSuggestion);

  const searchByTag = () => {
    if (!input?.trim()) return;
    dispatch(setCatgeory(input));
    setInput("");
    dispatch(setSearchSuggestion([])); // clear suggestions
  };

  // Fetch suggestions from YouTube API
  const showSuggestion = async () => {
    if (!input?.trim()) return;

    try {
      const res = await axios.get(YT_SEARCH_API, {
        params: {
          part: "snippet",
          q: input,
          maxResults: 5,
          type: "video",
          key: API_KEY,
        },
      });

      const titles = res.data.items.map((item) => item.snippet.title);
      dispatch(setSearchSuggestion(titles));
    } catch (error) {
      console.error("Suggestion fetch error:", error);
    }
  };

  // Debounce API calls
  useEffect(() => {
    if (!input?.trim()) {
      dispatch(setSearchSuggestion([]));
      return;
    }
    const timer = setTimeout(() => showSuggestion(), 300);
    return () => clearTimeout(timer);
  }, [input]);

  // Click outside to close suggestions
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (wrapperRef.current && !wrapperRef.current.contains(e.target)) {
        dispatch(setSearchSuggestion([]));
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  const toggleEffect = () => dispatch(toggleSidebar());

  return (
    <nav className="flex items-center justify-between px-4 py-2 bg-white shadow fixed top-0 left-0 right-0 z-50">
      {/* Left Section */}
      <div className="flex items-center gap-3">
        <Menu
          onClick={toggleEffect}
          className="w-6 h-6 cursor-pointer md:block"
        />
        <div className="flex items-center gap-1 cursor-pointer">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/4/42/YouTube_icon_%282013-2017%29.png"
            alt="YouTube"
            className="w-8 h-8"
          />
          <span className="font-bold text-xl hidden sm:block">YouTube</span>
        </div>
      </div>

      {/* Search Section */}
      {/* Search Section (Desktop) */}
<div
  ref={wrapperRef}
  className="hidden md:flex items-center flex-1 max-w-xl px-4 relative"
>
  {/* input + search button wrapper */}
  <div className="flex flex-1 relative">
    <input
      type="text"
      placeholder="Search"
      value={input}
      onChange={(e) => setInput(e.target.value)}
      className="w-full px-4 py-2 border rounded-l-full outline-none focus:ring-1 focus:ring-gray-400"
    />
    <button
      onClick={searchByTag}
      className="px-4 py-2 border border-l-0 rounded-r-full bg-gray-100 hover:bg-gray-200"
    >
      <Search className="w-5 h-5" />
    </button>

    {/* Suggestions box positioned under input */}
    {searchSuggestion?.length > 0 && (
      <div className="absolute top-full left-0 w-full mt-1 bg-white border border-gray-200 rounded-lg shadow-lg z-50">
        {searchSuggestion.map((s, i) => (
          <div
            key={i}
            className="flex items-center px-4 py-2 hover:bg-gray-100 cursor-pointer text-sm"
            onClick={() => {
              setInput(s);
              dispatch(setCatgeory(s));
              dispatch(setSearchSuggestion([]));
            }}
          >
            <Search className="w-4 h-4 text-gray-500 mr-2" />
            <span className="truncate">{s}</span>
          </div>
        ))}
      </div>
    )}
  </div>

  {/* Mic button stays outside */}
  <button className="ml-2 p-2 rounded-full hover:bg-gray-200">
    <Mic className="w-5 h-5" />
  </button>
</div>


      {/* Right Section */}
      <div className="flex items-center gap-4">
        <button className="md:hidden p-2 rounded-full hover:bg-gray-200">
          <Search className="w-5 h-5" />
        </button>
        <button className="md:hidden p-2 rounded-full hover:bg-gray-200">
          <Mic className="w-5 h-5" />
        </button>

        <Video className="w-6 h-6 cursor-pointer hidden sm:block" />
        <Bell className="w-6 h-6 cursor-pointer hidden sm:block" />

        <Avatar
          name="Vinod Patel"
          size="35"
          round={true}
          src="https://i.pravatar.cc/150?img=32"
        />
      </div>
    </nav>
  );
}
