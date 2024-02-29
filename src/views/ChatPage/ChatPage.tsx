import React from "react";
import Anchor from "../../components/Anchor/Anchor";

const ChatPage = () => {
  return (
    <div className="flex">
      <div className="w-1/3">
        <div className="bg-e5e5e5 py-5 px-8 flex items-center justify-between">
          <Anchor href="/" variant="">
            <span id="triangle" />
          </Anchor>
          <div className="flex items-center gap-5">
            <p className="text-5d5d5d text-3xl font-bold">Steven</p>
            <img src={require("../../assets/images/facebook.png")} alt="logo" />
            <span id="three-dot">
              <li></li>
              <li></li>
              <li></li>
            </span>
          </div>
        </div>
        <div className="bg-fafafa min-h-screen"></div>
      </div>
      <span className="bg-d1d1d1 w-2"></span>
      <div className="w-2/3">
        <div className="bg-e5e5e5 chat-navbar">
          <p className="text-5d5d5d font-bold text-xl pl-24">
            Mr. Steve Unsworth
          </p>
        </div>
        <div className="bg-wallpaper min-h-screen"></div>
      </div>
    </div>
  );
};

export default ChatPage;