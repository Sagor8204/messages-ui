import Image from "next/image";
import { IoCallOutline } from "react-icons/io5";
import { CiVideoOn } from "react-icons/ci";
import { IoIosSearch } from "react-icons/io";
import { BsThreeDotsVertical } from "react-icons/bs";
import { RiCheckDoubleLine } from "react-icons/ri";
import { HiOutlineMicrophone } from "react-icons/hi2";
import { GrAttachment } from "react-icons/gr";
import { LuSend } from "react-icons/lu";

export default function Chat() {
  return (
    <div className="w-2/3  bg-[#2f2b3d1f]  border">
      <div className="bg-white flex items-center px-6 py-4 ">
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

      <div className="p-6  ">

        {/* Receiver message */}
        <div className="flex flex-row-reverse gap-4  items-center">
          <Image
            src="/images/avatar-1.png"
            width={32}
            className="rounded-full"
            height={32}
          ></Image>

          <div className="text-white ">
            <h1 className="px-4 py-2 rounded-tr-none rounded-md mt-5 bg-primary-400 ">
              How can we help? We're here for you!
            </h1>
            <p className="flex justify-end gap-2 items-center text-black/50 text-sm">
              <RiCheckDoubleLine className="text-green-500 font-bold" />
              <span>1:15 PM</span>
            </p>
          </div>
        </div>
        {/* Sender Message */}
        <div className="flex flex-row gap-4 mt-5  items-start">
          <Image
            src="/images/sender-avatar.png"
            width={32}
            className="rounded-full"
            height={32}
          ></Image>

          <div className="text-white max-w-[430px] ">
            <h1 className="px-4 py-2 rounded-tl-none rounded-md  bg-white text-black ">
              Hey John, I am looking for the best admin template. Could you
              please help me to find it out?{" "}
            </h1>
            <div>
              <h1 className="px-4 w-fit py-2 rounded-tl-none rounded-md mt-2 bg-white text-black ">
                It should be MUI v5 compatible.
              </h1>
              <p className="  py-1 text-black/50 text-sm">
                1:15 PM
              </p>
             
            </div>
          </div>
        </div>

        {/* Receiver message */}
        <div className="flex flex-row-reverse gap-4 mt-5  items-start">
          <Image
            src="/images/avatar-1.png"
            width={32}
            className="rounded-full"
            height={32}
          ></Image>

          <div className="text-white flex flex-col justify-end items-end max-w-[430px] ">
            <h1 className="px-4 py-2 rounded-tr-none rounded-md  bg-primary-400 text-white ">
            Absolutely!
            </h1>
            <div>
              <h1 className="px-4 w-fit py-2 rounded-tr-none rounded-md mt-2  bg-primary-400 text-white ">
              This admin template is built with MUI!              </h1>
              <p className="flex justify-end gap-2 items-center text-black/50 text-sm">
                <RiCheckDoubleLine className="text-green-500 font-bold" />
                <span>1:16 PM</span>
              </p>
            </div>
          </div>
        </div>

            {/* Sender message */}

        <div className="flex flex-row gap-4 mt-5  items-start">
          <Image
            src="/images/sender-avatar.png"
            width={32}
            className="rounded-full"
            height={32}
          ></Image>

          <div className="text-white max-w-[430px] ">
            <h1 className="px-4 py-2 rounded-tl-none rounded-md  bg-white text-black ">
            Looks clean and fresh UI. 😍
            </h1>
            <div>
              <h1 className="px-4 w-fit py-2 rounded-tl-none rounded-md mt-2 bg-white text-black ">
              It's perfect for my next project.
              </h1>
              <h1 className="px-4 w-fit py-2 rounded-tl-none rounded-md mt-2 bg-white text-black ">
              How can I purchase it?
              </h1>
              <p className="  py-1 text-black/50 text-sm">
                1:17 PM
              </p>
              
            </div>
          </div>
        </div>
      </div>


      <div className="m-6  bg-white flex items-center gap-2">
          <input type="text" className=" w-full px-4 py-2 border-none outline-none " placeholder="Type your messange here..." />
          <HiOutlineMicrophone className="text-2xl"/>
          <GrAttachment className="text-2xl text-[#E1DEF5E6]" />
          <button type="button" className="flex items-center gap-2 m-2 rounded-md bg-primary-400 py-2 px-5 text-white font-medium">Send <LuSend className="text-md " />
          </button>

      </div>
    </div>
  );
}
