import { HiOutlineMicrophone } from "react-icons/hi2";
import { GrAttachment } from "react-icons/gr";
import { LuSend } from "react-icons/lu";

export default function SubmitMessage() {
  return (
    <div className="m-6  bg-white flex items-center gap-2">
      <input
        type="text"
        className=" w-full px-4 py-2 border-none outline-none "
        placeholder="Type your messange here..."
      />
      <HiOutlineMicrophone className="text-2xl" />
      <GrAttachment className="text-2xl text-[#E1DEF5E6]" />
      <button
        type="button"
        className="flex items-center gap-2 m-2 rounded-md bg-primary-400 py-2 px-5 text-white font-medium"
      >
        Send <LuSend className="text-md " />
      </button>
    </div>
  );
}
