// MessageContext.js
import React, { createContext, useContext } from "react";
import { message } from "antd";

const MessageContext = createContext();

export const useMessageContext = () => {
  return useContext(MessageContext);
};

export const MessageProvider = ({ children }) => {
  const [messageApi, contextHolder] = message.useMessage();

  const showMessage = (type, content) => {
    messageApi.open({
      type:type,
      content:content,
    });
  };

  return (
    <MessageContext.Provider value={showMessage}>
      {contextHolder}
      {children}
    </MessageContext.Provider>
  );
};
