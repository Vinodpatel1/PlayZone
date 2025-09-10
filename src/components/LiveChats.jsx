import React, { useState } from "react";
import { Send } from "lucide-react";
import { useDispatch } from "react-redux";
import { addMessage } from "../utils/chatSlice";

function LiveChats() {
  const [text, setText] = useState("");
  const dispatch = useDispatch();

  const sendMessage = () => {
    if (!text.trim()) return;
    dispatch(addMessage({ name: "You", message: text }));
    setText("");
  };

  return (
    <div className="flex items-center border-t px-3 py-2 gap-2">
      <img
        src="https://i.pravatar.cc/40?img=12"
        alt="user avatar"
        className="w-8 h-8 rounded-full"
      />

      <input
        type="text"
        placeholder="Type your message..."
        value={text}
        onChange={(e) => setText(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && sendMessage()}
        className="flex-1 px-3 py-1 border rounded-full text-sm outline-none"
      />

      <button
        onClick={sendMessage}
        className="ml-2 text-blue-500 font-medium"
      >
        <Send className="w-5 h-5" />
      </button>
    </div>
  );
}

export default LiveChats;
