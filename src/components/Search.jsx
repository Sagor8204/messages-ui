import Image from "next/image";
import { IoMdSearch } from "react-icons/io";

export default function Search() {
  return (
    <div className="flex items-center gap-3 p-3 border-b">
      <div className="relative">
        <Image
          src="/images/avatar-1.png"
          alt="avatar-1.png"
          width={40}
          height={40}
          className="rounded-full"
        />

        <div className="absolute right-0 bottom-0 w-3 h-3 bg-green-500 rounded-full border-[2px] border-white" />
      </div>

      <div className="flex items-center border rounded-md w-full">
        <IoMdSearch className="w-9 text-xl text-gray-500" />
        <input
          type="text"
          placeholder="Search"
          className="outline-none bg-transparent p-[6px] pl-0 placeholder:text-sm"
        />
      </div>
    </div>
  );
}
