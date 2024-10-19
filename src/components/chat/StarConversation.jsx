import { BiMessageDetail } from "react-icons/bi";

export default function StarConversaton() {
  return (
    <div className="w-full flex items-center justify-center bg border bg-slate-200 rounded-tl-md">
      <div>
        <div className="w-14 h-14 rounded-full bg-primary-200 flex items-center justify-center mx-auto mb-3">
            <BiMessageDetail className="text-3xl text-purple-500" />
        </div>
        <button className="px-5 py-2 rounded-full bg-primary-400 text-white text-sm">Star Conversation</button>
      </div>
    </div>
  );
}
