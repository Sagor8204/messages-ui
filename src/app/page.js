import Chat from "@/components/Chat";
import Sidebar from "@/components/sidebar";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex w-[1024px] mx-auto">
      {/* sidebar */}
      <Sidebar />

      {/* chats */}
      <Chat />
    </div>
  );
}
