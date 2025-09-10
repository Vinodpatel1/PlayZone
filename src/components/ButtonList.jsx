import { useState } from "react";
import { useDispatch } from "react-redux";
import { setCatgeory } from "../utils/appslice";


export default function ButtonList() {
 const categories = [
  "All",
  "Gaming",
  "Trending",
  "Music",
  "News",
  "Sports",
  "Movies",
  "Fashion",
  "Live",
  "Learning",
  "Recently uploaded",
  "Podcasts",
  "Technology",
  "Travel",
  "Comedy",
  "Food",
  "Health",
  "Science",
  "Education",
  "History",
  "Documentary",
  "Animals",
  "Art",
  "DIY",
  "Kids",
];


    const [active,setActive] = useState("All");
    const dispatch = useDispatch();
    const vdotagname=(tag)=>{
      if(active!==tag){
        dispatch(setCatgeory(tag));
        setActive(tag);
      }
      console.log(tag);
    }
  
  return (
    <div className="flex gap-3 px-4 py-2 overflow-x-auto no-scrollbar whitespace-nowrap">
      {categories.map((cat, index) => (
        <button
          key={index}
          onClick={()=>{vdotagname(cat)}}
          className={`px-4 py-2 rounded-lg text-sm font-medium cursor-pointer transition 
             ${active === cat ? "bg-gray-700 text-white" : "bg-gray-200 text-gray-700 hover:bg-gray-300"}
          `}
        >
          {cat}
        </button>
      ))}
    </div>
  );
}
