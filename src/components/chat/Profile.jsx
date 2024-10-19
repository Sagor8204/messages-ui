import Image from "next/image";
import { IoCallOutline } from "react-icons/io5";
import { CiVideoOn } from "react-icons/ci";
import { IoIosSearch } from "react-icons/io";
import { BsThreeDotsVertical } from "react-icons/bs";

export default function Profile(){
    return (
      <div className="bg-white flex items-center px-6 py-[9px] ">
        <div className="flex items-start flex-1 gap-4">
          <Image
            width={40}
            className="rounded-full "
            height={40}
            src="/images/sender-avatar.png"
          ></Image>

          <div>
            <h1>Felecia Rower</h1>
            <p className="text-sm text-black/70">Frontend Developer</p>
          </div>
        </div>

        <div className="flex text-lg text-black/70 gap-6">
          <IoCallOutline />
          <CiVideoOn />
          <IoIosSearch />
          <BsThreeDotsVertical />
        </div>
      </div>
    );
}