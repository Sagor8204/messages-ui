import Chat from "@/components/Chat";
import Sidebar from "@/components/Sidebar";

export default function Home() {
  return (
    <div className="flex w-[1024px] mx-auto my-4">
      {/* sidebar */}
      <Sidebar />

      {/* chats */}
      <Chat />
    </div>
  );
}
