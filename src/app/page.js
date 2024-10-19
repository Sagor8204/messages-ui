import Chat from "@/components/chat/Chat";
import Sidebar from "@/components/sidebar/Sidebar";

export default function Home() {
  return (
    <div className="flex w-[1024px] mx-auto my-4">
      <Sidebar />

      <Chat />
    </div>
  );
}
