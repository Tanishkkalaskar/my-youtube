import React, { useEffect, useState } from "react";
import LiveMessage from "./LiveMessage";
import {
  generateHumanUsername,
  generateRandomComment,
} from "../utils/LiveChat";
import { useDispatch, useSelector } from "react-redux";
import { addMessage, clearMessages } from "../utils/chatSlice";

const LiveChatList = () => {
  const [liveComment, setLiveComment] = useState("");
  const dispatch = useDispatch();
  const LiveChat = useSelector((store) => store.chat);

  useEffect(() => {
    const interval = setInterval(() => {
      const name = generateHumanUsername();
      const message = generateRandomComment();
      dispatch(addMessage({ name, message }));
    }, 1500);

    return () => {
      clearInterval(interval);
      console.log("removed");
      dispatch(clearMessages());
    };
  }, []);

  return (
    <>
      <div className="h-[50vh] flex flex-col-reverse border border-gray-200 overflow-y-scroll px-4 rounded-lg">
        {LiveChat &&
          LiveChat.map((liveChat, index) => (
            <LiveMessage
              key={index}
              name={liveChat.name}
              message={liveChat.message}
            />
          ))}
      </div>
      <div className="py-4">
        <form onSubmit={(e) => e.preventDefault()}>
          <input
            className="w-3/4 lg:w-[85%] border-gray-200 border-0 border-b-2 p-2"
            placeholder="Enter comment"
            value={liveComment}
            onChange={(e) => setLiveComment(e.target.value)}
          ></input>
          <button
            className="ml-2 p-2 hover:bg-gray-200 rounded-full"
            onClick={() => {
              dispatch(addMessage({ name: "Tanishk", message: liveComment }));
              setLiveComment("");
            }}
          >
            Send
          </button>
        </form>
      </div>
    </>
  );
};

export default LiveChatList;
