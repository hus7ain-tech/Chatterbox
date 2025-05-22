import React, { useEffect } from "react";
import { useChatStore } from "../store/useChatStore";

const ChatContainer = () => {
  const { messages, getMessages, isMessagesLoading, selectedUser } =
    useChatStore();
  useEffect(() => {
    getMessagers(selectedUser._id);
  }, [selectedUser._id, getMessages]);

  if (isMessagesLoading) return <div>Loading...</div>;
  return <div>Chat container</div>;
};

export default ChatContainer;
