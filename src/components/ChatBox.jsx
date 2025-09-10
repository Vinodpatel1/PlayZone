import React, { useEffect } from "react";
import { useSelector,useDispatch } from "react-redux";
import ChatMsg from "./ChatMsg";
import { addMessage } from "../utils/chatSlice";
import { getRandomElement, randomMessages, randomNames } from "../utils/random";

function ChatBox() {
  const messages = useSelector((store) => store.chat.messages);

  const dispatch = useDispatch();
    useEffect(()=>{

        const interval = setInterval(() => {
            dispatch(
                addMessage({
                    name: getRandomElement(randomNames),
                    message: getRandomElement(randomMessages),
                })
            )
        },30000);

        return () => clearInterval(interval);

    },[])
  return (
    <div className="flex flex-col gap-2 p-2">
      {messages.map((msg, i) => (
        <ChatMsg key={i} name={msg.name} message={msg.message} />
      ))}
    </div>
  );
}

export default ChatBox;
