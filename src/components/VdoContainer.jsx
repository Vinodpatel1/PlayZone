import axios from "axios";
import React, { useEffect } from "react";
import { API_KEY, YOUTUBE_VIDEOS_API } from "../constants/api";
import VdoCard from "./VdoCards";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setHomeViedo } from "../utils/appSlice";



function VdoContainer() {

  const dispatch = useDispatch();
  const {category,video} = useSelector((store) => store.app);
  const fetchingYtVideos = async () => {
    try {
      const res = await axios.get(YOUTUBE_VIDEOS_API);
      console.log(res.data.items);  // you’ll get the videos here

      dispatch(setHomeViedo(res.data.items));
      
    } catch (error) {
      console.error("Error fetching videos:", error);
    }
  };

  const fetchingViedoByCategory = async () => {

    try {

      const res = await axios.get(`https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=50&q=${category}&type=video&key=${API_KEY}`)
      dispatch(setHomeViedo(res.data.items));
      
      
    } catch (error) {
      console.error("Error fetching videos by category:", error);
    }
  }

  useEffect(() => {
    if (category === "All") {
      fetchingYtVideos();
    }
    else {
      fetchingViedoByCategory();
    }
    
    
  }, [category]);

  return <div className="p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  gap-6">
    {
      video ? video.map((video) => (
        <Link to={`/watch?v=${typeof video.id === 'object' ? video.id.videoId : video.id }`} 
        key={typeof video.id === 'object' ? video.id.videoId : video.id}>
          <VdoCard video={video} />
        </Link> 
      )) : <p>Loading videos...</p> 
    }
  </div>;
}

export default VdoContainer;
