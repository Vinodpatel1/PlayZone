import React from "react";

function ChatMsg({ name, message, avatar }) {
  return (
    <div className="flex items-start gap-3 px-3 py-2 hover:bg-gray-50 rounded-lg">
      {/* Avatar */}
      <img
        src={avatar || "https://i.pravatar.cc/40"}
        alt={name}
        className="w-8 h-8 rounded-full"
      />

      {/* Name + Message */}
      <div>
        <p className="text-sm font-semibold">{name}</p>
        <p className="text-sm text-gray-700">{message}</p>
      </div>
    </div>
  );
}

export default ChatMsg;
