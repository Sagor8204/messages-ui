"use client";
import Chat from "@/components/chat/Chat";
import StarConversaton from "@/components/chat/StarConversation";
import Sidebar from "@/components/sidebar/Sidebar";
import { useState } from "react";

export default function Home() {
  const [activeUser, setActiveUser] = useState(null);

  return (
    <div className="flex w-[1024px] mx-auto my-4">
      <Sidebar activeUser={activeUser} setActiveUser={setActiveUser} />

      {activeUser ? <Chat activeUser={activeUser} /> : <StarConversaton />}
    </div>
  );
}
