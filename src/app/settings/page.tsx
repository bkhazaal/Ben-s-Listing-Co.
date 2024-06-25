"use client";

import { useState } from "react";
import Account from "./account";
import Buying from "./buying";
import Messages from "./messages";
import Notifications from "./notifications";
import Selling from "./selling";

export default function Page() {
  const [activeTab, setActiveTab] = useState("tab1");
  const handleTab1 = () => {
    setActiveTab("tab1");
  };
  const handleTab2 = () => {
    setActiveTab("tab2");
  };
  const handleTab3 = () => {
    setActiveTab("tab3");
  };
  const handleTab4 = () => {
    setActiveTab("tab4");
  };
  const handleTab5 = () => {
    setActiveTab("tab5");
  };
  return (
    <div className="flex justify-center">
      <div className="m-5 leading-10">
        <h1 className="mb-5 text-3xl font-bold">Settings</h1>
        <div className="grid text-[15px] text-slate-400">
          <p
            className={activeTab === "tab1" ? "active" : ""}
            style={{ cursor: "pointer" }}
            onClick={handleTab1}
          >
            Account
          </p>
          <p
            className={activeTab === "tab2" ? "active" : ""}
            style={{ cursor: "pointer" }}
            onClick={handleTab2}
          >
            Buying
          </p>
          <p
            className={activeTab === "tab3" ? "active" : ""}
            style={{ cursor: "pointer" }}
            onClick={handleTab3}
          >
            Selling
          </p>
          <p
            className={activeTab === "tab4" ? "active" : ""}
            style={{ cursor: "pointer" }}
            onClick={handleTab4}
          >
            Messages
          </p>
          <p
            className={activeTab === "tab5" ? "active" : ""}
            style={{ cursor: "pointer" }}
            onClick={handleTab5}
          >
            Notifications
          </p>
        </div>
      </div>
      <div className="w-full">
        {activeTab === "tab1" && <Account />}
        {activeTab === "tab2" && <Buying />}
        {activeTab === "tab3" && <Selling />}
        {activeTab === "tab4" && <Messages />}
        {activeTab === "tab5" && <Notifications />}{" "}
      </div>
    </div>
  );
}
